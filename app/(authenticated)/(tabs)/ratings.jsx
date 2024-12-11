import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");
const Ratings = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.head}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", paddingHorizontal: 15 }}>
          <View style={styles.one}>
            <View
              style={[styles.border3, { paddingLeft: 20, paddingRight: 30 }]}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../External/sub/SearchRequest/assets/1.png")}
                    style={{ width: 56, height: 56, borderRadius: 50 }}
                  />
                  <View style={{ paddingLeft: 18 }}>
                    <Text style={styles.Name}>Devaan Adewale</Text>
                    <Text style={styles.sabiDriver}>Sabi Driver</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.editBody}>
                    <Text style={styles.edit}>Edit</Text>
                  </View>
                </View>
              </View>

              <View style={styles.progressBar}>
                <View style={styles.progress1}></View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.AllTime}>All Time</Text>
                <Text style={styles.AllTime}>4.6</Text>
              </View>

              <View style={styles.progressBar2}>
                <View style={styles.progress1}></View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.AllTime}>Today</Text>
                <Text style={styles.AllTime}>5.0</Text>
              </View>
            </View>

            <View style={styles.oneTwo}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="repeat" size={18} color="black" />
                <Text style={styles.ride}> 58 Rides so far</Text>
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

          <View style={styles.headerStyle}>
            <View style={styles.main}>
              {/* Second */}

              <View style={styles.oneD}>
                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="medal"
                      size={40}
                      color="#0088CD"
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      paddingRight: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 9 }}>
                      <Text style={styles.heading}>Big Ups Sabi Driver</Text>
                      <Text style={styles.sub}>
                        You got a five star rating from Jesse Rameel
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1 }}></View>
                    <View style={styles.withdrawalBody}>
                      <Text style={styles.withdrawal}>3hrs ago</Text>
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

export default Ratings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15
    backgroundColor: "#F5FCFF",
  },
  head: {
    backgroundColor: "#0088CD",
    height: height * 0.11,
    width: width,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // paddingHorizontal: 15,
    // zIndex: 1,
    position: "absolute",
  },
  headerStyle: {
    height: "100%",
    // width: width *0.9,
  },
  main: {
    // paddingHorizontal: 15,
    flex: 1,
    // backgroundColor: 'red',
    marginTop: 10,
    // paddingTop: 30,
    // top: -110
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
    marginBottom: 20,
    marginTop: 12,
    // marginHorizontal: 15
  },
  oneD: {
    paddingHorizontal: 18,
    width: "100%",
    // height: height,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    shadowColor: "#7088D2",
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 30,
    marginBottom: 95,
  },
  today: {
    fontSize: 18,
    fontFamily: "Baloo-2-500",
    textAlign: "center",
  },
  Name: {
    fontSize: 18,
    fontFamily: "Baloo-2-500",
    color: "#2D3142",
  },
  sabiDriver: {
    fontSize: 14,
    fontFamily: "Baloo-2-400",
    color: "#4C5980",
  },
  otHeader: {
    fontSize: 18,
    fontFamily: "Baloo-2-500",
  },
  prevTrip: {
    fontSize: 18,
    fontFamily: "Baloo-2-500",
    marginLeft: 15,
  },
  heading: {
    fontSize: 13,
    fontFamily: "Baloo-2-500",
  },
  payH: {
    fontSize: 18,
    fontFamily: "Baloo-2-500",
  },
  todayP: {
    fontSize: 24,
    fontFamily: "Baloo-2-700",
    textAlign: "center",
    color: "#0088CD",
  },
  sub: {
    fontSize: 9,
    fontFamily: "Baloo-2-400",
    // textAlign: 'center',
    color: "#888787",
  },
  border1: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EEF8",
    paddingVertical: 15,
    flexDirection: "row",
    // marginVertical: 15
    // paddingHorizontal: 10,
    // justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  edit: {
    textAlign: "center",
    color: "#0088CD",
    fontFamily: "Baloo-2-500",
    fontSize: 14,
  },
  editBody: {
    backgroundColor: "#EFFAFF",
    // marginRight: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: "center",
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EEF8",
    paddingVertical: 12,
  },
  border3: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EEF8",
    paddingBottom: 12,
    paddingTop: 15,
  },
  oneTwo: {
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    alignItems: "center",
    paddingRight: 30,
    paddingBottom: 15
  },
  ride: {
    fontSize: 14,
    fontFamily: "Baloo-2-500",
    color: "#2D3142",
  },
  timeOnline: {
    fontFamily: "Baloo-2-500",
    fontSize: 15,
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
  },
  progressBar: {
    height: 8,
    backgroundColor: "#D9D9D9",
    marginTop: 25,
    borderRadius: 30,
    marginBottom: 5,
  },
  progress1: {
    height: 8,
    backgroundColor: "#0FA958",
    // marginTop: 25
    width: "75%",
    borderRadius: 30,
  },
  progressBar2: {
    height: 8,
    backgroundColor: "#0FA958",
    marginTop: 13,
    borderRadius: 30,
    marginBottom: 5,
  },
  AllTime: {
    fontFamily: "Baloo-2-400",
    fontSize: 12,
    color: "#4C5980",
  },
  withdrawalBody: {
    // marginRight: 8,
    // paddingHorizontal: 15,
    paddingVertical: 15,
    // alignItems: 'center',
  },
  withdrawal: {
    textAlign: "center",
    // alignItems: 'center',
    color: "#888787",
    fontFamily: "Baloo-2-400",
    fontSize: 10,
  },
});
