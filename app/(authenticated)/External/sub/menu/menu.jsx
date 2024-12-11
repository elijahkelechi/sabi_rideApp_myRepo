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
import { Link, useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");
const Menu = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.head}></View>
      <View style={styles.headerStyle}>
        <View style={styles.main}>
          <View style={{ width: "100%", paddingHorizontal: 15 }}>
            <View style={styles.one}>
              <View style={{ height: 26 }}></View>

              <Link href={"../profile/EditProfile"} asChild>
                <TouchableOpacity>
                  <View style={styles.border3}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="account-check-outline"
                        size={24}
                        color={"#333333"}
                      />
                      <View style={{ marginLeft: 18 }}>
                        <Text style={styles.Name}>Edit Profile</Text>
                      </View>
                    </View>
                    <View>
                      <Link href={"../profile/EditProfile"} asChild>
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

              <Link href={"../(tabs)"} asChild>
                <TouchableOpacity>
                  <View style={styles.border3}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="clock-time-seven-outline"
                        size={24}
                        color={"#333333"}
                      />
                      <View style={{ marginLeft: 18 }}>
                        <Text style={styles.Name}>Trip History</Text>
                      </View>
                    </View>
                    <View>
                      <Link href={"../(tabs)"} asChild>
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

              <Link href={"../profile/EditPayment"} asChild>
                <TouchableOpacity>
                  <View style={styles.border3}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="credit-card-outline"
                        size={24}
                        color={"#333333"}
                      />
                      <View style={{ marginLeft: 18 }}>
                        <Text style={styles.Name}>Payment Method</Text>
                      </View>
                    </View>
                    <View>
                      <Link href={"../profile/EditPayment"} asChild>
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

              <Link href={"../notifications/notification"} asChild>
                <TouchableOpacity>
                  <View style={styles.border3}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="bell-outline"
                        size={24}
                        color={"#333333"}
                      />
                      <View style={{ marginLeft: 18 }}>
                        <Text style={styles.Name}>Notifications</Text>
                      </View>
                    </View>
                    <View>
                      <Link href={"../notifications/notification"} asChild>
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

              {/* <Link href={'../profile/EditProfile'} asChild>
            <TouchableOpacity>
        <View style={styles.border3}>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name='face-man' size={24} color={'#333333'}/>
            <View style={{marginLeft: 18}}>
                <Text style={styles.Name}>Become a driver</Text>
            </View>
            </View>
            <View>
            <Link href={'../profile/EditProfile'} asChild>
              <TouchableOpacity style={styles.chevron} >
                <MaterialCommunityIcons name='chevron-right' size={20}/>
              </TouchableOpacity>
              </Link>
            </View>
        </View>
            </TouchableOpacity>
                </Link> */}

              <View style={styles.down}>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.done}>Log out</Text>
                  </TouchableOpacity>
                  {/* </Link> */}
                </View>
                <View>
                  <Text style={styles.TandC}>Terms and Conditions</Text>
                </View>

                <View>
                  <TouchableOpacity>
                    <Text style={styles.delete}>Delete Account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  button: {
    backgroundColor: "black",
    marginHorizontal: 20,
    borderRadius: 30,
    paddingVertical: 13,
    marginTop: 90,
    width: "55%",
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
    position: "absolute",
  },
  headerStyle: {
    height: "100%",
    width: width,
  },
  main: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: 20,
  },
  one: {
    height: "100%",
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
    marginTop: 10,
  },
  Name: {
    fontSize: 18,
    fontFamily: "Baloo-2-600",
    color: "#2D3142",
  },
  edit: {
    textAlign: "center",
    color: "#0088CD",
    fontFamily: "Baloo-2-500",
    fontSize: 14,
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
    paddingLeft: 25,
    paddingRight: 11,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    marginBottom: 15,
    marginRight: 18,
    marginLeft: 9,
    paddingVertical: 5,
  },
  down: {
    width: "100%",
    height: "100%",
    // backgroundColor: 'red',
    alignItems: "center",
    gap: 15,
    alignSelf: "center",
  },
  TandC: {
    fontFamily: "Baloo-2-500",
    fontSize: 13,
    color: "#222222",
  },
  delete: {
    color: "#F24E1E",
    borderBottomWidth: 1,
    borderColor: "#F24E1E",
    fontFamily: "Baloo-2-400",
    fontSize: 18,
  },
});
