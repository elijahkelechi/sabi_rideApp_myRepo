import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const Canceled = () => {

    const origin = {latitude: 9.033373, longitude: 7.486511}; 
    const destination = {latitude: 9.035974, longitude: 7.489370}; 

  return (
    <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.date}>28 December at 07:01 pm</Text>

    <View style={{
         shadowColor: "#000",
         shadowOffset: {
           width: 10,
           height: 10,
         },
         shadowOpacity: 0.51,
         shadowRadius: 13.16,
         elevation: 15,
         height: 250,
         marginHorizontal: 15,
         backgroundColor: '#fff'
    }}>
      <MapView
        initialRegion={{ 
            latitude: 9.033348,
            longitude: 7.486479,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01, 
        }}
        mapType="terrain"
        showsCompass={false}
        showsMyLocationButton={false}
        provider={PROVIDER_DEFAULT}
        showsUserLocation={false}
        followsUserLocation={false}
        style={{height: 250,}}>

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
    <Image source={require('./assets/sr car.png')} style={{ height: 40, width: 40 }} />
  </Marker>
        </MapView>
        </View>


        <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
            <View style={{alignItems: 'center', gap: 5}}>
                <Text style={styles.TOne}>Julius Berger</Text>
                <Text style={styles.Ttwo}>Start</Text>
                <Text style={styles.Tthree}>07:01 p.m</Text>
            </View>

            <View style={{flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flex: 1,
                paddingHorizontal: 13}}>

                <MaterialCommunityIcons name='stop-circle' color={'#e23d3d'}/>

                <View style={{ flex: 1}}>
                <LinearGradient 
                start={{x: 0.1, y: 0.5}}
                colors={['red', 'green']} 
                style={{height: 1,  }}/>
                    
                    </View>
                <MaterialCommunityIcons name='map-marker' color={'#32ba77'}/>
            </View>
          
            <View style={{alignItems: 'center', gap: 5, marginRight: 10}}>
                <Text style={styles.TOne}>Central Park</Text>
                <Text style={styles.Ttwo2}>Destination</Text>
                <Text style={styles.Tthree}>.....................</Text>
            </View>
           
        </View>

        <View>
            <Text style={{textAlign: 'center', fontFamily: 'Baloo-2-400', fontSize: 15, marginBottom: 40}}>
                ..............................
                </Text>
        </View>

        <Divider width={1}/>
            
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <Text style={styles.Tfour}>Payment Method</Text>
            <View style={{flexDirection: 'row', }}>
            <Text style={{fontFamily: 'Baloo-2-600', fontSize: 17, alignSelf: 'flex-end'}}>Cash</Text>
            </View>
        </View>
     
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
            <Text style={styles.Tfive}>Ride Fare</Text>
            <Text style={styles.Tsix}>NGN 3,000</Text>
        </View>
       
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 15}}>
            <Text style={styles.Tfive}>Commission</Text>
            <Text style={styles.Tsix}>NGN 100</Text>
        </View>

        <Divider width={1}/>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 30}}>
            <Text style={styles.Tseven}>Total Amount</Text>
            <Text style={styles.Teight}>NGN 3,000</Text>
        </View>
        </View>

</ScrollView>
    </View>
  )
}

export default Canceled

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        // paddingHorizontal: 15
    },
    date: {
        textAlign: 'center',
        fontFamily: 'Baloo-2-400',
        fontSize: 13,
        marginBottom: 15
    },
    TOne: {
        fontFamily: 'Baloo-2-500',
        fontSize: 16,
    },
    Ttwo: {
        fontFamily: 'Baloo-2-400',
        fontSize: 12,
        color: '#0FA958'
    },
    Ttwo2: {
        fontFamily: 'Baloo-2-400',
        fontSize: 12,
        color: '#e23d3d'
    },
    Tthree: {
        fontFamily: 'Baloo-2-400',
        fontSize: 13,
    },
    Tfour: {
        fontFamily: 'Baloo-2-500',
        fontSize: 18
    },
    Tfive: {
        fontFamily: 'Baloo-2-400',
        fontSize: 15
    },
    Tsix: {
        fontFamily: 'Baloo-2-400',
        fontSize: 17
    },
    Tseven: {
        fontFamily: 'Baloo-2-500',
        fontSize:  16
    },
    Teight: {
        fontFamily: 'Baloo-2-500',
        fontSize: 19
    }
})