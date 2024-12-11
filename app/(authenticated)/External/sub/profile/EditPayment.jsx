import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';



const {width, height} = Dimensions.get('window')
const EditPayment = () => {


  return (
    <View style={styles.container}>
        <View style={styles.head}>

        </View>
<ScrollView > 
    {/* <View style={styles.headerStyle}> */}

    {/* <View style={styles.main}> */}
<View style={{ width: '100%',  }}>

        <View style={styles.border3}>
            <View 
            style={{backgroundColor: '#0088cd', borderRadius: 18}}>
            <Image source={require('./assets/card pattern.png')} style={{ width: 253, height: 124, borderRadius: 18, opacity: 0.25 }} />

            <View style={{position: 'absolute', alignSelf: 'flex-end', right: 20, top: 20}}>
            <Image source={require('./assets/mc.png')} style={{ width: 47, height: 38, }} />
            </View>
            <View style={{position: 'absolute', top: '45%', left: 20}}>
                <Text style={{fontFamily: 'Baloo-2-700', fontSize: 18, color: '#fff'}}>Jesse Leonard</Text>
                <Text style={{fontFamily: 'Baloo-2-500', fontSize: 15, color: '#fff'}}>1234 5678 9903</Text>
            </View>
            </View>

        </View>


    {/* Second */}
    <View style={styles.oneD}>

    <View style={[styles.border1, {paddingTop: 60}]}>
            <View style={{ flex: 1}}>
        <Text style={styles.heading}>Account Name</Text>
        <View style={styles.tInput}>
        <TextInput style={styles.tInputView} 
        numberOfLines={1}
        placeholder='Account Name' 
        value='Jesse Leonard'/>
        </View>
            </View>
        </View>
    <View style={[styles.border1, ]}>
            <View style={{flex: 1}}>
        <Text style={styles.heading}>Account Number</Text>
        <View style={styles.tInput}>
        <TextInput style={styles.tInputView} 
        numberOfLines={1}
        placeholder='Account Name' 
        value='2332568654'/>
        </View> 
           </View>
        </View>
    <View style={[styles.border1, ]}>
            <View style={{flex: 1}}>
        <Text style={styles.heading}>Bank Name</Text>
        <View style={styles.tInput}>
        <TextInput style={styles.tInputView} 
        numberOfLines={1}
        placeholder='Account Name' 
        value='Kuda Microfinance bank'/>
        </View>
            </View>
        </View>

        <View>
          <Link href={'../menu/Profile'} asChild>
            <TouchableOpacity style={styles.button}><Text style={styles.done}>Done</Text></TouchableOpacity>
          </Link>
        </View>
    </View>

    
  
</View>
{/* </View> */}

    {/* </View> */}
    </ScrollView>
    </View>
  )
}

export default EditPayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 15
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#0088cd',
        borderRadius: 30,
        marginTop: 50,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        alignSelf: 'center'
        
    },
    done:{
        color: 'white',
        fontFamily: 'Baloo-2-500',
        fontSize: 18,
        textAlign: 'center'
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
        width: width,
        backgroundColor: 'red'
    },
    main: {
        // paddingHorizontal: 15,
        flex: 1,
        // height: '100%',
        backgroundColor: '#ff00000ffff',
        // marginTop: 10,
        paddingTop: 0,
        // top: -110
    },
    one:{
        width: '100%',
        backgroundColor: '#c800000',
        marginTop: 100
      },
    oneD:{
        paddingHorizontal: 16,
        // width: '100%',
        // height: height*0.655,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        shadowColor: "#7088D2",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 30,
        marginBottom: 50,
        paddingVertical: 15,
        marginTop: height*0.11 + 20,
        // flex: 1
        height: '100%'
        // position: 'absolute',
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
        fontSize: 14,
        fontFamily: 'Baloo-2-500',
        color: '#2D3142',
        paddingLeft: 16
    },
    sub: {
        fontSize: 18,
        fontFamily: 'Baloo-2-400',
        color: '#2D3142',
        marginTop: 22
    },
    border1: {
        // paddingVertical: 18,
        paddingTop: 15,
        flexDirection: 'row',
        // paddingHorizontal: 10,
        alignItems: 'center'
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 17,
        alignItems: 'center',
        // zIndex: 20,
        position: 'absolute',
        top: '70%',
        left: '55%'
        
    },
    editBody1: {
        backgroundColor: '#EFFAFF',
        // marginRight: 20,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 17,
        alignItems: 'center',
        // zIndex: 20,
        
    },
    border: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#E9EEF8',
        paddingVertical: 12
    },
    border3: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        alignSelf: 'center'
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
    tInput:{
        width: '100%',
        // backgroundColor: 'red'
        backgroundColor: 'rgba(242, 242, 242, 1)',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 12
      },
      tInputView: {
        // marginTop: 8,
        // paddingVertical: 6,
        paddingLeft: 15,
        fontFamily: 'Baloo-2-400',
        fontSize: 13
      },
})

