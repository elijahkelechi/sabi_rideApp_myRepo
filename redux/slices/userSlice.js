import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Utility functions for AsyncStorage
const saveUserToAsyncStorage = async (user) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log("User stored successfully in AsyncStorage");
  } catch (error) {      
    console.error("Failed to store user in AsyncStorage:", error);
  }
};

const removeUserFromAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem("user");
    console.log("User removed from AsyncStorage");
  } catch (error) {
    console.error("Failed to remove user from AsyncStorage:", error);
  }
};

const fetchUserFromAsyncStorage = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Failed to fetch user from AsyncStorage:", error);
    return null;
  }
};

// Initial state
const initialState = {
  user: null, // User profile and data
  tokens: null, // Access and refresh tokens
  role: null, // Role of the user
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { access_token, refresh_token, role, ...userDetails } =
        action.payload;
      state.user = userDetails; // Store user profile (e.g., first_name, last_name, email)
      state.tokens = { access_token, refresh_token }; // Store tokens
      state.role = role; // Store user role

      // Store full user data in AsyncStorage
      const userData = {
        user: userDetails,
        tokens: { access_token, refresh_token },
        role,
      };

      saveUserToAsyncStorage(userData);
    },
    logoutUser: (state) => {
      state.user = null;
      state.tokens = null;
      state.role = null;

      // Remove user from AsyncStorage
      removeUserFromAsyncStorage();
    },
  },
});

// Export actions
export const { loginUser, logoutUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;

// Function to fetch user and initialize the store
export const initializeUser = () => async (dispatch) => {
  const storedUser = await fetchUserFromAsyncStorage();
  if (storedUser) {
    dispatch(
      loginUser({
        ...storedUser.user,
        ...storedUser.tokens,
        role: storedUser.role,
      })
    );
  }
};
