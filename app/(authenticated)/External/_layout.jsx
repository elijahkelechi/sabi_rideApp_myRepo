import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

// import CustomHeader from '../../../components/CustomHeader';
import AnotherHeader from "../../../components/AnotherHeader";
import BackHeader from "../../../components/BackHeader";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="PersonalDetails"
        options={{
          header: () => (
            <AnotherHeader
              name={"Personal Details"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/Profile"}
            />
          ),
        }}
      />

      {/* <Stack.Screen
        name="Ewallet"
        component={EWallet}
        options={{
          title: ({ color }) => (
            <Text
              style={{ fontFamily: "Baloo-2-600", fontSize: 10, color: color }}
            >
              Wallet
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account-circle" : "account-circle-outline"}
              size={25}
              color={color}
              style={{ marginBottom: -5 }}
            />
          ),
          header: () => (
            <CustomHeader
              name={"Personal Details"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              barColor={"#ffffff"}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      /> */}
      <Stack.Screen
        name="ActionSheet"
        options={{
          headerShown: false,
          //   header: () => <AnotherHeader name={'Action Sheet'} color={'#ffffff'}
          //   tColor={'#000000'}
          //   cColor={'#ffffff'}
          //   link={'/(authenticated)/(tabs)/profile'}/>,
        }}
      />

      <Stack.Screen
        name="FAQ"
        options={{
          header: () => (
            <AnotherHeader
              name={"F.A.Q's"}
              color={"#fff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/Profile"}
            />
          ),
        }}
      />

      <Stack.Screen name="sub/dashboard/WStructure" />

      <Stack.Screen
        name="sub/dashboard/WithdrawalHistory"
        options={{
          header: () => (
            <AnotherHeader
              name={"Withdrawal History"}
              color={"#0088CD"}
              tColor={"#ffffff"}
              cColor={"#ffffff"}
              link={"/(authenticated)/(tabs)/dashboard"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="sub/profile/EditProfile"
        options={{
          header: () => (
            <AnotherHeader
              name={"Edit Profile"}
              color={"#0088CD"}
              tColor={"#ffffff"}
              cColor={"#ffffff"}
              link={"/(authenticated)/(tabs)/profile"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="sub/payment"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="sub/chatScreen/ChatScreen"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="sub/chatScreen/VoiceCall"
        options={{
          // header: () => <AnotherHeader name={'Voice Call'} color={'#ffffff'}
          // tColor={'#000000'}
          // cColor={'#ffffff'}
          // link={'/(authenticated)/External/sub/chatScreen/ChatScreen'}/>,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="sub/map/ChatScreen"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="sub/map/VoiceCall"
        options={{
          // header: () => <AnotherHeader name={'Voice Call'} color={'#ffffff'}
          // tColor={'#000000'}
          // cColor={'#ffffff'}
          // link={'/(authenticated)/External/sub/map/ChatScreen'}/>,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="sub/map/CompletedRide"
        options={{
          header: () => (
            <AnotherHeader
              name={"Completed Ride"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/(tabs)/map"}
            />
          ),
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="sub/menu/TripHistory"
        options={{
          header: () => (
            <AnotherHeader
              name={"Order History"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/Profile"}
            />
          ),
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="sub/menu/Completed"
        options={{
          header: () => (
            <AnotherHeader
              name={"Ride Details"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/TripHistory"}
            />
          ),
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="sub/menu/Canceled"
        options={{
          header: () => (
            <AnotherHeader
              name={"Ride Details"}
              color={"#ffffff"}
              tColor={"#000000"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/TripHistory"}
            />
          ),
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="sub/profile/EditPayment"
        options={{
          header: () => (
            <AnotherHeader
              name={"Edit Payment"}
              color={"#0088CD"}
              tColor={"#ffffff"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/Profile"}
            />
          ),
        }}
      />

      {/* <Stack.Screen name='sub/profile/PersonalDetails' options={{
          header: () => <AnotherHeader name={'Personal Details'} color={'#ffffff'} 
          tColor={'#000000'} 
          cColor={'#ffffff'} 
          link={'/(authenticated)/(tabs)/profile'}/>,
          }}/> */}

      <Stack.Screen name="sub/chatScreen/keepThis" options={{}} />

      <Stack.Screen
        name="sub/menu/menu"
        options={{
          header: () => (
            <AnotherHeader
              name={"Menu"}
              color={"#0088CD"}
              tColor={"#ffffff"}
              cColor={"#ffffff"}
              link={"/(authenticated)/(tabs)/map"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="sub/menu/Profile"
        options={{
          header: () => (
            <AnotherHeader
              name={"Menu"}
              color={"#0088CD"}
              tColor={"#ffffff"}
              cColor={"#ffffff"}
              link={"/(authenticated)/(tabs)/map"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="sub/menu/notification/notification"
        options={{
          header: () => (
            <AnotherHeader
              name={"Notifications"}
              color={"#0088CD"}
              tColor={"#ffffff"}
              cColor={"#ffffff"}
              link={"/(authenticated)/External/sub/menu/Profile"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="sub/map/StartTrip"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="sub/SearchRequest/SRtwo" />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
