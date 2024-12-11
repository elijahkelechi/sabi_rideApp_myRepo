import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const AnotherHeader = ({name, color, tColor, cColor, link}) => { 
  const {top} = useSafeAreaInsets();
  const router = useRouter();


  return (
    <View style={[styles.container, {paddingTop: top, backgroundColor: color}]}>
      <StatusBar  barStyle={'light-content'}/>
      <View style={styles.body}>
    
      <View>
      <Text style={[styles.headTitle, {color: tColor}]}>{name}</Text>
      </View>

      <View>
      <Link href={link} asChild>
        <TouchableOpacity style={styles.bacG}>
          <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
      </Link>
      </View>





      </View>
    </View>
  )
}

export default AnotherHeader

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    // paddingTop: 30
  },
  body: {
    marginTop: 30,
    // backgroundColor: 'red'
  },
  headTitle:{
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Baloo-2-600',
    fontSize: 24,
  },
bacG: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 25,
    position: "absolute",
    top: -40,
  }
})