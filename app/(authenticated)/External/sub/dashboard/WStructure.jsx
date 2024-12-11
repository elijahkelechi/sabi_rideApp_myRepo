import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const {width, height} = Dimensions.get('window')
    export default function Structure({datime, amount}) {

  return (
    <View style={styles.border1}>
    <View style={{justifyContent: 'center'}}>
<MaterialCommunityIcons name="square-rounded" size={16} color="#1F87FE" />
    </View>
 
    <View style={{flexDirection: 'row', width: '90%',  paddingRight: 2}}>

    <View style={{ paddingLeft: 9}}>
<Text style={styles.heading}>{datime}</Text>
    </View>
    <View style={{flexDirection: 'row', flex: 1}}></View>
        <Text style={styles.withdrawal}>₦ {amount}</Text>
    </View>
</View>

  )
}


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
    withdrawal: {
        fontFamily: 'Rubik-2-500',
        fontSize: 16,
        color: '#219653'
    },
    headerStyle: {
        height: '100%',
        width: width,
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
        fontSize: 16,
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
        backgroundColor: '#ffffff'
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

