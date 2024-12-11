import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");
const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}></View>
      <ScrollView>
        <View style={styles.headerStyle}>
          <View style={styles.main}>
            <View style={{ width: "100%", paddingHorizontal: 15 }}>
              <View style={styles.one}>
                <View style={styles.border3}>
                  <View
                    style={{
                      marginTop: 15,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Image
                        source={require("../SearchRequest/assets/1.png")}
                        style={{ width: 138, height: 141, borderRadius: 100 }}
                      />
                    </View>
                    <TouchableOpacity style={styles.editBody}>
                      <Text style={styles.edit}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Second */}
              <View style={styles.oneD}>
                <View style={[styles.border1, { paddingTop: 30 }]}>
                  <View>
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      size={24}
                      color="#0088CD"
                    />
                  </View>
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={styles.heading}>Jesse Leonard</Text>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="phone-outline"
                      size={24}
                      color="#0088CD"
                    />
                  </View>
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={styles.heading}>+234 807 704 8651</Text>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      color="#0088CD"
                    />
                  </View>
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={styles.heading}>Info.millihub@gmail.com </Text>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="map-marker-outline"
                      size={24}
                      color="#0088CD"
                    />
                  </View>
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={styles.heading}>
                      Block 8 Agric Quarters Kaduna
                    </Text>
                  </View>
                </View>

                <View style={styles.border1}>
                  <View>
                    <MaterialCommunityIcons
                      name="credit-card-outline"
                      size={24}
                      color="#0088CD"
                    />
                  </View>
                  <View style={{ paddingLeft: 15 }}>
                    <Text style={styles.heading}>Kuda MFB 2677364829</Text>
                  </View>
                  <View style={{ flexDirection: "row", flex: 1 }}></View>
                  {/* <View> */}
                  <Link href={"./EditPayment"} asChild>
                    <TouchableOpacity style={styles.editBody1}>
                      <Text style={styles.edit}>Edit</Text>
                    </TouchableOpacity>
                  </Link>
                  {/* </View> */}
                </View>

                <View>
                  <Link href={"../.././profile"} asChild>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.done}>Done</Text>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15
    backgroundColor: "#F5FCFF",
  },
  button: {
    backgroundColor: "black",
    marginHorizontal: 20,
    borderRadius: 30,
    paddingVertical: 13,
    marginTop: 50,
  },
  done: {
    color: "white",
    fontFamily: "Baloo-2-500",
    fontSize: 18,
    textAlign: "center",
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
    width: width,
  },
  main: {
    // paddingHorizontal: 15,
    flex: 1,
    // backgroundColor: '#ff00000ffff',
    // marginTop: 10,
    paddingTop: 0,
    // top: -110
  },
  one: {
    width: "100%",
    backgroundColor: "#ff00000",
  },
  oneD: {
    paddingHorizontal: 16,
    width: "100%",
    height: height * 0.655,
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
    // marginBottom: '35%',
    // marginBottom: 40,
    paddingVertical: 15,
    marginTop: -40,
    zIndex: 0,
    paddingTop: 30,
    // position: 'absolute',
    // top: ''
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
    fontSize: 18,
    fontFamily: "Baloo-2-400",
    color: "#2D3142",
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
    paddingVertical: 18,
    // paddingTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 17,
    alignItems: "center",
    // zIndex: 20,
    position: "absolute",
    top: "70%",
    left: "55%",
  },
  editBody1: {
    backgroundColor: "#EFFAFF",
    // marginRight: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 17,
    alignItems: "center",
    // zIndex: 20,
  },
  border: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#E9EEF8',
    paddingVertical: 12,
  },
  border3: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#E9EEF8',
    // paddingBottom: 12,
    // paddingTop: 15
    paddingLeft: 15,
    paddingRight: 20,
    zIndex: 10,
  },
  oneTwo: {
    paddingHorizontal: 20,
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
    fontSize: 15,
    color: "#888787",
    textAlign: "center",
  },
});
