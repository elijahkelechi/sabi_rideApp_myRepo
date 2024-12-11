//For custom switch button

// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import React, { useState } from 'react';
// import {
//     LayoutAnimation,
//     Platform,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     UIManager,
//     View
// } from 'react-native';
// if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
// }
// const activeColor = '#0FA958';
// const inActiveColor = '#F90F0F';
// export default function ToggleButton() {
//     const [toggleActive, setToggle] = useState(false);
//     const toggleBtn = () => {
//         LayoutAnimation.easeInEaseOut();
//         setToggle(!toggleActive);
//     }
//     return (
//         <View style={styles.constainer}>
//             <TouchableOpacity
//                 style={[
//                     styles.toggleContainer,
//                     { backgroundColor: toggleActive ? activeColor : inActiveColor },
//                 ]}
//                 onPress={toggleBtn}
//                 activeOpacity={1}>
//                                 <Text style={[styles.status,
//                                        toggleActive
//                                        ? { color: 'white' }
//                                        : { color: 'white', marginLeft: 16 },
//                                 ]}>{toggleActive ? 'Online' : 'Offline'}</Text>
//                 <View
//                     style={[
//                         styles.toggleBtn,
//                         // toggleActive
//                         //     ? { backgroundColor: activeColor, alignSelf: 'flex-end' }
//                         //     : { backgroundColor: inActiveColor },
//                         toggleActive
//                             ? { backgroundColor: 'white', alignSelf: 'flex-end' }
//                             : { backgroundColor: 'white' },
//                     ]}
//                 >
//                     <MaterialCommunityIcons name='car' size={25} color={toggleActive ? 'green' : 'red'}/>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     constainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
//     status: {
//         textAlign: 'center',
//         position: 'absolute',
//         width: '100%',
//         fontFamily: 'Baloo-2-400',
//         color: 'white',
//         fontSize: 20
//     },
//     toggleContainer: {
//         height: 50,
//         width: 150,
//         borderRadius: 100,
//         overflow: 'hidden',
//         justifyContent: 'center',
//         padding: 10
//     },
//     toggleBtn: { 
//         height: 35,
//         width: 35,
//         borderRadius: 100,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// });


//dropdown ALert
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import React, {useEffect, useRef, useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   SafeAreaView,
//   Button,
// } from 'react-native';
// import DropdownAlert, {
//   DropdownAlertData,
//   DropdownAlertType,
//   DropdownAlertColor,
//   DropdownAlertProps,
// } from 'react-native-dropdownalert';



// export default function Notification() {
//   const [processing, setProcessing] = useState(false);
//   let alert = useRef(
//     (_data) => new (res => res),
//   );
//   let dismiss = useRef(() => {});
//   const reactNativeLogoSrc = {
//     uri: 'https://reactnative.dev/docs/assets/favicon.png',
//   };



//   function _onSelect(){
//     setTimeout(async () => {
//       setProcessing(true);
//       await alert.current({
//         type: DropdownAlertType.Warn,
//         // title: 'Warn',
//         message:
//           'This demonstrates the ability to customize image, interval and style.',
//         source: reactNativeLogoSrc,
//         interval: 3000,
//     },
//     );
//       setProcessing(false);
//     }, 10);
//   }


// //   useEffect(() => {
// //       const timeoutId = setTimeout(() => {
// //         _onSelect()
// //     }, 1000); 
// //     return () => clearTimeout(timeoutId); 
// //   }, []); 

//   return (
//     <View style={styles.view}>
//       <SafeAreaView>
//     <Button title='Show' color={'green'} 
//     onPress={() => _onSelect()} disabled={processing}/>
//       </SafeAreaView>
//       <DropdownAlert
//         alert={func => (alert.current = func)}
//         dismiss={func => (dismiss.current = func)}
//         alertViewStyle={[styles.alertView, {backgroundColor: DropdownAlertColor.Warn}]}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F4F3E9',
//   },
//   alertView: {
//     padding: 15,
//     backgroundColor: '#6441A4',
//     marginTop: 30,
//     marginHorizontal: 10,
//     borderRadius: 20
//   },
// });


//bottom sheet
// import "react-native-gesture-handler"
// import { StyleSheet, Text, View, Pressable, Button, TouchableOpacity, Image } from 'react-native'
// import React, { useState, useEffect, useRef, useMemo } from 'react'
// import RBSheet from 'react-native-raw-bottom-sheet';
// import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";

// export default function MapScreen() {

//     const refRBSheet5 = useRef();

//   return (
//     <View style={styles.container}>
//       <Button
//         title="OPEN BOTTOM SHEET"
//         onPress={() => refRBSheet5.current.open()}
//       />
//      <RBSheet
//         ref={refRBSheet5}
//         draggable={false}
//         dragOnContent={false}
//         height={325}
//         closeOnPressMask={false}
//         customStyles={{
//           wrapper: {
//             backgroundColor: '#00000031',
//           },
//           draggableIcon: {
//             backgroundColor: '#000',
//           },
//           container: {
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//             paddingHorizontal: 25,
//             paddingTop: 15
//           }
//         }}
//         customModalProps={{
//           animationType: 'slide',
//           statusBarTranslucent: true,
//         }}
//         customAvoidingViewProps={{
//           enabled: false,
//         }}>
//             <View style={styles.top}>
//                 <Text style={styles.topText}>Ride Request Close-by</Text>
//                 <TouchableOpacity onPress={() => refRBSheet5.current.close()}>
//                 <Foundation name='x' size={22}/>
//                 </TouchableOpacity>
//             </View>
//             <Text style={styles.deText}>Destination</Text>
//             <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E7E6E6', paddingBottom: 23, marginTop: 13}}>
//                 <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
//                 <MaterialCommunityIcons name="navigation-variant" size={24}/>
//                 <View style={{width: '70%'}}>
//                 <Text style={styles.DestText} numberOfLines={2} ellipsizeMode="tail">Train station, Rigasa </Text>
//                 </View>
//                 </View>
//                 <View style={{flexDirection: 'row', alignItems: 'center', gap: 25}}>
//                 <MaterialCommunityIcons name="chat" size={24}/>
//                 <MaterialCommunityIcons name="phone" size={24}/>
//                 </View>
//             </View>

//             <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
//                 <View>
//                 <Image source={require('../assets/images/76.png')} style={styles.iMaGe} resizeMode="cover"/>
//                 </View>
//                 <View style={{gap: 20}}>
//                     <Text style={styles.mTeXt}>Offer</Text>
//                     <Text style={styles.mTeXt2}>NGN 3,500</Text>
//                 </View>
//                 <View style={{gap: 20}}>
//                     <Text style={styles.mTeXt}>Est. Arrival Time</Text>
//                     <Text style={styles.mTeXt2}>7 mins</Text>
//                 </View>
//             </View>
//             <TouchableOpacity style={styles.bTn}>
//                 <Text style={styles.bTnText}>Accept Passenger Trip request</Text>
//             </TouchableOpacity>
//       </RBSheet>
//     </View>

//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white', 
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     top: {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     topText: {
//         fontFamily: 'Baloo-2-500',
//         fontSize: 20
//     },
//     DestText: {
//         fontFamily: 'Baloo-2-500',
//         fontSize: 17
//     },
//     deText: {
//         fontFamily:'Baloo-2-500',
//         fontSize: 17,
//         color: '#929292',
//         marginTop: 6
//     },
//     iMaGe: {
//         width: 50,
//         height: 50,
//         borderRadius: 100
//     },
//     mTeXt: {
//         textAlign: 'center',
//         fontFamily: 'Baloo-2-500',
//         fontSize: 18,
//         color: '#929292'
//     },
//     mTeXt2: {
//             textAlign: 'center', 
//             fontFamily: 'Baloo-2-500',
//             fontSize: 16
        
//     },
//     bTn: {
//         backgroundColor: '#0FA958',
//         width: '90%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 15,
//         alignSelf: 'center',
//         marginTop: 25,
//         borderRadius: 11
//     },
//     bTnText: {
//         color: '#fff',
//         fontFamily: 'Baloo-2-500',
//         fontSize: 16
//     }
// })



import { Image, StyleSheet, Text, View, Dimensions, Animated, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';
import { Link , useRouter} from 'expo-router'
const {width, height} = Dimensions.get('window');

export default function Testing() {
  const router = useRouter();

  const translateX = useRef(new Animated.Value(0)).current;
  const [onRight, setOnRight] = useState(true);
  const animate = () => {
    Animated.spring(translateX, {
      toValue: onRight ? -width  : width ,
      useNativeDriver: true,
    }).start();
    setOnRight(!onRight);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animate();
    }, 1000); 
    const timeoutId1 = setTimeout(() => {
      router.replace('./')
    }, 3000); 

    return () => {
      clearTimeout(timeoutId); 
      clearTimeout(timeoutId1); 
    }
  }, [])
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/sabi Ride logo.png')} style={styles.Image} resizeMode='contain'/>
      <Animated.View style={{transform: [{translateX}]}}>
      <Image source={require('../assets/images/Sabi Ride car.png')} style={styles.Image1} resizeMode='contain'/>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Image: {
    height: 250,
    width: width-50
  },
  Image1: {
    height: 100,
    width: width-50,
    marginTop: -9,
    // left: -width
    left: width
  }
})