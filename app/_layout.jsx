import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "../redux/store";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    "Baloo-2-400": require("../assets/fonts/static/Baloo2-Regular.ttf"),
    "Baloo-2-500": require("../assets/fonts/static/Baloo2-Medium.ttf"),
    "Baloo-2-600": require("../assets/fonts/static/Baloo2-SemiBold.ttf"),
    "Baloo-2-700": require("../assets/fonts/static/Baloo2-Bold.ttf"),
    "Rubik-2-500": require("../assets/fonts/static/Rubik-Medium.ttf"),
    ...FontAwesome.font,
  });
  const router = useRouter();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SplashScreen" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        // options={{
        //   title: "",
        //   headerBackTitle: "",
        //   headerShadowVisible: false,
        //   headerStyle: { backgroundColor: "white" },
        //   headerLeft: () => (
        //     <TouchableOpacity onPress={router.back} style={{ padding: 8 }}>
        //       <Text
        //         style={{
        //           color: "#0088CD",
        //           fontFamily: "Baloo-2-400",
        //           fontSize: 18,
        //         }}
        //       >
        //         Cancel
        //       </Text>
        //     </TouchableOpacity>
        //   ),
        // }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(authenticated)/(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(authenticated)/External"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(authenticated)/External/sub/payment"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Testing" options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <InitialLayout />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default RootLayoutNav;
