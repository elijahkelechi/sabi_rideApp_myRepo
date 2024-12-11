import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const productionUrl = "https://sabirideweb.com.ng/api/v1/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

// Request interceptor to add the access token to headers
customFetch.interceptors.request.use(async (config) => {
  // Fetch the access token from AsyncStorage
  const userData = await AsyncStorage.getItem("user");
  const accessToken = userData
    ? JSON.parse(userData)?.tokens?.access_token
    : null;

  if (accessToken) {
    // Attach the access token to the request headers
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// Response interceptor to handle token expiration
customFetch.interceptors.response.use(
  (response) => response, // If the response is successful, return it
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, try to refresh the token
      try {
        const userData = await AsyncStorage.getItem("user");
        const parsedUserData = userData ? JSON.parse(userData) : null;

        if (parsedUserData?.tokens?.refresh_token) {
          // Attempt to refresh the token
          const refreshResponse = await axios.post(
            `${productionUrl}users/token/refresh`,
            { refresh_token: parsedUserData.tokens.refresh_token }
          );
          console.log(refreshResponse);

          const newTokens = refreshResponse.data.data; // Assuming the tokens are inside the `data` field
          console.log(newTokens);
          // Update AsyncStorage with the new tokens
          const updatedUserData = {
            ...parsedUserData,
            tokens: {
              access_token: newTokens.access_token,
              refresh_token:
                newTokens.refresh_token || parsedUserData.tokens.refresh_token,
            },
          };

          await AsyncStorage.setItem("user", JSON.stringify(updatedUserData));

          // Retry the failed request with the new access token
          error.config.headers.Authorization = `Bearer ${newTokens.access_token}`;
          return customFetch(error.config);
        }
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        // Optionally, handle logout if the refresh token fails (e.g., remove user from AsyncStorage)
        await AsyncStorage.removeItem("user");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // If the error is not due to an expired token, reject it
  }
);
