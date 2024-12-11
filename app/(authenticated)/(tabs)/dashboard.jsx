import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const { width, height } = Dimensions.get("window");
const Dashboard = () => {
  const [balance, setBalance] = useState([]);
  const accessToken = useSelector((state) => state.user.tokens?.access_token);

  useEffect(() => {
    // Fetch trip history on component mount
    const fetchBalance = async () => {
      try {
        if (!accessToken) {
          Alert.alert("no token");
        }
        const response = await axios.get(
          "https://dev.sabirideweb.com.ng/api/v1/wallet/balance/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // the Bearer token
            },
          }
        );
        console.log("fetching balance...");
        setBalance(response.data.balance); // API returns balance amount directly
      } catch (error) {
        console.error("Failed to fetch wallet balance:", error);
      }
    };

    fetchBalance();
  }, [accessToken]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.top}></View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: "100%" }}>
          <View style={styles.headerStyle}>
            <View style={styles.main}>
              <View style={{ width: "100%", paddingHorizontal: 15 }}>
                <View style={styles.one}>
                  <View style={styles.border}>
                    <Text style={styles.today}>Today</Text>
                    <Text style={styles.todayP}>Today</Text>
                  </View>
                  <View style={[styles.oneTwo, { paddingVertical: 7 }]}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="repeat"
                        size={18}
                        color="black"
                      />
                      <Text style={styles.ride}> 14 Rides</Text>
                    </View>
                    <View>
                      <Text style={styles.timeOnline}>Time Online</Text>
                      <Text style={styles.time}>10h 20m</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="clock-time-four-outline"
                        size={18}
                        color="black"
                      />
                      <Text style={styles.hours}> 23H</Text>
                    </View>
                  </View>
                </View>

                {/* Second */}
                <View style={styles.one}>
                  <View style={styles.border1}>
                    <View style={{ paddingLeft: 16 }}>
                      <Text style={styles.walletBal}>Wallet Balance</Text>
                      <Text style={styles.totalBal}>{balance}</Text>
                    </View>
                    <View>
                      <View style={styles.withdrawalBody}>
                        <Text style={styles.withdrawal}>Withdrawal</Text>
                      </View>
                    </View>
                  </View>
                  <Link
                    href={"../External/sub/dashboard/WithdrawalHistory"}
                    asChild
                  >
                    <TouchableOpacity>
                      <View style={[styles.oneTwo, { paddingVertical: 15 }]}>
                        <Text style={styles.payH}>View Payment History</Text>
                        <MaterialCommunityIcons
                          name="chevron-right"
                          size={18}
                          color="black"
                        />
                      </View>
                    </TouchableOpacity>
                  </Link>
                </View>

                {/* third */}
                <View style={styles.one}>
                  <View style={[styles.border3, { paddingLeft: 16 }]}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.otHeader}>Ongoing Trip</Text>
                      <View>
                        <View style={styles.navigationBody}>
                          <Text style={styles.navigation}>Navigation</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("./assets/76.png")}
                          style={{ width: 35, height: 35, borderRadius: 50 }}
                        />
                        <View style={{ marginLeft: 15 }}>
                          <Text style={styles.Devaan}>Devaan Adewale</Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <MaterialCommunityIcons
                              name="star"
                              size={11}
                              color="#0088CD"
                            />
                            <Text
                              style={{
                                fontFamily: "Baloo-2-500",
                                fontSize: 13,
                              }}
                            >
                              {" "}
                              3.5
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.oneTwo}>
                    <View
                      style={{
                        flexDirection: "row",
                        flex: 1,
                        justifyContent: "space-evenly",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialCommunityIcons
                          name="phone"
                          size={19}
                          color="black"
                        />
                        <Text style={[styles.ride, { fontSize: 12 }]}>
                          {" "}
                          Call
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialCommunityIcons
                          name="chat"
                          size={24}
                          color="black"
                        />
                        <Text style={[styles.ride, { fontSize: 12 }]}>
                          {" "}
                          Chat
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={18}
                        color="black"
                      />
                    </View>
                  </View>
                </View>
                {/* Fourth */}
                <View style={[styles.one, { marginBottom: 45 }]}>
                  <View style={styles.border}>
                    <Text style={styles.prevTrip}>Previous Trip</Text>
                  </View>
                  <View style={styles.oneTwo}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={require("../External/sub/SearchRequest/assets/5.jpg")}
                        style={{ width: 34, height: 34, borderRadius: 50 }}
                      />
                      <Text
                        style={[
                          styles.ride,
                          { fontFamily: "Baloo-2-600", fontSize: 16 },
                        ]}
                      >
                        {" "}
                        John Doe
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={[
                          styles.todayP,
                          {
                            fontFamily: "Baloo-2-600",
                            fontSize: 14,
                            color: "#0088CD",
                          },
                        ]}
                      >
                        Total: ₦ 500
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15
    backgroundColor: "#ffffff",
    paddingBottom: 50,
  },
  headerStyle: {
    height: "100%",
    // width: width,
  },
  top: {
    // backgroundColor: '#cd1f00',
    backgroundColor: "#0088CD",
    height: height * 0.11,
    width: width,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // paddingHorizontal: 15,
    // zIndex: 1,
    position: "absolute",
  },
  main: {
    // paddingHorizontal: 15,
    flex: 1,
    // height: "100%",
    // width: '100%',
    // backgroundColor: '#450808',
    marginTop: 10,
    paddingTop: 0,
    // top: -110
    // zIndex: 0
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
    elevation: 30,
    marginBottom: 23,
  },
  today: {
    fontSize: 18,
    fontFamily: "Baloo-2-500",
    textAlign: "center",
  },
  Devaan: {
    fontSize: 15,
    fontFamily: "Baloo-2-500",
    textAlign: "center",
  },
  otHeader: {
    fontSize: 16,
    fontFamily: "Baloo-2-500",
  },
  prevTrip: {
    fontSize: 16,
    fontFamily: "Baloo-2-500",
    marginLeft: 15,
  },
  walletBal: {
    fontSize: 16,
    fontFamily: "Baloo-2-500",
  },
  payH: {
    fontSize: 16,
    fontFamily: "Baloo-2-500",
  },
  todayP: {
    fontSize: 30,
    fontFamily: "Baloo-2-600",
    textAlign: "center",
    color: "#0088CD",
  },
  totalBal: {
    fontSize: 24,
    fontFamily: "Baloo-2-700",
    // textAlign: 'center',
    color: "#0088CD",
  },
  border1: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EEF8",
    // paddingVertical: 16,
    paddingTop: 16,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'red'
  },
  withdrawalBody: {
    backgroundColor: "#EFFAFF",
    marginRight: 21,
    paddingHorizontal: 15,
    // paddingVertical: 8,
    borderRadius: 12,
    // height: '70%',
    alignItems: "center",
    justifyContent: "center",
    height: 37,
  },
  withdrawal: {
    textAlign: "center",
    // alignItems: 'center',
    color: "#0088CD",
    fontFamily: "Baloo-2-500",
    fontSize: 14,
  },
  navigation: {
    textAlign: "center",
    // alignItems: 'center',
    color: "#0088CD",
    fontFamily: "Baloo-2-500",
    fontSize: 14,
  },
  navigationBody: {
    backgroundColor: "#EFFAFF",
    marginRight: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    // height: '70%',
    alignItems: "center",
    height: 37,
    justifyContent: "center",
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EEF8",
    // paddingVertical: 11,
    paddingTop: 11,
    paddingBottom: 3,
  },
  border3: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EEF8",
    paddingBottom: 12,
    paddingTop: 15,
  },
  oneTwo: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    alignItems: "center",
  },
  ride: {
    fontSize: 14,
    fontFamily: "Baloo-2-500",
    color: "#2D3142",
  },
  timeOnline: {
    fontFamily: "Baloo-2-500",
    fontSize: 12,
    color: "#888787",
    textAlign: "center",
  },
  time: {
    fontFamily: "Baloo-2-500",
    fontSize: 15,
    textAlign: "center",
  },
  hours: {
    fontFamily: "Baloo-2-500",
    fontSize: 14,
    color: "#2D3142",
  },
});
