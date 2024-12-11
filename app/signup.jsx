import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { height, width } = Dimensions.get("window");

const SignUp = () => {
  // const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0

  // const {signup} = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [borderColor, setborderColor] = useState("#0088CD");
  const [borderColor1, setborderColor1] = useState("#0088CD");
  const [borderColor2, setborderColor2] = useState("#0088CD");
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalVisible1, setmodalVisible1] = useState(false);
  const [modalVisible2, setmodalVisible2] = useState(false);
  const [btnText, setbtnText] = useState("Sign up as a SABI Passenger");

  const openModal = () => {
    setmodalVisible(true);
  };
  const closeModal = () => {
    setmodalVisible(false);
  };
  const openModal1 = () => {
    setmodalVisible1(true);
  };
  const closeModal1 = () => {
    setmodalVisible1(false);
  };
  const openModal2 = () => {
    setmodalVisible2(true);
  };
  const closeModal2 = () => {
    setmodalVisible2(false);
  };

  const router = useRouter();

  const handleSignup = () => {
    setbtnText(() => {
      return <ActivityIndicator color={"#fff"} size={"small"} />;
    });
    const timeoutId = setTimeout(() => {
      if (validateEmail(email) && validatePassword(password, confirmPassword)) {
        // signup(email, password);
        // Replace with your actual signup logic using an API or other methods
        // Alert.alert('Signup successful!');
        router.replace("./login");
      }
      // else{
      //     Alert.alert('Signup failed!', 'Please check your email and password.');      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  };

  const validateEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/; // Basic email format validation
    if (!regEx.test(email)) {
      openModal();
      setborderColor1("#F90F0F");
      setborderColor2("#0088CD");
      setbtnText("Sign Up");
      return false;
    }
    return true;
  };

  const validatePassword = (password, confirmPassword) => {
    if (password.length < 8) {
      // Alert.alert('Password too short!', 'Password must be at least 8 characters.');
      openModal1();
      setborderColor2("#F90F0F");
      setborderColor1("#0088CD");
      setbtnText("Sign Up");
      return false;
    }
    if (password !== confirmPassword) {
      // Alert.alert('Passwords don\'t match!', 'Please ensure password and confirm password are the same.');
      openModal2();
      setborderColor2("#F90F0F");
      setborderColor1("#0088CD");
      setbtnText("Sign Up");
      return false;
    }
    return true;
  };
  return (
    // <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
    // <KeyboardAvoidingView
    // style={{flex:1}}
    // behavior={Platform.OS === "ios" ? "padding" : null}
    // keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    // >
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 40}}>
<Link href={'./login'} asChild>
    <TouchableOpacity  style={{ padding: 8 }}>
    <Text
      style={{
        color: "#0088CD",
        fontFamily: "Baloo-2-400",
        fontSize: 18,
      }}
      >
      Cancel
    </Text>
  </TouchableOpacity>
      </Link>
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        {/* <StatusBar barStyle={'light-content'}/> */}
        <View style={styles.img}>
          <Image
            source={require("../assets/images/sabi-ride logo.png")}
            style={styles.logo}
          />
          {/* <Image source={require('../assets/images/Sabi Ride car.png')} style={styles.car}/> */}
        </View>

        {/* <Text style={styles.text}>Sign up to be a Sabi Passenger</Text> */}
        <Text style={styles.text}>Sign up to<Text style={styles.blue}> Become a Passenger</Text></Text>

        <Text style={styles.two}>It takes about two minutes to sign up</Text>

        <View style={{ gap: 18, marginTop: 15, width: "100%" }}>
          
        <View style={{gap: 3}}>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={styles.ontop}>E-mail</Text>
              {/* <Text style={{fontFamily: 'Baloo-2-400'}}>Invalid E-mail</Text> */}
            </View>
          <View style={[styles.textInput, { borderColor: borderColor1 }]}>
            <TextInput
              style={styles.input}
              placeholder="Type your e-mail"
              // placeholderTextColor={"#333333"}
              inputMode="email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
              />
          </View>
              </View>

              
          <View style={{gap: 3}}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={styles.ontop}>Username</Text>
              {/* <Text style={{fontFamily: 'Baloo-2-400'}}>Invalid E-mail</Text> */}
            </View>
            <View style={[styles.textInput, { borderColor: borderColor }]}>
            <TextInput
              style={styles.input}
              placeholder="Preferred Username"
              // placeholderTextColor={"#333333"}
            />
          </View>
          </View>


          <View style={{gap: 3}}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={styles.ontop}>Password</Text>
              {/* <Text style={{fontFamily: 'Baloo-2-400'}}>Invalid E-mail</Text> */}
            </View>
            <View style={[styles.textInput, { borderColor: borderColor2 }]}>
            <TextInput
              style={styles.input}
              placeholder="Type your password"
              // placeholderTextColor={"#333333"}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              textContentType="password"
            />
          </View>
          </View>


          <View style={{gap: 3}}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={styles.ontop}>Confirm Password</Text>
              {/* <Text style={{fontFamily: 'Baloo-2-400'}}>Invalid E-mail</Text> */}
            </View>
            <View style={[styles.textInput, { borderColor: borderColor2 }]}>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              // placeholderTextColor={"#333333"}
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              textContentType="password"
            />
          </View>
          </View>

          




        </View>
        <View style={styles.btnside}>
          <TouchableOpacity style={styles.btn} onPress={handleSignup}>
            <Text style={styles.btnText}>{btnText}</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalVisible} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={[styles.modalText, { color: "#F90F0F" }]}>
                Invalid Email!
              </Text>
              <Text style={styles.modalText}>
                Please enter a valid email address.
              </Text>
              <View style={styles.modalDown}>
                <TouchableOpacity onPress={closeModal} style={styles.noButton}>
                  <Text style={styles.noButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal visible={modalVisible1} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={[styles.modalText, { color: "#F90F0F" }]}>
                Password too short!
              </Text>
              <Text style={styles.modalText}>
                Password must be at least 8 characters.
              </Text>
              <View style={styles.modalDown}>
                <TouchableOpacity onPress={closeModal1} style={styles.noButton}>
                  <Text style={styles.noButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal visible={modalVisible2} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={[styles.modalText, { color: "#F90F0F" }]}>
                Passwords don't match!
              </Text>
              <Text style={styles.modalText}>
                Please ensure password and confirm password are the same.
              </Text>
              <View style={styles.modalDown}>
                <TouchableOpacity onPress={closeModal2} style={styles.noButton}>
                  <Text style={styles.noButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
    </View>

    // </KeyboardAvoidingView>
    // {/* </KeyboardAwareScrollView> */}
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingHorizontal: 25,
    // justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    height: height * 0.22, //for larger screens, multiply it by 0.4
    width: width * 0.8,
    resizeMode: "contain",
    // backgroundColor: 'red'
  },
  img: {
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  // car: {
  //   height: height*0.15,
  //   resizeMode: 'contain',
  //   top: '-6.5%',
  //   zIndex: 10,
  //   width: width*0.63,
  // },
  text: {
    // textAlign: "center",
    color: "#000000",
    fontSize: 22,
    fontFamily: "Baloo-2-600",
    marginTop: 13,
  },
  blue: {
    color: '#0088cd'
  },
  two: {
    fontFamily: 'Baloo-2-400',
    fontSize: 14,
    marginTop: 3
  },
    ontop: {
    fontFamily: 'Baloo-2-500',
    fontSize: 14,
    color: '#425466'
  },
  input: {
    height: 40,
    width: "100%",
    fontFamily: "Baloo-2-400",
    fontSize: 15,
  },
  textInput: {
    // backgroundColor: "#EFFAFF",
    backgroundColor: '#fafafa',
    borderWidth: 1,
    // borderColor: '#0088CD',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  btn: {
    backgroundColor: "#0088cd",
    width: "100%",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: 12,
    marginBottom: 12,
  },
  btnText: {
    fontFamily: "Baloo-2-500",
    fontSize: 16,
    color: "#ffffff",
  },
  btnside: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    // backgroundColor: '#ffffff10',
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    elevation: 5,
    width: Dimensions.get("window").width - 40,
  },
  modalText: {
    fontFamily: "Baloo-2-400",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  modalDown: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    gap: 25,
  },
  yesButtonText: {
    fontFamily: "Baloo-2-400",
    fontSize: 20,
    color: "rgba(249, 15, 15, 1)",
  },
  noButtonText: {
    fontFamily: "Baloo-2-400",
    fontSize: 20,
    color: "white",
  },
  noButton: {
    backgroundColor: "rgba(0, 136, 205, 0.8)",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "rgba(0, 136, 205, 1)",
    paddingVertical: 5,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});
