import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Button,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  const translateX = useRef(new Animated.Value(0)).current;
  const [onRight, setOnRight] = useState(true);
  const animate = () => {
    Animated.spring(translateX, {
      toValue: onRight ? -width : width,
      useNativeDriver: true,
    }).start();
    setOnRight(!onRight);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animate();
    }, 1000);
    const timeoutId1 = setTimeout(() => {
      router.replace("./login");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId1);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/sabiRideDriver.png")}
        style={styles.Image}
        resizeMode="contain"
      />
      <Animated.View style={{ transform: [{ translateX }] }}>
        <Image
          source={require("../assets/images/Sabi Ride car.png")}
          style={styles.Image1}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    height: 250,
    width: width - 50,
  },
  Image1: {
    height: 100,
    width: width - 50,
    marginTop: -9,
    // left: -width
    left: width,
  },
});
