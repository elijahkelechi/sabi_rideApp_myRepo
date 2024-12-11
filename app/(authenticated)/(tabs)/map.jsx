import React from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  LayoutAnimation,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// import Geolocation from "@react-native-community/geolocation";
import { Link, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useSafeAreaInsets } from "react-native-safe-area-context";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const activeColor = "#0FA958";
const inActiveColor = "#F90F0F";

const Map = () => {
  const router = useRouter();
  const [toggleActive, setToggle] = useState(false);
  const [verified, setVerified] = useState(false);

  const inset = useSafeAreaInsets();

  const openModal = () => {
    setmodalVisible(true);
  };
  const openModal1 = () => {
    setmodalVisible1(true);
  };
  const openModal2 = () => {
    setmodalVisible2(true);
  };
  const toggleBtn = () => {
    if (verified == true) {
      LayoutAnimation.easeInEaseOut();
      setToggle(!toggleActive);
    } else {
      openModal();
    }
  };

  const refRBSheet = useRef();
  const refRBSheet1 = useRef();

  const [region, setRegion] = useState({
    latitude: 9.082,
    longitude: 8.6753,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef();

  useEffect(() => {
    GetLocation();
  }, []);

  useEffect(() => {
    mapRef.current?.animateToRegion(region, 2000);
  }, [region]);

  const [myLocation, setmyLocation] = useState("Loading, Loading");

  //to show live locaion
  async function GetLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }
    let { coords } = await Location.getCurrentPositionAsync();
    setRegion({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    if (coords) {
      console.log(coords.latitude + ", " + coords.longitude);

      // setlatitude(coords.latitude);
      // setlongitude(coords.longitude);

      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      for (let item of response) {
        // let address = `${item.name}, ${item.street}, ${item.city}, ${item.district}, ${item.region}`;
        let address = ` ${item.street}, ${item.city}`;

        console.log(address);
        // alert(address)
        setmyLocation(address);
      }
    }
  }

  const [modalVisible, setmodalVisible] = useState(false);
  const [modalVisible1, setmodalVisible1] = useState(false);
  const [modalVisible2, setmodalVisible2] = useState(false);

  const closeModal = () => {
    setmodalVisible(false);
  };
  const closeModal1 = () => {
    setmodalVisible1(false);
  };
  const closeModal2 = () => {
    setmodalVisible2(false);
  };

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 10000 });
    }
  };

  const [Display1, setDisplay1] = useState("flex");
  const [Display2, setDisplay2] = useState("none");

  const [view, setview] = useState("flex");
  const [view1, setview1] = useState("none");
  const [view2, setview2] = useState("none");

  const verificatio = () => {
    refRBSheet.current?.close();
    openModal1();
    setTimeout(() => {
      setVerified(true);
      LayoutAnimation.easeInEaseOut();
      setToggle(!toggleActive);
      setview2("flex");
      setview("none");
      setTimeout(() => {
        openModal2();
      }, 7000);
    }, 3000);
    setTimeout(() => {
      closeModal1();
    }, 6000);
  };
  const refRBSheet5 = useRef();

  return (
    <View style={styles.mapContainer}>
      <View
        style={{
          flex: 1,
        }}
      >
        <MapView
          initialRegion={region}
          mapType="terrain"
          showsMyLocationButton={false}
          followsUserLocation
          ref={mapRef}
          showsCompass={false}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          camera={region}
          style={{ flex: 1 }}
        ></MapView>
      </View>

      <View style={styles.mainMiddleSide}>
        {/* Menu Button */}
        <View>
          <Link href={"../External/sub/menu/Profile"} asChild>
            <TouchableOpacity style={styles.menuButton}>
              <View style={styles.iconContainer}>
                <View style={[styles.line, styles.shortLine]} />
                <View style={[styles.line, styles.longLine]} />
                <View style={[styles.line, styles.mediumLine]} />
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Toggle Switch */}
        <View style={{ alignItems: "center" }}>
          <View>
            <Pressable
              style={[
                styles.toggleContainer,
                { backgroundColor: toggleActive ? activeColor : inActiveColor },
              ]}
              onPress={toggleBtn}
              activeOpacity={1}
            >
              <Text
                style={[
                  styles.status,
                  toggleActive
                    ? { color: "white" }
                    : { color: "white", marginLeft: 16 },
                ]}
              >
                {toggleActive ? "Online" : "Offline"}
              </Text>
              <View
                style={[
                  styles.toggleBtn,
                  toggleActive
                    ? { backgroundColor: "white", alignSelf: "flex-end" }
                    : { backgroundColor: "white" },
                ]}
              >
                <MaterialCommunityIcons
                  name="car"
                  size={16}
                  color={toggleActive ? "green" : "red"}
                />
              </View>
            </Pressable>
          </View>

          {/* My Location Text */}
          <View
            style={
              {
                // backgroundColor: 'blue',
                // width: '70%'
              }
            }
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Baloo-2-400",
                fontSize: 14,
                marginTop: 10,
              }}
            >
              Your Location:
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#0FA958",
                fontFamily: "Baloo-2-600",
                fontSize: 16,
                // maxWidth: "90%",
                // width:  "90%",
              }}
              numberOfLines={1}
            >
              {myLocation}
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("./assets/76.png")}
            style={{ width: 35, height: 35, borderRadius: 50 }}
          />
        </View>
      </View>

      {/* {loading ? (
        <ActivityIndicator
          size="large"
          color="white"
          style={styles.loadingIndicator}
        />
      ) : (
        routeDirections && (
          <View style={styles.cardContainer}>
          </View>
        )
      )} */}
      <View>
        <Modal visible={modalVisible} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
                >
                  <AntDesign name="exclamationcircle" color={"red"} size={22} />
                  <Text style={styles.modalHead}>Hey SABI Rider</Text>
                </View>
                <TouchableOpacity onPress={closeModal}>
                  <Foundation name="x" size={22} />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalText}>
                To go online, you have to make your daily Payment
              </Text>
              <View style={styles.modalDown}>
                <TouchableOpacity
                  onPress={() => {
                    closeModal();
                    refRBSheet.current.open();
                  }}
                  style={styles.noButton}
                >
                  <Text style={styles.noButtonText}>Continue to payment</Text>
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
              <View style={{ display: view }}>
                <ActivityIndicator size={"large"} color={"#0088cd"} />
                <Text
                  style={{
                    fontFamily: "Baloo-2-500",
                    fontSize: 22,
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  Verifying....
                </Text>
              </View>
              <View
                style={[
                  styles.alert,
                  { backgroundColor: "rgba(246, 202, 192, 1)", display: view1 },
                ]}
              >
                <View
                  style={[
                    styles.logo,
                    { backgroundColor: "rgba(225, 76, 44, 1)" },
                  ]}
                >
                  <AntDesign name="warning" size={22} color={"#fff"} />
                </View>
                <View>
                  <Text style={styles.alertText}>
                    Incorrect verification code was entered
                  </Text>
                </View>
              </View>

              <View
                style={[
                  styles.alert,
                  { backgroundColor: "rgba(189, 229, 209, 1)", display: view2 },
                ]}
              >
                <View
                  style={[
                    styles.logo,
                    { backgroundColor: "rgba(33, 167, 101, 1)" },
                  ]}
                >
                  <MaterialCommunityIcons
                    name="check-circle-outline"
                    size={22}
                    color={"#fff"}
                  />
                </View>
                <View>
                  <Text style={styles.alertText}>Verification successful</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <RBSheet
        ref={refRBSheet}
        // useNativeDriver={true}
        draggable
        dragOnContent
        closeOnPressMask={false}
        height={360}
        customStyles={{
          wrapper: {
            backgroundColor: "#00000031",
          },
          draggableIcon: {
            backgroundColor: "#cccccc",
          },
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingHorizontal: 20,
            // backgroundColor: 'red'
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
        <Text style={styles.one}>Choose your payment method</Text>
        <Text style={styles.two}>
          Select a preferred payment method to pay your daily Fee.
        </Text>
        <TouchableOpacity
          onPress={() => {
            refRBSheet1.current?.open();
          }}
          style={styles.cardSide}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 13,
              display: Display1,
            }}
          >
            <MaterialCommunityIcons name="wallet-outline" size={24} />
            <Text style={styles.cText}>E-wallet</Text>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 13,
              display: Display2,
            }}
          >
            <Image
              source={require("./assets/Mastercard_2019_logo.svg.png")}
              style={styles.mcIcon}
            />
            <Text style={styles.cText}>****0347</Text>
          </View> */}
          <TouchableOpacity
            style={styles.change}
            onPress={() => {
              refRBSheet1.current?.open();
            }}
          >
            <Text style={styles.cText}>Change</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.three}>
          Flat Daily Fee <Text style={styles.four}>- NGN 3,000</Text>
        </Text>
        <Text style={styles.five}>
          This Daily fee gives you 24 hours to ride without the hassle of
          Commission at the end of the day !
        </Text>
        <TouchableOpacity style={styles.butn} onPress={verificatio}>
          <Text style={styles.butnText}>Pay Now</Text>
        </TouchableOpacity>
      </RBSheet>

      <RBSheet
        ref={refRBSheet1}
        draggable
        dragOnContent
        height={200}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "#00000031",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            // paddingHorizontal: 20
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
        <View style={styles.BotSheet2}>
          <Text style={styles.head1}>Hey SABI Driver</Text>
          <Text style={styles.body1}>
            To go online, you have to make your daily Payment
          </Text>
          {/* <Text style={styles.body1}>You can also update this in your profile</Text> */}
          <TouchableOpacity
            style={styles.cover}
            onPress={() => {
              router.push("../External/sub/payment/Wallet");
              refRBSheet1.current?.close();
              setDisplay1("flex");
              setDisplay2("none");
            }}
          >
            <MaterialCommunityIcons name="wallet-outline" size={22} />
            <Text style={styles.coText}>E-wallet</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.cover}
            onPress={() => {
              refRBSheet1.current?.close();
              setDisplay1("none");
              setDisplay2("flex");
            }}
          >
            <FontAwesome name="credit-card" size={22} />
            <Text style={styles.coText}>Card</Text>
          </TouchableOpacity> */}
        </View>
      </RBSheet>

      {/* Ride request modal */}
      <View>
        <Modal visible={modalVisible2} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, { paddingHorizontal: 25 }]}>
              <View style={[styles.minsSide, { marginTop: -32 }]}>
                <Text style={styles.mins}>6'</Text>
              </View>

              {/* top side */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 15,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image
                      source={require("./assets/76.png")}
                      style={styles.iMaGe}
                      resizeMode="cover"
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        fontFamily: "Baloo-2-600",
                        fontSize: 14,
                        marginBottom: 3,
                      }}
                    >
                      Marvel Oyinye
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="star"
                        color={"#0088cd"}
                        size={14}
                      />
                      <Text style={{ fontFamily: "Baloo-2-600", fontSize: 15 }}>
                        4.7
                      </Text>
                      <Text
                        style={{
                          color: "#929292",
                          fontFamily: "Baloo-2-400",
                          fontSize: 15,
                        }}
                      >
                        (456)
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Baloo-2-500",
                      marginTop: 3,
                    }}
                  >
                    NGN 5,600
                  </Text>
                </View>
              </View>

              {/* Middle side */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 32,
                  justifyContent: "space-between",
                }}
              >
                {/* Left side */}
                <View>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="location-arrow"
                      size={20}
                      color="#FF7777"
                    />
                    <Text
                      style={{
                        fontFamily: "Baloo-2-400",
                        fontSize: 16,
                        color: "#929292",
                        borderBottomWidth: 1,
                        borderColor: "#dadada",
                        paddingBottom: 6,
                        marginBottom: 8,
                      }}
                    >
                      Train Station, Rigasa
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="location-arrow"
                      size={20}
                      color="#0FA958"
                    />
                    <Text
                      style={{
                        fontFamily: "Baloo-2-400",
                        fontSize: 16,
                        color: "#000000",
                      }}
                    >
                      Television Garage
                    </Text>
                  </View>
                </View>
                {/* Right side */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 25,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons name="chat" size={26} />
                  {/* <MaterialCommunityIcons name="phone" size={26}/> */}
                  <FontAwesome6 name="phone-flip" size={23} />
                </View>
              </View>

              {/* downside */}
              <View style={styles.modalDown}>
                {/* <Link href={"../../../../login"} asChild> */}
                <TouchableOpacity
                  style={styles.yesbutton}
                  onPress={closeModal2}
                >
                  <Text style={styles.yesButtonText}>Decline</Text>
                </TouchableOpacity>
                {/* </Link> */}
                <TouchableOpacity
                  onPress={() => {
                    router.push("../External/sub/map/StartTrip");
                    closeModal2();
                  }}
                  style={styles.noButton1}
                >
                  <Text style={styles.noButtonText1}>Accept</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <RBSheet
        ref={refRBSheet5}
        draggable={false}
        dragOnContent={false}
        height={325}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "#00000031",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 25,
            paddingTop: 15,
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
        <View style={styles.top}>
          <Text style={styles.topText}>Ride Request Close-by</Text>
          <TouchableOpacity onPress={() => refRBSheet5.current.close()}>
            <Foundation name="x" size={22} />
          </TouchableOpacity>
        </View>
        <Text style={styles.deText}>Destination</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#E7E6E6",
            paddingBottom: 23,
            marginTop: 13,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
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
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Image
              source={require("./assets/76.png")}
              style={styles.iMaGe}
              resizeMode="cover"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                marginTop: 3,
              }}
            >
              <MaterialCommunityIcons name="account" color={"#929292"} />
              <Text style={{ color: "#929292", fontFamily: "Baloo-2-500" }}>
                2
              </Text>
            </View>
          </View>
          <View style={{ gap: 23 }}>
            <Text style={styles.mTeXt}>Offer</Text>
            <Text style={styles.mTeXt2}>NGN 3,500</Text>
          </View>
          <View style={{ gap: 23 }}>
            <Text style={styles.mTeXt}>Est. Arrival Time</Text>
            <Text style={styles.mTeXt2}>7 mins</Text>
          </View>
        </View>
        <Link href={"../External/sub/map/StartTrip"} asChild>
          <TouchableOpacity
            style={styles.bTn}
            onPress={() => {
              router.replace("../External/sub/map/StartTrip");
              refRBSheet5.current?.close();
            }}
          >
            <Text style={styles.bTnText}>Accept Passenger Trip request</Text>
          </TouchableOpacity>
        </Link>
      </RBSheet>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  // map: {
  //   flex: 1
  // },
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
  mainMiddleSide: {
    position: "absolute",
    // top: 40,
    flex: 1,
    // backgroundColor: "#d1d1d179",
    width: "100%",
    // padding: 20,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // elevation: 60,
    paddingTop: 45,
    paddingLeft: 21,
    paddingRight: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
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
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 16,
    // marginHorizontal: 20,
    padding: 20,
    elevation: 5,
    width: Dimensions.get("window").width - 40,
  },
  modalText: {
    fontFamily: "Baloo-2-400",
    fontSize: 15,
    // textAlign: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  modalHead: {
    fontFamily: "Baloo-2-500",
    fontSize: 22,
    marginLeft: 10,
    color: "red",
  },
  modalDown: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    gap: 25,
  },
  noButtonText: {
    fontFamily: "Baloo-2-500",
    fontSize: 16,
    color: "white",
  },
  noButton: {
    backgroundColor: "#0FA958",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#0FA958",
    paddingVertical: 5,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 42,
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
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  status: {
    textAlign: "center",
    position: "absolute",
    width: "100%",
    fontFamily: "Baloo-2-400",
    color: "white",
    fontSize: 18,
  },
  toggleContainer: {
    height: 37,
    width: 125,
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    padding: 4,
  },
  toggleBtn: {
    height: 30,
    width: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  cardSide: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 30,
    alignItems: "center",
    marginTop: 25,
    borderColor: "#DADADA",
    width: "100%",
    alignSelf: "center",
    marginBottom: 10,
    height: 56,
  },
  mcIcon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  change: {
    padding: 5,
  },
  cText: {
    fontFamily: "Baloo-2-400",
    fontSize: 16,
    color: "#929292",
  },
  head1: {
    fontFamily: "Baloo-2-600",
    fontSize: 22,
    marginHorizontal: 20,
  },
  body1: {
    fontFamily: "Baloo-2-400",
    fontSize: 13,
    marginTop: 3,
    marginHorizontal: 20,
  },
  cover: {
    // width: '100%',
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    paddingHorizontal: 20,
    // paddingVertical: 20,
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 18,
    marginTop: 20,
    height: 56,
  },
  coverB: {
    // width: '100%',
    flexDirection: "row",
    backgroundColor: "rgba(0, 136, 205, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 13,
    marginTop: 20,
  },
  coText: {
    fontFamily: "Baloo-2-500",
    fontSize: 15,
  },
  BotSheet2: {
    // backgroundColor: '#fef9f90',
    flex: 1,
  },
  one: {
    fontFamily: "Baloo-2-600",
    fontSize: 22,
    // textAlign: "center",
  },
  two: {
    fontFamily: "Baloo-2-400",
    fontSize: 13,
    // textAlign: "center",
    marginTop: 5,
  },
  three: {
    fontFamily: "Baloo-2-500",
    fontSize: 20,
    marginTop: 15,
  },
  four: {
    fontFamily: "Baloo-2-600",
    fontSize: 24,
  },
  five: {
    fontFamily: "Baloo-2-400",
    fontSize: 13,
    marginTop: 10,
  },
  butn: {
    backgroundColor: "#0FA958",
    // width: 244,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 25,
    width: "76%",
  },
  butnText: {
    fontFamily: "Baloo-2-500",
    color: "#fff",
    fontSize: 16,
  },
  alert: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    height: 50,
    width: "100%",
  },
  logo: {
    height: 50,
    justifyContent: "center",
    width: 50,
    alignItems: "center",
  },
  alertText: {
    fontFamily: "Baloo-2-400",
    fontSize: 15,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topText: {
    fontFamily: "Baloo-2-500",
    fontSize: 20,
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
  bTn: {
    backgroundColor: "#0FA958",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    alignSelf: "center",
    marginTop: 25,
    borderRadius: 11,
  },
  bTnText: {
    color: "#fff",
    fontFamily: "Baloo-2-500",
    fontSize: 16,
  },
  menuButton: {
    // position: "absolute",
    top: 10,
    // left: 10,
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: "50%",
    height: "30%",
    justifyContent: "space-between",
  },
  line: {
    height: 2,
    backgroundColor: "black",
  },
  shortLine: {
    width: "60%",
    alignSelf: "flex-start",
    borderRadius: 100,
  },
  longLine: {
    width: "80%",
    alignSelf: "flex-end",
    borderRadius: 100,
  },
  mediumLine: {
    width: "100%",
    borderRadius: 100,
    // alignSelf: "flex-start",
  },
  minsSide: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: 50,
    height: 50,
    position: "absolute",
    alignSelf: "flex-end",
    right: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  mins: {
    color: "#fff",
    fontFamily: "Baloo-2-600",
    fontSize: 24,
  },
  modalDown: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 25,
  },
  yesButtonText: {
    fontFamily: "Baloo-2-400",
    fontSize: 15,
    color: "#000000",
  },
  noButtonText1: {
    fontFamily: "Baloo-2-400",
    fontSize: 15,
    color: "white",
  },
  noButton1: {
    backgroundColor: "#0fa957d1",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#0fa958",
    paddingVertical: 5,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    height: 37,
  },
  yesbutton: {
    backgroundColor: "#fdfdfd",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#f90f0f",
    paddingVertical: 5,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    height: 37,
  },
});
