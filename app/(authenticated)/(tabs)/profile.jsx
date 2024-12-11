import { StyleSheet, ScrollView, Text, View, Image, TextInput, TouchableOpacity, StatusBar, Dimensions, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import PhoneInput from 'react-native-phone-number-input'
import { Link, useRouter } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from "expo-location"
import axios from 'axios';

// import Profiles from '../(tabs)/profile';


const PersonalDetails = () => {
    const router = useRouter()
  const [formattedValue, setFormattedValue] = useState("");
  const [borderColor, setborderColor] = useState('#fafafa');
  const [modalVisible, setmodalVisible] = useState(false);

  const openModal = () => {
    setmodalVisible(true);
  }

  const closeModal = () => {
    setmodalVisible(false);
  }

  const [Latitude, setLatitude] = useState(0);
  const [Longitude, setLongitude] = useState(0);
  const [lati, setlati] = useState(0);
  const [lngi, setlngi] = useState(0);
  const [address, setAddress] = useState(null)


  const [region, setRegion] = useState({
    latitude: Latitude,
    longitude: Longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01, 
  });

  const [houseAddress, setHouseAddress] = useState('');
  const handleSearch1 = async () => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${Latitude},${Longitude}&key=AIzaSyCl0C26EuumGSi2C3f1jO7YHAfxNuGG0rg`);

      const data = response.data;

      if (data.status === 'OK' && data.results.length > 0) {
        // const buildingName = data.results[0].address_components.find(component => component.types.includes('building').long_name);
        setAddress(data.results[0].formatted_address);
        // setAddress(data.results[0].address_components.long_name);
        // console.log(address);
        // setAddress(buildingName);
      } else {
        console.error('Geocoding failed: ', data.status);
      }
    } catch (error) {
      console.error('Error fetching geocoding data: ', error);
    }
  };


  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${houseAddress}&key=AIzaSyCl0C26EuumGSi2C3f1jO7YHAfxNuGG0rg`);
      const data = response.data;

      if (data.status === 'OK' && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setLatitude(location.lat);
        setLongitude(location.lng)
        setRegion(`{"latitude": ${Latitude}, "latitudeDelta": 0.001, "longitude": ${Longitude}, "longitudeDelta": 0.0008"}`)
      } else {
        console.error('Geocoding failed: ', data.status);
      }
    } catch (error) {
      console.log('Error fetching geocoding data: ', error);
    }
    openModal()
  };

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
      <ScrollView showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='handled'>
        <View style={styles.imgSide}>
      <View>
      <Image source={require('./assets/76.png')} style={styles.img}/>
        <TouchableOpacity style={styles.editBtn}>
            <MaterialCommunityIcons name='square-edit-outline' size={17} color={'#ffffff'} />
        </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.word}>Name</Text>
          <View style={styles.tInputView}>
            <TextInput placeholder='Your Name Here'
            style={styles.tInput}
            />
          </View>

          <Text style={styles.word}>Phone Number</Text>
           <View >
       
       <PhoneInput
       defaultCode='NG'
      //  autoFocus
       containerStyle={[styles.phoneInputContainer, {borderColor: borderColor}]}
       textContainerStyle={styles.textInputStyle}
       textInputStyle={styles.tIStyle}
       codeTextStyle={{fontFamily: 'Baloo-2-400', fontSize: 13}}
       countryPickerButtonStyle={{height: 27, width: 18, marginLeft: 20, }}
       onChangeFormattedText={(text) => {
         setFormattedValue(text)
        //  console.log(text)
       }}
       onChangeCountry={(coun) => {
        console.log(coun.cca2)
       }}
       />
             </View>

          <Text style={styles.word}>Home Address</Text>
                <GooglePlacesAutocomplete
                enablePoweredByContainer={false}
                renderRightButton={() => {
                  return (
                    <TouchableOpacity onPress={ () => {
                      handleSearch();
                      handleSearch1();
                      }}>
                    <MaterialCommunityIcons name='crosshairs-gps' color={'#0088cd'} size={18}/>                 
                    </TouchableOpacity>
                  )
                }}
                styles={{
                    container: {
                      width: '100%',
                      borderRadius: 20,
                      backgroundColor: 'rgba(242, 242, 242, 1)',
                      paddingHorizontal: 15
                    },
                    textInputContainer: {
                    backgroundColor: 'rgba(242, 242, 242, 1)',
                    // backgroundColor: '#ff0000',
                    width: '100%',
                    height: 52,
                    alignItems: 'center',
                    },
                    textInput: {
                      color: 'black',
                      fontFamily: 'Baloo-2-400',
                      fontSize: 13,
                      paddingHorizontal: 0,
                      // width: '20%',
                      marginRight: 15,
                      // backgroundColor: '#864e4e',
                      backgroundColor: 'rgba(242, 242, 242, 1)'
                    },
                    predefinedPlacesContainer: {
                      backgroundColor: '#f5f5f5',
                    },
                    predefinedPlace: {
                      color: 'black',
                    },
                    listView: {
                      backgroundColor: 'white',
                    },
                    description: {
                      color: 'gray',
                    },
                    row: {
                      backgroundColor: 'white',
                    },
                  }}
                  placeholder='Enter your House Address'
                    onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                        // console.log(data, details);
                        console.log(data.description);
                        setHouseAddress(data.description);
                    }}
                    query={ {
                        key: 'AIzaSyCXNV5E5xnGxDycQmLy2wHpUe7xyOGstdY',
                        language: 'en',
                        components: 'country:NG',
                        
                    }}
                />
          {/* </View> */}

          <Text style={styles.word}>Email</Text>
          <View style={styles.tInputView1}>
            <TextInput 
              placeholder='sabiride@gmail.com'
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
            style={styles.tInput}
            />
            <MaterialIcons name='verified' size={20}/>
          </View>

          <TouchableOpacity style={styles.blueBtn} onPress={() => {
            router.push('./map')
          }}>
                    <Text style={styles.blueText}>Done</Text>
                  </TouchableOpacity>

      <View>
        <Modal visible={modalVisible} animationType="none" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <MapView
        initialRegion={{ 
          latitude: Latitude,
          longitude: Longitude,
          latitudeDelta: 0.0012,
          longitudeDelta: 0.0008, 
          // latitudeDelta: 0.01,
          // longitudeDelta: 0.01, 
        }}
        
        mapType='hybrid'
        showsMyLocationButton={false}
        showsCompass={false}
        provider={PROVIDER_GOOGLE}
        region={region}
        showsUserLocation
        maxZoomLevel={19}
        pitchEnabled={false}
        showsBuildings = {true}
        onRegionChangeComplete={(e) => {
          // console.log(e)
          setRegion(e)
          setLatitude(e.latitude);
          setLongitude(e.longitude);
          handleSearch1()
        }}
        followsUserLocation={true}
        minDelta={0.001}
        style={{height: Dimensions.get('window').height - 300}}>

          {/* <Marker coordinate={region}  
        draggable={true}
        /> */}
        </MapView>

        <View style={{position: 'absolute', top: '43.5%', left: '50.3%'}}>
        <MaterialCommunityIcons name='crosshairs-gps' color={'#0088cd'} size={18}/>                 
        </View>

        <TouchableOpacity style={styles.modalBtn} 
        onPress={() => {
          console.log(address);
          closeModal()
        }}
        >
          <Text style={styles.modalText}>Set Location</Text>
          {/* <Text style={styles.modalText}>Latitude: {Latitude}, Longitude: {Longitude}</Text> */}
        </TouchableOpacity>
          <Text >{address}</Text>
            </View>
          </View>
        </Modal>
      </View>

    </ScrollView>
    </View>

  )
}

export default PersonalDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
        // paddingBottom: 30
    },
    imgSide: {
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'red'
    },
    img: {
        height: 143,
        width: 150,
        borderRadius: 20
    },
    text: {
        fontFamily: 'Baloo-2-500',
        fontSize: 14,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 10
    },
    input: {
        height: 40,
        width: '100%',
        fontFamily: 'Baloo-2-400',
        fontSize: 15,
      },
      TextInput: {
        backgroundColor: '#F2F2F2',
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 10,
        paddingHorizontal: 20
      },
      button: {
        backgroundColor: '#006ECD',
        width: '50%',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 25,
        marginBottom: 30
      },
      btnText: {
        color: '#fff',
        fontFamily: 'Baloo-2-500',
        fontSize: 18
      },
      btnside: {
        alignItems: 'center',
        marginTop: 30
      },
      editBtn: {
        position: 'absolute', 
        top: 122,
        backgroundColor: '#0088CD',
        padding: 5,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#fff',
        left: 130
    },
    tInput:{
      fontFamily: 'Baloo-2-400',
      fontSize: 13,
      width: '85%',
      // height: 50
      // backgroundColor: 'red'
    },
    tInputView: {
      backgroundColor: 'rgba(242, 242, 242, 1)',
      marginTop: 8,
      justifyContent: 'center',
      paddingLeft: 15,
      borderRadius: 20,
      height: 50,
      // alignItems: 'center'
    },
    tInputView1: {
      backgroundColor: 'rgba(242, 242, 242, 1)',
      marginTop: 8,
      height: 50,
      paddingLeft: 15,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    word: {
      fontFamily: 'Baloo-2-500',
      fontSize: 14,
      marginLeft: 15,
      marginTop: 15
    },
    blueBtn: {
      backgroundColor: '#0088CD',
      // width: '55%',
      width: 136,
      alignSelf: 'center',
      marginTop: 28,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      marginBottom: 30,
      height: 38
    },
    blueText: {
      color: 'white',
      fontFamily: 'Baloo-2-500',
      fontSize: 18
    },
    phoneInputContainer: {
      // borderWidth: 1,
      // borderColor: '#0088CD',
      width: '100%',
      borderRadius: 20,
      height: 50,
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'rgba(242, 242, 242, 1)',
      // backgroundColor: '#f40000',
    },
    textInputStyle: {
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      justifyContent: 'center',
      width: '50%',
      backgroundColor: 'rgba(242, 242, 242, 1)',
      marginLeft: 20,
      // backgroundColor: 'red'
    },
    tIStyle: {
      fontFamily: 'Baloo-2-400',
      fontSize: 13
    },
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center",
      // overflow: 'hidden'
    },
    modalContent: {
      backgroundColor: "#ffffff",
      borderRadius: 16,
      // marginHorizontal: 20,
      padding: 10,
      elevation: 5,
      width: Dimensions.get("window").width - 20,
      // justifyContent: 'center'
      // alignItems: 'center'
    },
    modalBtn: {
      backgroundColor: '#0088CD',
      width: 130,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 10,
      paddingVertical: 10,
      borderRadius: 20
    },
    modalText: {
      fontSize: 13,
      fontFamily: 'Baloo-2-500',
      color: 'white'
    }
})