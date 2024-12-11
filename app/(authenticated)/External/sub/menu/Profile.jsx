import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../../../utils";

import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Linking,
  Alert,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Profile = () => {
  const [userData, setUserData] = useState({});
  const accessToken = useSelector((state) => state.user.tokens?.access_token);

  useEffect(() => {
    if (!accessToken) return;

    const getUserData = async () => {
      try {
        // console.log("Attempting to fetch user data...");
        const response = await customFetch.get("/users/me/sabi-rider", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // console.log("Response received:", response);

        if (response.status === 200 && response?.data?.data?.user) {
          const { email, first_name, last_name, address, state, phone_number } =
            response.data.data.user;
          setUserData({
            email,
            first_name,
            last_name,
            address,
            state,
            phone_number,
          });
          // Alert.alert("User data fetched successfully");
        } else {
          Alert.alert("Failed to fetch user data");
        }
      } catch (error) {
        Alert.alert(error.message || "Failed to fetch user data");
        console.error("Fetch error:", error);
      }
    };

    console.log("Fetching user data...");
    getUserData();
  }, [accessToken]);

  const openGmail = async () => {
    const gmailAppUrl = "googlegmail://"; // Gmail app URL scheme
    const gmailWebUrl = "https://mail.google.com/"; // Gmail web fallback

    try {
      // Check if the Gmail app can be opened
      const supported = await Linking.canOpenURL(gmailAppUrl);
      if (supported) {
        await Linking.openURL(gmailAppUrl); // Open Gmail app
      } else {
        await Linking.openURL(gmailWebUrl); // Open Gmail in browser
      }
    } catch (error) {
      Alert.alert("Error", "Unable to open Gmail. Please check your settings.");
      console.error("Error opening Gmail:", error);
    }
  };

  // const user = useSelector((state) => state.user.user);
  const router = useRouter();
  const [modalVisible, setmodalVisible] = useState(false);

  const openModal = () => {
    setmodalVisible(true);
  };
  const closeModal = () => {
    setmodalVisible(false);
  };
  const [modalVisible1, setmodalVisible1] = useState(false);

  const openModal1 = () => {
    setmodalVisible1(true);
  };
  const closeModal1 = () => {
    setmodalVisible1(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.head}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerStyle}>
          <View style={styles.main}>
            <View style={{ width: "100%", paddingHorizontal: 20 }}>
              <Link href={"/(authenticated)/External/PersonalDetails"} asChild>
                <Pressable style={styles.one}>
                  <View>
                    <Image
                      source={require("./assets/9.jpg")}
                      style={styles.image}
                    />
                    <TouchableOpacity style={styles.editBtn}>
                      <MaterialCommunityIcons
                        name="square-edit-outline"
                        size={15}
                        color={"#fff"}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.right}>
                    <Text style={styles.name}>
                      {userData?.first_name || "First Name"}
                    </Text>
                    <Text style={styles.name}>
                      {userData?.last_name || "Last Name"}
                    </Text>
                    <Text style={styles.username}>@milli</Text>
                    <Text style={styles.email}>
                      {userData?.email || "email"}
                    </Text>
                    <Text style={styles.number}>
                      {userData?.phone_number || "phone"}
                    </Text>
                    <TouchableOpacity onPress={openGmail} style={styles.vBtn}>
                      <Text style={styles.verify}>Verify Email</Text>
                    </TouchableOpacity>
                  </View>
                </Pressable>
              </Link>

              <View
                style={{
                  flexDirection: "row",
                  // columnGap: 5,
                  justifyContent: "space-between",
                }}
              >
                <Link href={"./TripHistory"} asChild>
                  <TouchableOpacity style={styles.tiles}>
                    <MaterialCommunityIcons
                      name="history"
                      size={36}
                      color={"#0088CD"}
                    />
                    <Text style={styles.blueText}>Trip History</Text>
                  </TouchableOpacity>
                </Link>

                <TouchableOpacity style={styles.tiles}>
                  <MaterialCommunityIcons
                    name="video-outline"
                    size={36}
                    color={"#0088CD"}
                  />
                  <Text style={styles.blueText}>Live Stream</Text>
                </TouchableOpacity>

                <Link href={"../payment"} asChild>
                  <TouchableOpacity style={styles.tiles}>
                    <MaterialCommunityIcons
                      name="credit-card-outline"
                      size={36}
                      color={"#0088CD"}
                    />
                    <Text style={styles.blueText}>Payment Details</Text>
                  </TouchableOpacity>
                </Link>
              </View>

              <View style={styles.down}>
                <Link href={"./notification/notification"} asChild>
                  <TouchableOpacity>
                    <View style={styles.border3}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.sTiles}>
                          <MaterialCommunityIcons
                            name="bell-outline"
                            size={23}
                            color={"#0088CD"}
                          />
                        </View>
                        <View
                          style={{ marginLeft: 18, justifyContent: "center" }}
                        >
                          <Text style={styles.Name}>Notifications</Text>
                        </View>
                      </View>
                      <View>
                        <Link href={"./notification/notification"} asChild>
                          <TouchableOpacity style={styles.chevron}>
                            <MaterialCommunityIcons
                              name="chevron-right"
                              size={20}
                            />
                          </TouchableOpacity>
                        </Link>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Link>

                <Link href={"../../../External/FAQ"} asChild>
                  <TouchableOpacity>
                    <View style={styles.border3}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.sTiles}>
                          <MaterialCommunityIcons
                            name="help-circle-outline"
                            size={25}
                            color={"#0088CD"}
                          />
                        </View>
                        <View
                          style={{ marginLeft: 18, justifyContent: "center" }}
                        >
                          <Text style={styles.Name}>F.A.Q / Support</Text>
                        </View>
                      </View>
                      <View>
                        <Link href={"../../../External/FAQ"} asChild>
                          <TouchableOpacity style={styles.chevron}>
                            <MaterialCommunityIcons
                              name="chevron-right"
                              size={20}
                            />
                          </TouchableOpacity>
                        </Link>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Link>

                {/* <Link href={'../../../..'} asChild> */}
                <TouchableOpacity onPress={openModal1}>
                  <View style={styles.border3}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.sTilesR}>
                        <AntDesign name="logout" size={20} color={"#F21E1E"} />
                      </View>
                      <View
                        style={{ marginLeft: 18, justifyContent: "center" }}
                      >
                        <Text style={styles.Name}>Log out</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* </Link> */}
              </View>

              <View style={styles.lastPart}>
                <TouchableOpacity>
                  <Text style={styles.terms}>Terms and Conditions</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={openModal}
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.delete}>Delete Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <Modal visible={modalVisible} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Are you sure you want to delete this account
              </Text>
              <View style={styles.modalDown}>
                <Link href={"../../../../login"} asChild>
                  <TouchableOpacity style={styles.yesbutton}>
                    <Text style={styles.yesButtonText}>Yes</Text>
                  </TouchableOpacity>
                </Link>
                <TouchableOpacity onPress={closeModal} style={styles.noButton}>
                  <Text style={styles.noButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal visible={modalVisible1} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Are you sure you want to Log Out
              </Text>
              <View style={styles.modalDown}>
                <Link href={"../../../../login"} asChild>
                  <TouchableOpacity style={styles.yesbutton} asChild>
                    <Text style={styles.yesButtonText}>Yes</Text>
                  </TouchableOpacity>
                </Link>
                <TouchableOpacity onPress={closeModal1} style={styles.noButton}>
                  <Text style={styles.noButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  head: {
    backgroundColor: "#0088CD",
    height: height * 0.11,
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // zIndex: 1,
    position: "absolute",
  },
  headerStyle: {
    height: "100%",
    width: width,
  },
  main: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: 10,
    padding: 0,
  },
  one: {
    width: "100%",
    backgroundColor: "#FDFDFD",
    borderRadius: 25,
    shadowColor: "#7088D2",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    marginBottom: 25,
    padding: 15,
    flexDirection: "row",
    gap: 12,
  },
  image: {
    height: 112,
    width: 112,
    borderRadius: 20,
    // position: 'absolute'
  },
  right: {
    gap: 3,
    flex: 1,
  },
  name: {
    fontFamily: "Baloo-2-500",
    fontSize: 20,
  },
  username: {
    fontFamily: "Baloo-2-500",
    fontSize: 12,
  },
  email: {
    fontFamily: "Baloo-2-500",
    fontSize: 10,
  },
  number: {
    fontFamily: "Baloo-2-500",
    fontSize: 10,
  },
  vBtn: {
    backgroundColor: "#F21E1E",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
    alignSelf: "flex-end",
  },
  verify: {
    color: "#fff",
    fontFamily: "Baloo-2-500",
    fontSize: 8,
  },
  tiles: {
    backgroundColor: "#0089cd37",
    // height: 95,
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 10,
    gap: 8,
    borderRadius: 15,
    // width: 98,
    width: "30%",
    aspectRatio: 1 / 1,
  },
  blueText: {
    fontFamily: "Baloo-2-500",
    fontSize: 10,
    color: "#0088CD",
  },
  sTiles: {
    backgroundColor: "#0089cd37",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
  },
  sTilesR: {
    backgroundColor: "#f21e1e3a",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
  },
  down: {
    marginTop: 35,
    // backgroundColor: 'red',
    alignContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    // alignItems: 'center',
    gap: 15,
  },
  text: {
    fontFamily: "Baloo-2-500",
    fontSize: 18,
  },
  navi: {
    borderWidth: 1,
  },
  chevron: {
    height: 28,
    width: 28,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  border3: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    marginBottom: 15,
    paddingVertical: 5,
    alignItems: "center",
  },
  Name: {
    fontSize: 18,
    fontFamily: "Baloo-2-500",
    color: "#000",
  },
  lastPart: {
    // backgroundColor: 'red',
    marginTop: 15,
    // gap: 10,
  },
  terms: {
    textAlign: "center",
    fontFamily: "Baloo-2-500",
    fontSize: 12,
    color: "#222222cd",
  },
  delete: {
    color: "#F21E1E",
    fontFamily: "Baloo-2-400",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  editBtn: {
    // alignSelf: 'flex-end',
    position: "absolute",
    top: 95,
    backgroundColor: "#0088CD",
    padding: 5,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#fff",
    textAlign: "center",
    left: 97,
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
  yesbutton: {
    backgroundColor: "rgba(255, 238, 238, 1)",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "rgba(249, 15, 15, 1)",
    paddingVertical: 5,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});
