import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import Login from "./login";

const { height, width } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../assets/images/sabiRideDriver.png")}
          style={styles.logo}
        />
        <Image
          source={require("../assets/images/Sabi Ride car.png")}
          style={styles.car}
        />
      </View>

      <View style={styles.down}>
        <View>
          <Link href={"./Testing"} asChild>
            <Text style={styles.text}>Hey, Sabi Driver</Text>
          </Link>
        </View>

        <View style={styles.btnSide}>
          <Link href={"/login"} asChild>
            <TouchableOpacity style={styles.login}>
              <Text style={styles.logintext}>Sign In</Text>
            </TouchableOpacity>
          </Link>

          <Link href={"./signup"} asChild>
            <TouchableOpacity style={styles.signup}>
              <Text style={styles.signuptext}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 50,
    backgroundColor: "#fff",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: height * 0.3, //for larger screens, multiply it by 0.4
    width: width * 0.8,
    resizeMode: "center",
  },
  car: {
    // width: 185,
    height: height * 0.15,
    resizeMode: "contain",
    top: "-6.5%",
    zIndex: 10,
    width: width * 0.63,
  },
  text: {
    fontSize: 22,
    // fontWeight: '500',
    textAlign: "center",
    fontFamily: "Baloo-2-500",
  },
  btnSide: {
    width: "100%",
    gap: 30,
  },
  down: {
    width: "100%",
    gap: 60,
  },
  login: {
    backgroundColor: "#000000",
    borderRadius: 30,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  logintext: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "Baloo-2-500",
  },
  signup: {
    backgroundColor: "#EFFAFF",
    borderRadius: 30,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  signuptext: {
    textAlign: "center",
    color: "#0088CD",
    fontSize: 18,
    fontFamily: "Baloo-2-500",
  },
});
