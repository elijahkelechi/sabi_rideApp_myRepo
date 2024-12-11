import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { Avatar, Bubble, GiftedChat } from 'react-native-gifted-chat'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, useRouter } from 'expo-router';

export default function chatScreen() {
    const [messages, setMessages] = useState([])
    const {top} = useSafeAreaInsets();

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 2,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         quickReplies: {
//             type: 'checkbox', // or 'checkbox',
//             keepIt: true,
//             values: [
//               {
//                 title: '😋 Yes',
//                 value: 'yes',
//               },
//               {
//                 title: '📷 Yes, let me show you with a picture!',
//                 value: 'yes_picture',
//               },
//               {
//                 title: '😞 Nope. What?',
//                 value: 'no',
//               },
//             ],
//           },
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])
useEffect(() => {
    setMessages([
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://imgs.search.brave.com/KX0HcDQNOn0aTyGy8qKgcBI7ODartpAY9Jq2EYDhiS0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzUxL011aGFtbWFk/dV9CdWhhcmksX1By/ZXNpZGVudF9vZl90/aGVfRmVkZXJhbF9S/ZXB1YmxpY19vZl9O/aWdlcmlhXyhjcm9w/cGVkMykuanBn',
            },
        },
    ])
}, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])
  const router = useRouter();
  return (
//     <GiftedChat
//     isTyping={true}
//     renderAvatarOnTop={true}
//     messages={messages}
//     onSend={messages => onSend(messages)}
//     user={{
//       _id: 1,
//     }}
//   />
<View style={[styles.container, {paddingTop: top}]}> 
  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10, marginBottom: 10,
     borderBottomWidth: 1, borderColor: '#eaeaea',
     alignItems: 'center'
  }}>
    <Link href={'./StartTrip'} asChild>
    <TouchableOpacity >
      <Text style={styles.cancel}>Cancel</Text>
    </TouchableOpacity>
    </Link>
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.name}>Grace  Mia</Text>
      <Text style={styles.number}>+234 8077048651</Text>
    </View>
    <Link href={'./VoiceCall'} asChild>
    <TouchableOpacity>
      <MaterialCommunityIcons name='phone' size={28}/>
    </TouchableOpacity>
    </Link>
  </View>
<GiftedChat
// renderUsername={() => {
//     return <Text style={{ color: '#000000' }}>React Native</Text>;
// }}
// renderBubble={()=> {
//     return (
//     <Bubble 
//     containerStyle={{
//         right: {
//         backgroundColor: '#f10e0e',
//     },
//     left: {
//         backgroundColor: '#6f00ff',
//         },
// }}
//     textStyle={{
//         right: {
//             color: '#003cff',
//             },
//             left: {
//                 color: '#ff00aa',
//                 },
                
//     }}
//     tickStyle={{
//         right: {
//             backgroundColor: '#f10e0e',
//             },
//             left: {
//                 backgroundColor: '#6f00ff',
//                 },

//     }}
// />
//     )
// }}
// renderUsernameOnMessage={true}
showUserAvatar
messagesContainerStyle={{backgroundColor: '#ffffff'}}
scrollToBottom 
scrollToBottomStyle={{backgroundColor: '#ffffff'}}
placeholder='Send Message'
isTyping={true}
messages={messages}
showAvatarForEveryMessage={true}
renderAvatarOnTop={true}
onSend={messages => onSend(messages)}
user={{
    _id: 1,
    name: 'Abk',
    avatar: 'https://imgs.search.brave.com/2mJJF0i_C39DadKCz2gjjKiDyP2Ku4Tlq86NM907_I0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc3L0JvbGFfVGlu/dWJ1X3BvcnRyYWl0/LmpwZw',
  }}
/>
</View>

  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    cancel: {
      color: '#0088CD',
      fontFamily: 'Baloo-2-400',
      fontSize: 18
    },
    name: {
        fontFamily: 'Baloo-2-600',
        fontSize: 26,
        textAlign: 'center'
    },
    number: {
      fontFamily: 'Baloo-2-400',
      fontSize: 16,
      textAlign: 'center'
    }
})