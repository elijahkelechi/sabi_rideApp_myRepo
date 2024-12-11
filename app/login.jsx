import { Link, useRouter } from "expo-router";
import React, { useState, useMemo } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/userSlice";
import { customFetch } from "./utils";

const { height, width } = Dimensions.get("window");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [borColor, setBorColor] = useState("#0088CD");
  const [borColor1, setBorColor1] = useState("#0088CD");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await customFetch.post("/users/login/sabi-rider", {
        email,
        password,
      });

      if (response.status === 200) {
        const {
          access_token,
          refresh_token,
          role,
          first_name,
          last_name,
          email: userEmail,
          is_active,
          driver_id,
        } = response.data;

        // Dispatch the API response to the Redux store
        dispatch(
          loginUser({
            access_token,
            refresh_token,
            role,
            first_name,
            last_name,
            email: userEmail,
            is_active,
            driver_id,
          })
        );

        Alert.alert("Login Successful!", `Welcome back, ${first_name}!`);
        router.replace("./(authenticated)/(tabs)/map");
      } else {
        Alert.alert("Login Failed", "Invalid credentials. Please try again.");
        setBorColor("#F90F0F");
        setBorColor1("#F90F0F");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      Alert.alert("Error", errorMessage);
      setBorColor("#F90F0F");
      setBorColor1("#F90F0F");
    } finally {
      setIsLoading(false);
    }
  };

  const buttonStyle = useMemo(
    () => [styles.btn, isLoading && styles.disabledBtn],
    [isLoading]
  );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            source={require("../assets/images/sabiRideDriver.png")}
            style={styles.logo}
          />
        </View>

        <View>
          <Text style={styles.text}>
            Welcome back<Text style={styles.blue}> SABI Driver</Text>
          </Text>
        </View>
        <Text style={styles.two}>Having a good day?</Text>

        <View style={{ gap: 20, marginTop: 25, width: "100%" }}>
          <View style={{ gap: 3 }}>
            <Text style={styles.ontop}>E-mail</Text>
            <View style={[styles.textInput, { borderColor: borColor }]}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                placeholder="Type your e-mail"
                inputMode="email"
                textContentType="email"
              />
            </View>
          </View>

          <View style={{ gap: 3 }}>
            <Text style={styles.ontop}>Password</Text>
            <View style={[styles.textInput, { borderColor: borColor1 }]}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Type your password"
                secureTextEntry={true}
                textContentType="password"
              />
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.btnside}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color={"#fff"} size={"small"} />
            ) : (
              <Text style={styles.btnText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.lineside}>
          <Text style={styles.or}>or</Text>
        </View>

        <View style={styles.social}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/google.png")}
              style={styles.socialBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/facebook.png")}
              style={styles.socialBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/twitter.png")}
              style={styles.socialBtn}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.dont}>Don't have an account?</Text>
          <Link href={"https://www.sabi-ride.com.ng/signup"} asChild replace>
            <TouchableOpacity>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 85,
  },
  logo: {
    height: height * 0.22,
    width: width * 0.8,
    resizeMode: "contain",
  },
  img: {
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 22,
    fontFamily: "Baloo-2-600",
    marginTop: 18,
  },
  blue: {
    color: "#0088cd",
  },
  two: {
    fontFamily: "Baloo-2-400",
    fontSize: 14,
    marginTop: 3,
  },
  ontop: {
    fontFamily: "Baloo-2-500",
    fontSize: 14,
    color: "#425466",
  },
  input: {
    height: 40,
    width: "100%",
    fontFamily: "Baloo-2-400",
    fontSize: 15,
  },
  textInput: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  btn: {
    backgroundColor: "#0088cd",
    width: "100%",
    alignItems: "center",
    borderRadius: 1000,
    paddingVertical: 10,
  },
  btnText: {
    fontFamily: "Baloo-2-500",
    fontSize: 18,
    color: "#ffffff",
  },
  disabledBtn: {
    opacity: 0.6,
  },
  btnside: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  forgotText: {
    fontFamily: "Baloo-2-400",
    fontSize: 13,
    color: "#333333",
  },
  or: {
    textAlign: "center",
    fontFamily: "Baloo-2-400",
    color: "#606365",
  },
  lineside: {
    marginTop: 13,
    alignItems: "center",
  },
  social: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginTop: 13,
  },
  socialBtn: {
    width: 33,
    height: 33,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 21,
    gap: 15,
    marginBottom: 13,
  },
  signup: {
    fontSize: 15,
    fontFamily: "Baloo-2-400",
    color: "#0088CD",
  },
  dont: {
    fontSize: 13,
    fontFamily: "Baloo-2-400",
    color: "#333333",
  },
});
