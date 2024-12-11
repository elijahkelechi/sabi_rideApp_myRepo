import { FontAwesome5, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const random = () => parseInt(Math.random() * 150);
const randomColor = () =>
  "rgb(" + random() + "," + random() + "," + random() + ")";
let _data = [];
for (let i = 0; i < 10; i += 1) _data.push(randomColor());

const { width, height } = Dimensions.get("window");
export default function TransactionCard({
  imageSource,
  name,
  minutes,
  amount,
  rating,
  totalRides,
  people,
  destination,
  borderColor,
}) {
  return (
    // <TouchableOpacity>
    // <View style={{ backgroundColor: 'yellow', }}>

    <View style={styles.main}>
      <View style={[styles.container, { borderColor: borderColor }]}>
        <View style={styles.inside}>
          <View style={{ flexDirection: "row", gap: 18 }}>
            <View style={{ backgroundColor: "#ffffff" }}>
              <Image
                source={imageSource}
                // style={{ width: "100%", aspectRatio: 1/1 }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text style={styles.name}>{name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  // marginTop: 5,
                  alignItems: "center",
                }}
              >
                <Text style={styles.rating}>
                  <MaterialCommunityIcons
                    name="star"
                    size={15}
                    color="#0088CD"
                  />
                  {" " + rating}
                </Text>

                <Text style={styles.totalRides}>{"(" + totalRides + ")"}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // marginTop: 5,
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="account"
                  size={16}
                  color="black"
                />
                <Text style={styles.people}>{" " + people}</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.right}>
              <Text style={styles.minutes}>{minutes}'</Text>
            </View>
            <Text style={styles.amount}>NGN{amount}</Text>
          </View>
        </View>

        <View style={styles.second}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: 'center'}}>
            {/* <MaterialCommunityIcons
              name="navigation-variant"
              size={16}
              color="#FF7777"
            /> */}
            <FontAwesome5 name='location-arrow' size={16}  color="#FF7777"/>
            <View>
            <Text style={styles.destination}>{destination}</Text>
            <Divider/>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: 'center',  width: 65, justifyContent: "space-between"}}>
            <Link href={"../External/sub/chatScreen/ChatScreen"} asChild>
              <TouchableOpacity>
                <MaterialCommunityIcons name="chat" size={24} color="black" />
              </TouchableOpacity>
            </Link>
            <Link href={"../External/sub/chatScreen/VoiceCall"} asChild>
              <TouchableOpacity>
                <FontAwesome6 name='phone-flip' size={19}/>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 14,
            flex: 1,
            justifyContent: "center",
            gap: 20,
            paddingHorizontal: 10,
            // justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity style={styles.button1}>
            <Text style={{ fontSize: 13, fontFamily: 'Baloo-2-400' }}>Decline</Text>
          </TouchableOpacity>
          <Link href={"../External/sub/map/StartTrip"} asChild>
            <TouchableOpacity style={styles.button2}>
              <Text style={{ color: "#fff", fontSize: 13, fontFamily: 'Baloo-2-400' }}>
                Accept
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>

    // {/* </TouchableOpacity>  */}
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    // width: '100%',
    width: width * 0.88,
    // maxWidth: width,
    // height: height*0.3,
    // width: 339,
    borderWidth: 5,
    borderRadius: 30,
    // paddingHorizontal: 22,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 15,
    paddingTop: 29,
    paddingHorizontal: 20
  },
  image: {
    width: 50,
    height: 50,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    // marginTop: 25,
  },
  inside: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 15,
    // marginTop: 30,
    fontFamily: "Baloo-2-600",
    lineHeight: 25,
  },
  rating: {
    fontSize: 15,
    fontFamily: "Baloo-2-600",
    lineHeight: 24,
  },
  people: {
    fontSize: 16,
    fontFamily: "Baloo-2-500",
    // lineHeight: 24
  },

  totalRides: {
    fontSize: 15,
    // fontWeight: "400",
    fontFamily: 'Baloo-2-400',
    marginLeft: 5,
    lineHeight: 24,
    color: "#929292",
  },
  minutes: {
    fontSize: 24,
    fontFamily: "Baloo-2-600",
    color: "white",
    textAlign: "center",
    // lineHeight: 38,
  },
  amount: {
    fontSize: 19,
    fontFamily: "Baloo-2-500",
    lineHeight: 32,
    marginTop: 5,
  },
  right: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 100,
    // bottom: 39,
    // position: 'absolute',
    marginTop: -96,
  },
  main: {
    // paddingTop: 30,
    // backgroundColor: 'blue',
    // paddingBottom: 25,
    // marginVertical: 15,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30
    // width: '100%'
  },
  second: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingLeft: 19
  },
  destination: {
    color: "#929292",
    paddingBottom: 4,
    // borderBottomWidth: 1,
    // borderBottomColor: "#DADADA",
    fontFamily: "Baloo-2-400",
    fontSize: 16,
  },
  button1: {
    width: 110,
    height: 37,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f90f0f8e",
    alignItems: "center",
    justifyContent: "center",

  },
  button2: {
    width: 110,
    height: 37,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#0fa957bc",
    borderColor: "#0fa957a4",
    alignItems: "center",
    justifyContent: "center",
  },
});
