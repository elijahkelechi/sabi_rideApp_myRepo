import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Linking from 'expo-linking';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function VoiceCall() {

  const router = useRouter();

  const [callStatus, setCallStatus] = useState('Calling...');
  const [one, setOne] = useState('#0088cd');
  const [two, setTwo] = useState('#0088cd');

  useEffect(() => {
  setTimeout(() => {
    setCallStatus('Ringing..')
  }, 3000);
    
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.up}>
      <Image 
      style={styles.img}
      source={require('../../assets/9.jpg')}/>

      <Text style={styles.name}>Renfred Tisan</Text>

      <Text style={styles.callStatus}>{callStatus}</Text>
      </View>


    <View style={styles.mainBottom}>
      <View style={styles.bottom}>

      <TouchableOpacity 
        onPress={() => {
          setTwo( two == '#0088cd' ? '#166186' : '#0088cd')
        }}        
        style={[styles.btn, {backgroundColor: two}]}>
          <MaterialCommunityIcons name='volume-high' size={25} color={'#fff'}/>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => {
          setOne( one == '#0088cd' ? '#166186' : '#0088cd')
        }}
        style={[styles.btn, {backgroundColor: one}]}>
          <MaterialCommunityIcons name='microphone-off' size={25} color={'#fff'}/>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => {
          router.back()
        }}
        style={styles.hangUp}>
          <MaterialCommunityIcons name='phone-hangup' size={25} color={'#fff'}/>
        </TouchableOpacity>
      </View>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d4b5a',
        paddingTop: 70,
    },
    img: {
      width: 120,
      height: 120,
      borderRadius: 100
    },
    name: {
      fontFamily: 'Baloo-2-500',
      fontSize: 25,
      marginTop: 15,
      color: '#fff'
    },
    callStatus: {
      fontFamily: 'Baloo-2-400',
      fontSize: 16,
      color: '#fff'
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#0088cd',
      width: '100%',
      paddingVertical: 28,
      paddingHorizontal: 40,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    mainBottom: {
      flex: 1,
      // backgroundColor: '#ffffff',
      justifyContent: 'flex-end'
    },
    up: {
      paddingHorizontal: 15,
      alignItems: 'center',
    },
    hangUp: {
      width: 50, 
      height: 50, 
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50
    },
    btn: {
      width: 50, 
      height: 50, 
      // backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50
    },
})