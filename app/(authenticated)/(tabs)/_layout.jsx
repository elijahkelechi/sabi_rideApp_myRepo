import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomHeader from '../../../components/CustomHeader';
import AnotherHeader from '../../../components/AnotherHeader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Layout = () => {
  return (
    <GestureHandlerRootView>

<Tabs screenOptions={{
      tabBarActiveTintColor: "#0088CD",
      tabBarInactiveTintColor: "grey",
      tabBarStyle: {
        height: 75,
        paddingBottom: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // overflow: 'hidden'
        position: 'absolute',
      },
    }}>
        <Tabs.Screen
          name='map'
          options={{
            title: ({color}) => (<Text style={{fontFamily: 'Baloo-2-600', fontSize: 10, color: color}}>Map</Text>),
            tabBarIcon: ({color, focused}) => (
              <MaterialCommunityIcons name={focused ? "map-marker" : "map-marker-outline"} size={25} color={color} style={{marginBottom: -5}} />            
              ),
              headerShown: false
          }}
        />

        <Tabs.Screen
          name='searchRequest'
          options={{
            title: ({color}) => (<Text style={{fontFamily: 'Baloo-2-600', fontSize: 10, color: color}}>Search Request</Text>),
            tabBarIcon: ({color, focused}) => (
              <MaterialCommunityIcons name={focused ? "account-search" : "account-search-outline"} size={25} color={color} style={{marginBottom: -5}} />            
              ),
              header: () => <CustomHeader name={'Available Request'} color={'#ffffff'} tColor={'#000000'} cColor={'#0088CD'}/>,
              tabBarStyle: {display: 'none'}
          }}
        />

        <Tabs.Screen
          name='dashboard'
          options={{
            title: ({color}) => (<Text style={{fontFamily: 'Baloo-2-600', fontSize: 10, color: color}}>Dashboard</Text>),
            tabBarIcon: ({color, focused}) => (
              <MaterialCommunityIcons name={focused ? "view-grid" : "view-grid-outline"} size={25} color={color} style={{marginBottom: -5}}/>            
              ),
              header: () => <CustomHeader name={'Dashboard'} color={'#0088CD'} tColor={'#ffffff'} cColor={'#ffffff'}/>,
              // headerTransparent: true
          }}
        />

        <Tabs.Screen
          name='ratings'
          options={{
            title: ({color}) => (<Text style={{fontFamily: 'Baloo-2-600', fontSize: 10, color: color}}>Ratings</Text>),
            tabBarIcon: ({color, focused}) => (
              <MaterialCommunityIcons name={focused ? "star" : "star-outline"} size={25} color={color} style={{marginBottom: -5}} />            
              ),
              header: () => <CustomHeader name={'Ratings'} color={'#0088CD'} tColor={'#ffffff'} cColor={'#ffffff'}/>,
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            title: ({color}) => (<Text style={{fontFamily: 'Baloo-2-600', fontSize: 10, color: color}}>Profile</Text>),
            tabBarIcon: ({color, focused}) => (
              <MaterialCommunityIcons name={focused ? "account-circle" : "account-circle-outline"} size={25} color={color} style={{marginBottom: -5}} />            
              ),
              header: () => <CustomHeader name={'Personal Details'} color={'#ffffff'} tColor={'#000000'} cColor={'#ffffff'} barColor={'#ffffff'}/>,
              tabBarStyle: {display: 'none'}
          }}
        />


        
    </Tabs>
    </GestureHandlerRootView>

  )
}

export default Layout

const styles = StyleSheet.create({})