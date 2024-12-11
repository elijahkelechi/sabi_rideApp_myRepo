import { FontAwesome5, FontAwesome6, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
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
  StatusBar,
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
import ActionSheet, {useScrollHandlers} from "react-native-actions-sheet";
import {NativeViewGestureHandler} from 'react-native-gesture-handler';
import { Divider } from "@rneui/base";


export default function DriverComing() {
  const router = useRouter();
  const refRBSheet = useRef();

  const insets = useSafeAreaInsets();
  const actionSheetRef = useRef(null);
  const actionSheetRef1 = useRef(null);
  const actionSheetRef2 = useRef(null);
  const actionSheetRef3 = useRef(null);
  const actionSheetRef4 = useRef(null);
  const actionSheetRef5 = useRef(null);
  const actionSheetRef6 = useRef(null);
  const actionSheetRef7 = useRef(null);
  const handlers = useScrollHandlers();

  
  const [modalVisible, setmodalVisible] = useState(false);
  const [LocationData, setLocationData] = useState(null);
  
  const closeModal = () => {
    setmodalVisible(false);
  };
  
  
  const [hName, sethName] = useState("Enroute to Passenger");
  

  // const [Aktiv, setAktiv] = useState('#0088CD');
  const [Aktiv, setAktiv] = useState({backgroundColor: '#0088CD',  width: "12%", height: 5, borderRadius: 50});
  const [Duhl, setDuhl] = useState({backgroundColor: '#D9D9D9', height: 4, width: "7%", borderRadius: 50});

  const [visib1, setVisib1] = useState('flex')
  const [visib2, setVisib2] = useState('none')
  const [visib3, setVisib3] = useState('none')

  const [visib4, setVisib4] = useState('flex')
  const [visib5, setVisib5] = useState('none')
  const [visib6, setVisib6] = useState('none')

  useEffect(() => {
    actionSheetRef.current.show();
    const timeoutId = setTimeout(() => {
      // setVisib1('none');
      // setVisib2('flex');
      // setAktiv({backgroundColor: '#D9D9D9', height: 4, width: "7%", borderRadius: 50});
      // setDuhl({backgroundColor: '#0088CD',  width: "12%", height: 5, borderRadius: 50})
      actionSheetRef4.current.show();
      actionSheetRef.current.hide();
    }, 5000); // Delay in milliseconds (3 seconds)

    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  // const changeScreen = () => {
  //   const timeoutId = setTimeout(() => {
  //     bottomSheetRef2.current?.close();
  //     router.replace("./CompletedRide");
  //   }, 3000); // Delay in milliseconds (3 seconds)

  //   return () => clearTimeout(timeoutId); // Cleanup function
  // };

  const [isChecked, setIsChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const origin = {latitude: 9.033373, longitude: 7.486511}; 
const destination = {latitude: 9.035974, longitude: 7.489370}; 
// const GOOGLE_MAPS_APIKEY = 'AIzaSyCXNV5E5xnGxDycQmLy2wHpUe7xyOGstdY';

  return (
    <View style={styles.container}>
  <StatusBar barStyle={'dark-content'}/>
              <MapView
        initialRegion={{ 
          latitude: 9.033348,
          longitude: 7.486479,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01, 
        }}
        mapType="terrain"
        // showsCompass="false"
        showsCompass={false}
        showsMyLocationButton={false}
        // provider="default"
        provider={PROVIDER_DEFAULT}
        showsUserLocation
        followsUserLocation
        // showsMyLocationButton
        style={{height: '105%'}}>

<MapViewDirections
    origin={origin}
    destination={destination}
    apikey={'AIzaSyCXNV5E5xnGxDycQmLy2wHpUe7xyOGstdY'}
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
    <Image source={require("./assets/sr car.png")} style={{ height: 40, width: 40 }} />
  </Marker>
        </MapView>

        <View style={[styles.middleSide, 
        { paddingTop: insets.top + 10}
        ]}>
        {/* <View> */}
          {/* <Link href={"/(authenticated)/(tabs)/map"} asChild> */}
          {/* <Link href={"../../../(tabs)/map"} asChild> */}
            {/* <TouchableOpacity style={styles.menuBtn}> */}
              {/* <MaterialCommunityIcons name="chevron-left" size={26} /> */}
            {/* </TouchableOpacity> */}
          {/* </Link> */}
        {/* </View> */}
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#000000",
              fontFamily: "Baloo-2-600",
              fontSize: 23,
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

      <ActionSheet 
        closable={false}
        containerStyle={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 10}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        initialSnapIndex={1}
        snapPoints={[27, 100]}
        indicatorStyle={{
            width: 51,
            backgroundColor: '#cccccc'
          }}
          drawUnderStatusBar={false}
        useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        overdrawEnabled={false}
        ref={actionSheetRef}>

            <TouchableOpacity
        style={styles.sos}
        onPress={() => actionSheetRef2.current?.show()} 
      >
        <Octicons size={30} color={"#0088CD"} name="shield-check" />
      </TouchableOpacity>

      <View style={styles.minsSide}>
        <Text style={styles.mins}>6'</Text>
      </View>
          <View style={styles.bottomSheet}>
          <Text style={styles.deText}>Destination</Text>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#E7E6E6",
              paddingBottom: 10,
              marginTop: 1,
              // marginHorizontal: 30,
            }}
          >
            <View style={{ flexDirection: "row", 
              alignItems: "center", 
              gap: 12,
              flex: 3, }}> 

              <View>
              <FontAwesome5 name='location-arrow' size={16}  color="#000000"/>
              </View>
                
              <View style={{  flex: 1   }}>
                <Text
                  style={styles.DestText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Train station, Rigasa
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", 
                alignItems: "center", 
                justifyContent: 'space-between', flex: 1}}
            >
              <View>
              <Link href={"./ChatScreen"} asChild>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="chat" size={24} />
                </TouchableOpacity>
              </Link>
              </View>
                
              <View>
              <Link href={"./VoiceCall"} asChild>
                <TouchableOpacity>
                  <FontAwesome6 name='phone-flip' size={19}/>
                </TouchableOpacity>
              </Link>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14,
              // backgroundColor: 'red'
            }}
          >
            <View>
              <View
                style={{ flexDirection: "row",  gap: 10 }}
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
                  marginLeft: 12,
                }}
              >
                <MaterialCommunityIcons name="account" color={"#929292"} />
                <Text style={{ color: "#929292", fontFamily: "Baloo-2-500", fontSize: 16 }}>
                  2
                </Text>
              </View>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={styles.mTeXt}>Payment Type</Text>
              <Text style={styles.mTeXt2}>Cash</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={Aktiv}></View>
            <View style={Duhl}></View>
            <View style={Duhl}></View>
          </View>

                {/* first button */}
          <View >
            <TouchableOpacity
              style={styles.downBtn}
              onPress={() => {
                actionSheetRef1.current.show();
              }}
            >
              <Text style={styles.btnText}>Cancel Ride</Text>
            </TouchableOpacity>
          </View>

              {/* Second Button */}
          {/* <View style={{display: visib2}}>
              <TouchableOpacity
                style={styles.downBtn}
                onPress={() => {
                setVisib2('none');
                setVisib3('flex');
                  sethName("Start Trip");
                  //  changeScreen();
                }}
              >
                <Text style={styles.btnText}>I have Arrived</Text>
              </TouchableOpacity>
            </View> */}

                {/* Third Button */}
            {/* <View style={{display: visib3}}>
            <TouchableOpacity
                style={styles.downBtn}
                onPress={() => {
                  actionSheetRef.current?.hide();
                  actionSheetRef3.current?.show();
                  sethName('Enroute to Destination')
                }}
              >
                <Text style={styles.btnText}>Start Trip</Text>
              </TouchableOpacity>
            </View> */}
          </View>
    </ActionSheet>
      
      <ActionSheet 
        closable={false}
        containerStyle={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 10}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        initialSnapIndex={1}
        snapPoints={[27, 100]}
        indicatorStyle={{
            width: 51,
            backgroundColor: '#cccccc'
          }}
          drawUnderStatusBar={false}
        useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        overdrawEnabled={false}
        ref={actionSheetRef4}>

            <TouchableOpacity
        style={styles.sos}
        onPress={() => actionSheetRef2.current?.show()} 
      >
        <Octicons size={30} color={"#0088CD"} name="shield-check" />
      </TouchableOpacity>

      <View style={styles.minsSide}>
        <Text style={styles.mins}>6'</Text>
      </View>
          <View style={styles.bottomSheet}>
          <Text style={styles.deText}>Destination</Text>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#E7E6E6",
              paddingBottom: 10,
              marginTop: 1,
              // marginHorizontal: 30,
            }}
          >
            <View style={{ flexDirection: "row", 
              alignItems: "center", 
              gap: 12,
              flex: 3, }}> 

              <View>
              <FontAwesome5 name='location-arrow' size={16}  color="#000000"/>
              </View>
                
              <View style={{  flex: 1   }}>
                <Text
                  style={styles.DestText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Train station, Rigasa
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", 
                alignItems: "center", 
                justifyContent: 'space-between', flex: 1}}
            >
              <View>
              <Link href={"./ChatScreen"} asChild>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="chat" size={24} />
                </TouchableOpacity>
              </Link>
              </View>
                
              <View>
              <Link href={"./VoiceCall"} asChild>
                <TouchableOpacity>
                  <FontAwesome6 name='phone-flip' size={19}/>
                </TouchableOpacity>
              </Link>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14,
              // backgroundColor: 'red'
            }}
          >
            <View>
              <View
                style={{ flexDirection: "row",  gap: 10 }}
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
                  marginLeft: 12,
                }}
              >
                <MaterialCommunityIcons name="account" color={"#929292"} />
                <Text style={{ color: "#929292", fontFamily: "Baloo-2-500", fontSize: 16 }}>
                  2
                </Text>
              </View>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={styles.mTeXt}>Payment Type</Text>
              <Text style={styles.mTeXt2}>Cash</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={Duhl}></View>
            <View style={Aktiv}></View>
            <View style={Duhl}></View>
          </View>

                {/* first button */}
          {/* <View style={{display: visib1}}>
            <TouchableOpacity
              style={styles.downBtn}
              onPress={() => {
                actionSheetRef1.current.show();
              }}
            >
              <Text style={styles.btnText}>Cancel Ride</Text>
            </TouchableOpacity>
          </View> */}

              {/* Second Button */}
          <View >
              <TouchableOpacity
                style={styles.downBtn}
                onPress={() => {
                  actionSheetRef5.current.show();
                  actionSheetRef4.current.hide();
                  sethName("Start Trip");
                  //  changeScreen();
                }}
              >
                <Text style={styles.btnText}>I have Arrived</Text>
              </TouchableOpacity>
            </View>

                {/* Third Button */}
            {/* <View style={{display: visib3}}>
            <TouchableOpacity
                style={styles.downBtn}
                onPress={() => {
                  actionSheetRef.current?.hide();
                  actionSheetRef3.current?.show();
                  sethName('Enroute to Destination')
                }}
              >
                <Text style={styles.btnText}>Start Trip</Text>
              </TouchableOpacity>
            </View> */}
          </View>
    </ActionSheet>
      
      <ActionSheet 
        closable={false}
        containerStyle={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 10}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        initialSnapIndex={1}
        snapPoints={[27, 100]}
        indicatorStyle={{
            width: 51,
            backgroundColor: '#cccccc'
          }}
          drawUnderStatusBar={false}
        useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        overdrawEnabled={false}
        ref={actionSheetRef5}>

            <TouchableOpacity
        style={styles.sos}
        onPress={() => actionSheetRef2.current?.show()} 
      >
        <Octicons size={30} color={"#0088CD"} name="shield-check" />
      </TouchableOpacity>

      <View style={styles.minsSide}>
        <Text style={styles.mins}>6'</Text>
      </View>
          <View style={styles.bottomSheet}>
          <Text style={styles.deText}>Destination</Text>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#E7E6E6",
              paddingBottom: 10,
              marginTop: 1,
              // marginHorizontal: 30,
            }}
          >
            <View style={{ flexDirection: "row", 
              alignItems: "center", 
              gap: 12,
              flex: 3, }}> 

              <View>
              <FontAwesome5 name='location-arrow' size={16}  color="#000000"/>
              </View>
                
              <View style={{  flex: 1   }}>
                <Text
                  style={styles.DestText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Train station, Rigasa
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: "row", 
                alignItems: "center", 
                justifyContent: 'space-between', flex: 1}}
            >
              <View>
              <Link href={"./ChatScreen"} asChild>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="chat" size={24} />
                </TouchableOpacity>
              </Link>
              </View>
                
              <View>
              <Link href={"./VoiceCall"} asChild>
                <TouchableOpacity>
                  <FontAwesome6 name='phone-flip' size={19}/>
                </TouchableOpacity>
              </Link>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14,
              // backgroundColor: 'red'
            }}
          >
            <View>
              <View
                style={{ flexDirection: "row",  gap: 10 }}
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
                  marginLeft: 12,
                }}
              >
                <MaterialCommunityIcons name="account" color={"#929292"} />
                <Text style={{ color: "#929292", fontFamily: "Baloo-2-500", fontSize: 16 }}>
                  2
                </Text>
              </View>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={styles.mTeXt}>Payment Type</Text>
              <Text style={styles.mTeXt2}>Cash</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={Duhl}></View>
            <View style={Duhl}></View>
            <View style={Aktiv}></View>
          </View>

                {/* first button */}
          {/* <View style={{display: visib1}}>
            <TouchableOpacity
              style={styles.downBtn}
              onPress={() => {
                actionSheetRef1.current.show();
              }}
            >
              <Text style={styles.btnText}>Cancel Ride</Text>
            </TouchableOpacity>
          </View> */}

              {/* Second Button */}
          {/* <View style={{display: visib2}}>
              <TouchableOpacity
                style={styles.downBtn}
                onPress={() => {
                setVisib2('none');
                setVisib3('flex');
                  sethName("Start Trip");
                  //  changeScreen();
                }}
              >
                <Text style={styles.btnText}>I have Arrived</Text>
              </TouchableOpacity>
            </View> */}

                {/* Third Button */}
            <View>
            <TouchableOpacity
                style={styles.downBtn}
                onPress={() => {
                  actionSheetRef5.current?.hide();
                  actionSheetRef3.current?.show();
                  sethName('Enroute to Destination')
                }}
              >
                <Text style={styles.btnText}>Start Trip</Text>
              </TouchableOpacity>
            </View>
          </View>
    </ActionSheet>
     
      <ActionSheet 
        closable={false}
        containerStyle={{ 
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          elevation: 15}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        // initialSnapIndex={1}
        snapPoints={[100]}
        indicatorStyle={{
          width: 51,
          backgroundColor: '#cccccc'
        }}
          drawUnderStatusBar={false}
        useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        overdrawEnabled={false}
        onOpen={() => {
          const timeoutId = setTimeout(() => {
            // setVisib4('none');
            // setVisib5('flex')
            actionSheetRef6.current?.show();
            actionSheetRef3.current?.hide();
          }, 5000); // Delay in milliseconds (3 seconds)
      
          return () => clearTimeout(timeoutId); // Cleanup function
        }}
        ref={actionSheetRef3}>

            <TouchableOpacity
        style={styles.sos}
        onPress={() => actionSheetRef2.current?.show()} 
      >
        <Octicons size={26} color={"#0088CD"} name="shield-check" />
      </TouchableOpacity>

      <View style={styles.bottomSheet}>
          <View style={styles.upOne}>
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
      </View>

        {/* Fourth button */}
      <View>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15}]}
                onPress={() => {
                  actionSheetRef1.current?.show();
                }}
                >
                <Text style={styles.btnText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>

        {/* Fifth Button */}
      {/* <View style={{display: visib5}}>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15}]}
                onPress={() => {
                  setVisib5('none');
                  setVisib6('flex')
                }}
                >
                <Text style={styles.btnText}>Confirm Payment from Passanger</Text>
        </TouchableOpacity>
      </View> */}

      {/* Sixth Button */}
      {/* <View style={{display: visib6}}>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15, backgroundColor: '#0FA958'}]}
                onPress={() => {
                  router.replace("./CompletedRide");
                }}
                >
                <Text style={styles.btnText}>Arrived!</Text>
        </TouchableOpacity>
      </View> */}
      </View>
    </ActionSheet>
      
      <ActionSheet 
        closable={false}
        containerStyle={{ 
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          elevation: 15}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        // initialSnapIndex={1}
        snapPoints={[100]}
        indicatorStyle={{
          width: 51,
          backgroundColor: '#cccccc'
        }}
          drawUnderStatusBar={false}
        useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        overdrawEnabled={false}
        ref={actionSheetRef6}>

            <TouchableOpacity
        style={styles.sos}
        onPress={() => actionSheetRef2.current?.show()} 
      >
        <Octicons size={26} color={"#0088CD"} name="shield-check" />
      </TouchableOpacity>

      <View style={styles.bottomSheet}>
          <View style={styles.upOne}>
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
      </View>

        {/* Fourth button */}
      {/* <View style={{display: visib4}}>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15}]}
                onPress={() => {
                  actionSheetRef1.current?.show();
                }}
                >
                <Text style={styles.btnText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View> */}

        {/* Fifth Button */}
      <View >
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15}]}
                onPress={() => {
                  actionSheetRef6.current?.hide();
                  actionSheetRef7.current?.show();
                }}
                >
                <Text style={styles.btnText}>Confirm Payment from Passanger</Text>
        </TouchableOpacity>
      </View>

      {/* Sixth Button */}
      <View style={{display: visib6}}>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15, backgroundColor: '#0FA958'}]}
                onPress={() => {
                  router.replace("./CompletedRide");
                }}
                >
                <Text style={styles.btnText}>Arrived!</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ActionSheet>
     
      <ActionSheet 
        closable={false}
        containerStyle={{ 
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          elevation: 15}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        // initialSnapIndex={1}
        snapPoints={[100]}
        indicatorStyle={{
          width: 51,
          backgroundColor: '#cccccc'
        }}
          drawUnderStatusBar={false}
        useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        overdrawEnabled={false}
        ref={actionSheetRef7}>

            <TouchableOpacity
        style={styles.sos}
        onPress={() => actionSheetRef2.current?.show()} 
      >
        <Octicons size={26} color={"#0088CD"} name="shield-check" />
      </TouchableOpacity>

      <View style={styles.bottomSheet}>
          <View style={styles.upOne}>
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
      </View>

        {/* Fourth button */}
      {/* <View style={{display: visib4}}>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15}]}
                onPress={() => {
                  actionSheetRef1.current?.show();
                }}
                >
                <Text style={styles.btnText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View> */}

        {/* Fifth Button */}
      {/* <View style={{display: visib5}}>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15}]}
                onPress={() => {
                  setVisib5('none');
                  setVisib6('flex')
                }}
                >
                <Text style={styles.btnText}>Confirm Payment from Passanger</Text>
        </TouchableOpacity>
      </View> */}

      {/* Sixth Button */}
      <View>
        <TouchableOpacity
                style={[styles.downBtn, {marginTop: 15, backgroundColor: '#0FA958'}]}
                onPress={() => {
                  router.replace("./CompletedRide");
                }}
                >
                <Text style={styles.btnText}>Arrived!</Text>
        </TouchableOpacity>
      </View>
      </View>

    </ActionSheet>

      {/* <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[110, 338]}
        index={1}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
      >
        <BottomSheetView style={styles.bottomSheet}>
          
        </BottomSheetView>
      </BottomSheet> */}


      {/* <RBSheet
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
      </RBSheet> */}

      <ActionSheet 
containerStyle={{ 
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  elevation: 15}}
          gestureEnabled
        snapPoints={[100]}
        indicatorStyle={{
          width: 51,
          backgroundColor: '#cccccc'
        }}
          drawUnderStatusBar={false}
        useBottomSafeAreaPadding 
        safeAreaInsets={insets}
        // closeOnTouchBackdrop={false}
        overdrawEnabled={false}
        ref={actionSheetRef2}>
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
            onPress={() => actionSheetRef2.current.hide()}
          >
            <Text style={styles.blueText}>Exit</Text>
          </TouchableOpacity>
        </View>
    </ActionSheet>

      <ActionSheet 
        containerStyle={{ 
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 15}}
        gestureEnabled
        backgroundInteractionEnabled={true}
        isModal={false}
        snapPoints={[100]}
        indicatorStyle={{
          width: 51,
          backgroundColor: '#cccccc'
        }}
        useBottomSafeAreaPadding 
        overdrawEnabled={false}
        safeAreaInsets={insets}
        ref={actionSheetRef1}>
          <View style={styles.bottomSheet1}>
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
                  rightText="Sabi Passenger not showing on map"
                  rightTextStyle={{
                    color: isChecked.one ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-500",
                    fontSize: 14,
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
                  rightText="Sabi Passenger is not responding"
                  rightTextStyle={{
                    color: isChecked.two ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-500",
                    fontSize: 14,
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
                  rightText="Sabi Passenger taking too long"
                  rightTextStyle={{
                    color: isChecked.three ? "#0088CD" : "black",
                    fontFamily: "Baloo-2-500",
                    fontSize: 14,
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
                    fontFamily: "Baloo-2-500",
                    fontSize: 14,
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
                    fontFamily: "Baloo-2-500",
                    fontSize: 14,
                  }}
                  checkedCheckBoxColor="#0088CD"
                  uncheckedCheckBoxColor="#eaeaea"
                />
              </Pressable>
            </View>
            <TouchableOpacity
              style={styles.blueBtn}
              onPress={() => {
                actionSheetRef1.current?.hide();
                router.replace("/(authenticated)/(tabs)/searchRequest");
              }}
            >
              <Text style={styles.blueText}>Submit</Text>
            </TouchableOpacity>
          </View>
    </ActionSheet>

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
    marginTop: 5,
    fontFamily: "Baloo-2-500",
    fontSize: 15,
    color: "#929292",
    textAlign: "center",
  },
  down: {
    marginTop: 5,
    fontFamily: "Baloo-2-600",
    fontSize: 16,
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
    marginVertical: 10,
    borderTopWidth: 1,
    borderColor: "#DADADA",
    paddingTop: 17,
  },
  // activ: {
  downBtn: {
    backgroundColor: "#0088CD",
    borderRadius: 15,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  btnText: {
    color: "#ffffff",
    fontFamily: "Baloo-2-500",
    // textAlign: "center",
    fontSize: 15,
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
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 20,
    // paddingTop: 50
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
    marginLeft: 10,
    borderRadius: 50,
    marginTop: -78,
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  midOne: {
    borderLeftWidth: 1.5,
    borderLeftColor: "#dadada",
    borderRightColor: "#dadada",
    borderRightWidth: 1.5,
    paddingHorizontal: "15%",
  },
  upOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: "#dadada",
    paddingBottom: 17,
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
    fontSize: 20,
    marginBottom: 8,
    marginTop: 8,
  },
  top2: {
    fontFamily: "Baloo-2-400",
    fontSize: 12,
    textAlign: "center",
    color: "#f80000",
  },
  rowText: {
    width: "77%",
    fontFamily: "Baloo-2-500",
    fontSize: 13,
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
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 1000,
  },
  blueText: {
    color: "white",
    fontFamily: "Baloo-2-500",
    fontSize: 14,
  },
  write: {
    fontFamily: "Baloo-2-500",
    textAlign: "center",
    marginTop: 15,
    fontSize: 15,
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
    marginRight: 10
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
    fontSize: 16,
    width: '90%'
  },
  deText: {
    fontFamily: "Baloo-2-500",
    fontSize: 16,
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
    fontSize: 16,
    color: "#929292",
    paddingTop: 3
  },
  mTeXt2: {
    textAlign: "center",
    fontFamily: "Baloo-2-500",
    fontSize: 16,
  },
  tTeXt: {
    fontFamily: "Baloo-2-600",
    fontSize: 15,
    marginTop: 5
  },
  minsSide: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: 50,
    height: 50,
    position: "absolute",
    marginTop: -40,
    alignSelf: 'flex-end',
    right: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  mins: {
    color: "#fff",
    fontFamily: "Baloo-2-600",
    fontSize: 25,
  },
});
