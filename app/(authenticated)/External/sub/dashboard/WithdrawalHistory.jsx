import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Structure from './structure';
import Structure from './WStructure';



const {width, height} = Dimensions.get('window')
const WithdrawalHistory = () => {


  return (
    <View style={styles.container}>
        <View style={styles.head}>

        </View>
<ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.headerStyle}>

    <View style={styles.main}>
<View style={{ width: '100%', paddingHorizontal: 15, }}>
<View style={styles.one}>


    </View>

    {/* Second */}
    <View style={styles.oneD}>

        <Text style={styles.BText}>Withdrawal History</Text>

        <Structure datime={'14/06/2021, 14:24 AM'} amount={'25,000'}/>
        <Structure datime={'24/05/2021, 22:30 AM'} amount={'75,700'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'1,500'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'30,000'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'40,000'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'120,000'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'250,000'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'103,000'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'230,000'}/>
        <Structure datime={'11/04/2021, 16:20 AM'} amount={'15,500'}/>
    </View>

    
  
</View>
</View>

    </View>
    </ScrollView>
    </View>
  )
}

export default WithdrawalHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 15
        backgroundColor: '#F5FCFF',
    },
    BText: {
        fontFamily: 'Baloo-2-500',
        fontSize: 19,
        marginLeft: 10,
        marginTop: 20
    },
    main: {
        // paddingHorizontal: 15,
        flex: 1,
        // backgroundColor: 'red',
        marginTop: 10,
        paddingTop: 0,
        // top: -110
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
        paddingVertical: 25,
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

