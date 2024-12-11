import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import Geolocation from "@react-native-community/geolocation";
import CheckBox from "react-native-check-box";
import RBSheet from "react-native-raw-bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function DriverComing() {
  const router = useRouter();
  const refRBSheet = useRef();
  const insets = useSafeAreaInsets();
  
  
  const [modalVisible, setmodalVisible] = useState(false);
  const [LocationData, setLocationData] = useState(null);
  
  const closeModal = () => {
    setmodalVisible(false);
  };
  
  
  const [hName, sethName] = useState("Enroute to Passenger");
  
  const bottomSheetRef = useRef(null);
  const bottomSheetRef1 = useRef(null);
  const bottomSheetRef2 = useRef(null);
  const bottomSheetRef3 = useRef(null);
  const bottomSheetRef4 = useRef(null);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     bottomSheetRef1.current?.present();
  //     bottomSheetRef.current?.close();
  //   }, 3000); // Delay in milliseconds (3 seconds)

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  const changeScreen = () => {
    // useEffect(() => {
    const timeoutId = setTimeout(() => {
      bottomSheetRef2.current?.close();
      router.replace("./CompletedRide");
    }, 3000); // Delay in milliseconds (3 seconds)

    return () => clearTimeout(timeoutId); // Cleanup function
    // }, []);
  };

  const [isChecked, setIsChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const origin = {latitude: 9.033373, longitude: 7.486511}; 
const destination = {latitude: 9.035974, longitude: 7.489370}; 
const GOOGLE_MAPS_APIKEY = 'AIzaSyCXNV5E5xnGxDycQmLy2wHpUe7xyOGstdY';

  return (
    <View style={styles.container}>
  
              <MapView
        initialRegion={{ 
          latitude: 9.033348,
          longitude: 7.486479,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01, 
        }}
        mapType="terrain"
        showsCompass="false"
        // provider="default"
        provider={PROVIDER_DEFAULT}
        showsUserLocation='true'
        followsUserLocation='true'
        // showsMyLocationButton
        style={{flex: 1}}>

<MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    mode="DRIVING"
    strokeWidth={3}
    strokeColor="#0088CD"
    precision="high"
  />
  <Marker
  coordinate={origin}
  title="Origin"
  description="Origin"
  />
  <Marker
  coordinate={destination}
  title="Destination"
  description="Destination"
  >
    {/* <Image  
    style={{height: 50, width: 50}} 
    resizeMode="contain"
    source={require('./assets/sr car.png')}/> */}
    <Image source={require("./assets/sr car.png")} style={{ height: 35, width: 35 }} />
  </Marker>
        </MapView>

      <TouchableOpacity
        style={styles.sos}
        onPress={() => refRBSheet.current?.open()}
      >
        <Octicons size={26} color={"#0088CD"} name="shield-check" />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[110, 338]}
        index={1}
        // enablePanDownToClose
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
      >
        {/* <BottomSheetScrollView> */}
        <BottomSheetView style={styles.bottomSheet}>
          <Text style={styles.deText}>Destination</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#E7E6E6",
              paddingBottom: 15,
              marginTop: 13,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <MaterialCommunityIcons name="navigation-variant" size={24} />
              <View style={{ width: "70%" }}>
                <Text
                  style={styles.DestText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Train station, Rigasa{" "}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
            >
              <Link href={"./ChatScreen"} asChild>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="chat" size={24} />
                </TouchableOpacity>
              </Link>
              <Link href={"./VoiceCall"} asChild>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="phone" size={24} />
                </TouchableOpacity>
              </Link>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("./assets/76.png")}
                  style={styles.iMaGe}
                  resizeMode="cover"
                />
                <Text style={styles.tTeXt}>Marvel Onyinye</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 3,
                  marginLeft: 15,
                }}
              >
                <MaterialCommunityIcons name="account" color={"#929292"} />
                <Text style={{ color: "#929292", fontFamily: "Baloo-2-500" }}>
                  2
                </Text>
              </View>
            </View>
            <View style={{ gap: 23 }}>
              <Text style={styles.mTeXt}>Payment Type</Text>
              <Text style={styles.mTeXt2}>Cash</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.activ}></View>
            <View style={styles.dull}></View>
            <View style={styles.dull}></View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.downBtn}
              onPress={() => {
                bottomSheetRef4.current?.present();
              }}
            >
              <Text style={styles.btnText}>Cancel Ride</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>

      <View style={[styles.middleSide, 
        // { paddingTop: insets.top }
        ]}>
        <View>
          <Link href={"/(authenticated)/(tabs)/map"} asChild>
          {/* <Link href={"../../../(tabs)/map"} asChild> */}
            {/* <TouchableOpacity style={styles.menuBtn}> */}
              {/* <MaterialCommunityIcons name="chevron-left" size={26} /> */}
            {/* </TouchableOpacity> */}
          </Link>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#000000",
              fontFamily: "Baloo-2-600",
              fontSize: 25,
            }}
          >
            {hName}
          </Text>
        </View>

        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity
          >
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef1}
          snapPoints={[110, 338]}
          index={1}
          stackBehavior="replace"
          //  enableContentPanningGesture={false}
          //  enableHandlePanningGesture={false}
          enablePanDownToClose={false}
          enableOverDrag={false}
          containerStyle={{ position: "absolute" }}
        >
          <BottomSheetView style={styles.bottomSheet1}>
            <Text style={styles.deText}>Destination</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#E7E6E6",
                paddingBottom: 15,
                marginTop: 13,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <MaterialCommunityIcons name="navigation-variant" size={24} />
                <View style={{ width: "70%" }}>
                  <Text
                    style={styles.DestText}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    Train station, Rigasa{" "}
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
              >
                <Link href={"./ChatScreen"} asChild>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="chat" size={24} />
                  </TouchableOpacity>
                </Link>
                <Link href={"./VoiceCall"} asChild>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="phone" size={24} />
                  </TouchableOpacity>
                </Link>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("./assets/76.png")}
                    style={styles.iMaGe}
                    resizeMode="cover"
                  />
                  <Text style={styles.tTeXt}>Marvel Onyinye</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 3,
                    marginLeft: 15,
                  }}
                >
                  <MaterialCommunityIcons name="account" color={"#929292"} />
                  <Text style={{ color: "#929292", fontFamily: "Baloo-2-500" }}>
                    2
                  </Text>
                </View>
              </View>
              <View style={{ gap: 23 }}>
                <Text style={styles.mTeXt}>Payment Type</Text>
                <Text style={styles.mTeXt2}>Cash</Text>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.dull}></View>
              <View style={styles.activ}></View>
              <View style={styles.dull}></View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.downBtn}
                onPress={() => {
                  bottomSheetRef2.current?.present();
                  bottomSheetRef1.current?.close();
                  sethName("Start Trip");
                  //  changeScreen();
                }}
              >
                <Text style={styles.btnText}>I have Arrived</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef2}
          snapPoints={[110, 338]}
          index={1}
          stackBehavior="replace"
          enableOverDrag={false}
          enablePanDownToClose={false}
        >
          <BottomSheetView style={styles.bottomSheet1}>
            {/* <View style={styles.upOne}>
        <View>
            <Text style={styles.up}>Distance</Text>
            <Text style={styles.down}>4.8 km</Text>
        </View>
        <View style={styles.midOne}>
            <Text style={styles.up}>Price</Text>
            <Text style={styles.down}>$8.50</Text>
        </View>
        <View>
            <Text style={styles.up}>Arrival</Text>
            <Text style={styles.down}>in 15 min</Text>
        </View>
      </View> */}

            <Text style={styles.deText}>Destination</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#E7E6E6",
                paddingBottom: 15,
                marginTop: 13,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15,}}
              >
                <MaterialCommunityIcons name="navigation-variant" size={24} />
                <View style={{ width: "70%" }}>
                  <Text
                    style={styles.DestText}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    Train station, Rigasa{" "}
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
              >
                <Link href={"./ChatScreen"} asChild>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="chat" size={24} />
                  </TouchableOpacity>
                </Link>
                <Link href={"./VoiceCall"} asChild>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="phone" size={24} />
                  </TouchableOpacity>
                </Link>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("./assets/76.png")}
                    style={styles.iMaGe}
                    resizeMode="cover"
                  />
                  <Text style={styles.tTeXt}>Marvel Onyinye</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 3,
                    marginLeft: 15,
                  }}
                >
                  <MaterialCommunityIcons name="account" color={"#929292"} />
                  <Text style={{ color: "#929292", fontFamily: "Baloo-2-500" }}>
                    2
                  </Text>
                </View>
              </View>
              <View style={{ gap: 23 }}>
                <Text style={styles.mTeXt}>Payment Type</Text>
                <Text style={styles.mTeXt2}>Cash</Text>
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.dull}></View>
              <View style={styles.dull}></View>
              <View style={styles.activ}></View>
            </View>

            <View>
              <Link href={'/(authenticated)/External/ActionSheet'} asChild>
              <TouchableOpacity style={styles.downBtn}>
                <Text style={styles.btnText}>Start Trip</Text>
              </TouchableOpacity>
              </Link>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>

      <RBSheet
        ref={refRBSheet}
        draggable
        dragOnContent
        height={417}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "#00000031",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View style={styles.BottomSheetModal}>
          <Text style={[styles.top1]}>In-ride Safety Features</Text>
          <Text style={styles.top2}>
            Note: You have only 3 free ride cancellations in a day
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View style={styles.sos1}>
                <Text style={styles.sos1Text}>SOS</Text>
              </View>
              <Text style={styles.rowText}>
                This calls up the nearest Emergency hotline around you
              </Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={28} />
          </TouchableOpacity>
          <View style={styles.div}></View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View style={{ justifyContent: "center" }}>
                <MaterialCommunityIcons
                  name="video-outline"
                  size={38}
                  color={"#0088CD"}
                />
              </View>
              <Text style={styles.rowText}>
                After permission is granted, you livestream your ride for
                monitoring
              </Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={28} />
          </TouchableOpacity>
          <View style={styles.div}></View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <MaterialCommunityIcons name="arrow-right-top-bold" size={29} />
              </View>
              <Text style={styles.rowText}>
                After permission is granted, you livestream your ride for
                monitoring
              </Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={28} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.blueBtn}
            onPress={() => refRBSheet.current.close()}
          >
            <Text style={styles.blueText}>Exit</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef4}
          snapPoints={[430]}
          stackBehavior="replace"
        >
          <BottomSheetView style={styles.bottomSheet1}>
            <Text style={styles.top1}>
              Why do you wish to cancel your Ride?
            </Text>
            <Text style={[styles.top2, { marginBottom: -10, marginTop: -5 }]}>
              Note: You have only 3 free ride cancellations in a day
            </Text>
            <Text style={styles.write}>Select Reason from the list</Text>

            <View style={styles.border}>
              <Pressable
                style={styles.row}
                onPress={() => {
                  setIsChecked({ ...isChecked, one: !isChecked.one });
                }}
              >
                <CheckBox
                  isChecked={isChecked.one}
                  onClick={() => {
                    setIsChecked({ ...isChecked, one: !isChecked.one });
                  }}
                  rightText="Sabi Passanger not showing on map"
                  rightTextStyle={{
                    color: isChecked.one ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-600",
                    fontSize: 16,
                  }}
                  checkedCheckBoxColor="#0088CD"
                  uncheckedCheckBoxColor="#eaeaea"
                />
              </Pressable>

              <View style={styles.div1}></View>

              <Pressable
                style={styles.row}
                onPress={() => {
                  setIsChecked({ ...isChecked, two: !isChecked.two });
                }}
              >
                <CheckBox
                  isChecked={isChecked.two}
                  onClick={() => {
                    setIsChecked({ ...isChecked, two: !isChecked.two });
                  }}
                  rightText="Sabi Passanger is not responding"
                  rightTextStyle={{
                    color: isChecked.two ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-600",
                    fontSize: 16,
                  }}
                  checkedCheckBoxColor="#0088CD"
                  uncheckedCheckBoxColor="#eaeaea"
                />
              </Pressable>
              <View style={styles.div1}></View>

              <Pressable
                style={styles.row}
                onPress={() => {
                  setIsChecked({ ...isChecked, three: !isChecked.three });
                }}
              >
                <CheckBox
                  isChecked={isChecked.three}
                  onClick={() => {
                    setIsChecked({ ...isChecked, three: !isChecked.three });
                  }}
                  rightText="Sabi Passanger taking too long"
                  rightTextStyle={{
                    color: isChecked.three ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-600",
                    fontSize: 16,
                  }}
                  checkedCheckBoxColor="#0088CD"
                  uncheckedCheckBoxColor="#eaeaea"
                />
              </Pressable>
              <View style={styles.div1}></View>

              <Pressable
                style={styles.row}
                onPress={() => {
                  setIsChecked({ ...isChecked, four: !isChecked.four });
                }}
              >
                <CheckBox
                  isChecked={isChecked.four}
                  onClick={() => {
                    setIsChecked({ ...isChecked, four: !isChecked.four });
                  }}
                  rightText="Payment method not accepted"
                  rightTextStyle={{
                    color: isChecked.four ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-600",
                    fontSize: 16,
                  }}
                  checkedCheckBoxColor="#0088CD"
                  uncheckedCheckBoxColor="#eaeaea"
                />
              </Pressable>
              <View style={styles.div1}></View>

              <Pressable
                style={styles.row}
                onPress={() => {
                  setIsChecked({ ...isChecked, five: !isChecked.five });
                }}
              >
                <CheckBox
                  isChecked={isChecked.five}
                  onClick={() => {
                    setIsChecked({ ...isChecked, five: !isChecked.five });
                  }}
                  rightText="Other"
                  rightTextStyle={{
                    color: isChecked.five ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-600",
                    fontSize: 16,
                  }}
                  checkedCheckBoxColor="#0088CD"
                  uncheckedCheckBoxColor="#eaeaea"
                />
              </Pressable>
            </View>
            {/* <Link href={'../../map'} asChild> */}
            <TouchableOpacity
              style={styles.blueBtn}
              onPress={() => {
                bottomSheetRef4.current?.close();
                // router.push("../../(tabs)/searchRequest");
                router.push("/(authenticated)/(tabs)/searchRequest");
              }}
            >
              <Text style={styles.blueText}>Submit</Text>
            </TouchableOpacity>
            {/* </Link> */}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>

      {/* {loading ? (
        <ActivityIndicator
          size="large"
          color="white"
          style={styles.loadingIndicator}
        />
      ) : (
        routeDirections && (
          <View style={styles.cardContainer}>
            <ColorfulCard
              title={LocationData?.address.county}
              value={`${duration}`}
              footerTitle="Distance"
              footerValue={`${distance} km`}
              iconImageSource={require('../../../assets/images/sr car.png')}
              style={{backgroundColor: '#33495F'}}
              onPress={() => {}}
            />
          </View>
        )
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cecece",
    flex: 1,
  },
  bottomSheet: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    // paddingTop:
  },
  bottomSheet1: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingRight: 40,
    // paddingTop:
  },
  Img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "contain",
  },
  topLeft: {
    flexDirection: "row",
    gap: 13,
    alignItems: "center",
  },
  scooterImg: {
    // top: -22,
    width: 170,
    height: 150,
    // transform: [{rotate: '-180deg'}]
    transform: [
      { scaleX: "horizontal" === "horizontal" ? -1 : 1 }, // Horizontal flip
      // { scaleY: 'horizontal' === 'vertical' ? -1 : 1 }, // Vertical flip
    ],
    resizeMode: "contain",
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 10,
    //     height: 10,
    // },
    // shadowOpacity: 0.51,
    // shadowRadius: 13.16,
    // elevation: 9,
  },
  phone: {
    transform: [
      { scaleX: "horizontal" === "horizontal" ? -1 : 1 }, // Horizontal flip
      // { scaleY: 'horizontal' === 'vertical' ? -1 : 1 }, // Vertical flip
    ],
  },
  up: {
    fontFamily: "Baloo-2-500",
    fontSize: 15,
    color: "#929292",
    textAlign: "center",
  },
  down: {
    fontFamily: "Baloo-2-600",
    fontSize: 17,
    textAlign: "center",
  },
  TVS: {
    fontFamily: "Baloo-2-600",
    fontSize: 18,
  },
  rName: {
    fontFamily: "Baloo-2-600",
    fontSize: 17,
    color: "#151513",
  },
  middle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
    paddingBottom: 15,
  },
  line: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginVertical: 20,
    borderTopWidth: 1,
    borderColor: "#DADADA",
    paddingTop: 20,
  },
  activ: {
    backgroundColor: "#0088CD",
    height: 5,
    width: "10%",
  },
  dull: {
    backgroundColor: "#D9D9D9",
    width: "5%",
    height: 4,
  },
  downBtn: {
    backgroundColor: "#0088CD",
    paddingVertical: 17,
    borderRadius: 15,
  },
  btnText: {
    color: "#ffffff",
    fontFamily: "Baloo-2-600",
    textAlign: "center",
    fontSize: 17,
  },
  downBtn2: {
    backgroundColor: "#ffffff",
    paddingVertical: 17,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#0088cd",
  },
  btnText2: {
    color: "#0088CD",
    fontFamily: "Baloo-2-600",
    textAlign: "center",
    fontSize: 17,
  },
  minsSide: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: 50,
    height: 50,
    position: "absolute",
    top: "55%",
    right: "8%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mins: {
    color: "#fff",
    fontFamily: "Baloo-2-600",
    fontSize: 25,
  },
  mapContainer: {
    width: "100%",
    height: "100%",
  },
  menuBtn: {
    // position: 'absolute',
    // top: 60,
    // left: 15,
    // zIndex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    elevation: 20,
  },
  middleSide: {
    position: "absolute",
    // top: 40,
    flex: 1,
    width: "100%",
    // padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 50
  },
  markerContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
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
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 20,
    elevation: 5,
    width: Dimensions.get("window").width - 40,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  closeButtonText: {
    color: "black",
    fontSize: 18,
  },
  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 2,
  },
  cardContainer: {
    position: "absolute",
    top: 110,
    right: 20,
    zIndex: 1,
  },
  destinationIcon: {
    // width: 30,
    // height: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#ffffff',
    // borderRadius: 50,
  },
  sos: {
    backgroundColor: "#ffffff",
    position: "absolute",
    // top: '53%',
    bottom: 365,
    marginLeft: 10,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  midOne: {
    borderLeftWidth: 2,
    borderLeftColor: "#dadada",
    borderRightColor: "#dadada",
    borderRightWidth: 2,
    paddingHorizontal: "15%",
  },
  upOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#dadada",
    paddingBottom: 20,
  },
  middOne: {
    borderBottomWidth: 2,
    borderBottomColor: "#dadada",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  down2: {
    flexDirection: "row",
    // width: '100%',
    // flex: 1,
    // backgroundColor: '#0088cd',
    marginBottom: 30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    // marginTop: 10
  },
  white1: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    zIndex: 1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 15,
  },
  white1Text: {
    color: "#0088CD",
    fontFamily: "Baloo-2-500",
    fontSize: 24,
  },
  downBtn1: {
    borderWidth: 1,
    borderColor: "#0088CD",
    backgroundColor: "#0088CD",
    // paddingVertical: 14,
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    left: -5,
  },
  top1: {
    fontFamily: "Baloo-2-600",
    textAlign: "center",
    fontSize: 22,
    marginBottom: 8,
    marginTop: 8,
  },
  top2: {
    fontFamily: "Baloo-2-400",
    fontSize: 14,
    textAlign: "center",
    color: "#f80000",
  },
  rowText: {
    width: "77%",
    fontFamily: "Baloo-2-500",
    fontSize: 15,
  },
  sos1Text: {
    fontFamily: "Baloo-2-500",
    fontSize: 19,
    color: "white",
  },
  sos1: {
    backgroundColor: "#F90F0F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  div: {
    height: 1,
    backgroundColor: "#929292",
    width: "95%",
    alignSelf: "center",
    marginTop: 20,
  },
  div1: {
    height: 1,
    backgroundColor: "#eaeaea",
    width: "100%",
    alignSelf: "center",
  },
  blueBtn: {
    backgroundColor: "#0088CD",
    width: "75%",
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 15,
  },
  blueText: {
    color: "white",
    fontFamily: "Baloo-2-500",
    fontSize: 19,
  },
  write: {
    fontFamily: "Baloo-2-500",
    textAlign: "center",
    marginTop: 15,
    fontSize: 17,
    marginBottom: 10,
  },
  write1: {
    fontFamily: "Baloo-2-500",
    fontSize: 18,
    width: "90%",
  },
  border: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    borderRadius: 20,
    // paddingVertical: 7
  },
  row: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    // flex: 1
  },
  BottomSheetModal: {
    paddingHorizontal: 20,
  },
  alertView: {
    padding: 15,
    backgroundColor: "#cccccc",
    borderWidth: 1,
    borderColor: "rgba(221, 221, 221, 0.15)",
    marginTop: 50,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  DestText: {
    fontFamily: "Baloo-2-500",
    fontSize: 17,
  },
  deText: {
    fontFamily: "Baloo-2-500",
    fontSize: 17,
    color: "#929292",
    marginTop: 6,
  },
  iMaGe: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  mTeXt: {
    textAlign: "center",
    fontFamily: "Baloo-2-500",
    fontSize: 18,
    color: "#929292",
  },
  mTeXt2: {
    textAlign: "center",
    fontFamily: "Baloo-2-500",
    fontSize: 16,
  },
  tTeXt: {
    fontFamily: "Baloo-2-600",
    fontSize: 16,
  },
});
