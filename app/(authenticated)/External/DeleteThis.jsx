import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, StatusBar} from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';



const {width, height} = Dimensions.get('window')
const Profiles = () => {

      const router = useRouter();


  return (
    <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
        <View style={styles.head}>

        </View>
<ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.headerStyle}>

    <View style={styles.main}>
<View style={{ width: '100%', paddingHorizontal: 15, }}>
<View style={styles.one}>

        <View style={[styles.border3, {paddingLeft: 15, paddingRight: 20}]}>
        <View style={{flexDirection: 'row', marginTop: 15,  justifyContent: 'space-between', marginBottom: 15}}>
            <View style={{flexDirection: 'row',  alignItems: 'center'}}>
            <Image source={require('./assets/76.png')} style={{ width: 56, height: 56, borderRadius: 50 }} />
            <View style={{paddingLeft: 18}}>
                {/* <Link href={'../External/PersonalDetails'}> */}
                <Text style={styles.Name}>Devaan Adewale</Text>
                {/* </Link> */}
                <Text style={styles.sabiDriver}>Sabi Driver</Text>
            </View>
            </View>
            <View>
                <Link href={'../External/PersonalDetails'} asChild>
              <TouchableOpacity style={styles.editBody} >
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
                </Link>
            </View>
        </View>


        </View>

    </View>

    {/* Second */}
    <View style={styles.oneD}>

        <View style={styles.border1}>
            <View>
    <MaterialCommunityIcons name="phone-outline" size={24} color="#0088CD" />
            </View>
            <View style={{ paddingLeft: 15}}>
        <Text style={styles.heading}>+234 807 704 8651</Text>
            </View>
        </View>

        <View style={styles.border1}>
            <View>
    <MaterialCommunityIcons name="email-outline" size={24} color="#0088CD" />
            </View>
            <View style={{ paddingLeft: 15}}>
        <Text style={styles.heading}>Info.millihub@gmail.com </Text>
            </View>
        </View>

        <View style={styles.border1}>
            <View>
    <MaterialCommunityIcons name="map-marker-outline" size={24} color="#0088CD" />
            </View>
            <View style={{ paddingLeft: 15}}>
        <Text style={styles.heading}>Block 8 Agric Quarters Kaduna</Text>
            </View>
        </View>

        <View style={styles.border1}>
            <View>
    <MaterialCommunityIcons name="credit-card-outline" size={24} color="#0088CD" />
            </View>
            <View style={{ paddingLeft: 15}}>
        <Text style={styles.heading}>Kuda MFB 2677364829</Text>
            </View>
        </View>
    </View>

    
  
</View>
</View>

    </View>
    </ScrollView>
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 15
        backgroundColor: '#F5FCFF',
    },
    head: {
        backgroundColor: '#0088CD',
        height: height*0.11,
        width: width,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        // paddingHorizontal: 15,
        // zIndex: 1,
        position: 'absolute'

    },
    headerStyle: {
        height: '100%',
        // width: width,
    },
    main: {
        // paddingHorizontal: 15,
        flex: 1,
        // backgroundColor: 'red',
        marginTop: 10,
        paddingTop: 0,
        // top: -110
    },
    one:{
        width: '100%',
        backgroundColor: '#FDFDFD',
        borderRadius: 25,
        shadowColor: '#7088D2',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
        marginBottom: 25,
      },
      oneD:{
        paddingHorizontal: 16,
        width: '100%',
        // height: height,
        backgroundColor: '#FDFDFD',
        borderRadius: 25,
        shadowColor: "#7088D2",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 30,
        marginBottom: 45,
        paddingVertical: 15
    },
    today: {
        fontSize: 18,
        fontFamily: 'Baloo-2-500',
        textAlign: 'center'
    },
    Name: {
        fontSize: 18,
        fontFamily: 'Baloo-2-500',
        color: '#2D3142'
    },
    sabiDriver: {
        fontSize: 14,
        fontFamily: 'Baloo-2-400',
        color: '#4C5980',
    },
    otHeader: {
        fontSize: 18,
        fontFamily: 'Baloo-2-500',
    },
    prevTrip: {
        fontSize: 18,
        fontFamily: 'Baloo-2-500',
        marginLeft: 15
    },
    heading: {
        fontSize: 18,
        fontFamily: 'Baloo-2-400',
        color: '#2D3142'
    },
    payH: {
        fontSize: 18,
        fontFamily: 'Baloo-2-500',
    },
    todayP: {
        fontSize: 24,
        fontFamily: 'Baloo-2-700',
        textAlign: 'center',
        color: '#0088CD'
    },
    sub: {
        fontSize: 9,
        fontFamily: 'Baloo-2-400',
        // textAlign: 'center',
        color: '#888787'
    },
    border1: {
        borderBottomWidth: 1,
        borderBottomColor: '#E9EEF8',
        paddingVertical: 18,
        flexDirection: 'row',
        paddingHorizontal: 10,
        // justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    edit: {
        textAlign: 'center',
        color: '#0088CD',
        fontFamily: 'Baloo-2-500',
        fontSize: 14
    },
    editBody: {
        backgroundColor: '#EFFAFF',
        // marginRight: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#E9EEF8',
        paddingVertical: 12
    },
    border3: {
        borderBottomWidth: 1,
        borderBottomColor: '#E9EEF8',
        paddingBottom: 12,
        paddingTop: 15
    },
    oneTwo: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        alignItems: 'center'
    },
    ride:{
        fontSize: 14,
        fontFamily: 'Baloo-2-500',
        color: '#2D3142'
    },
    timeOnline:{
        fontFamily: 'Baloo-2-500',
        fontSize: 15,
        color: '#888787',
        textAlign: 'center'
    },
  



})

