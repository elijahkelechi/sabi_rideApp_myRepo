import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useCallback} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router';
import { AirbnbRating } from '@rneui/themed';




export default function CompletedRide() {
  const router = useRouter()
//   const [rating, setRating] = useState(0);
  
//   const handleChange = useCallback(
//     (value) => setRating(Math.round((rating + value) * 5) / 10),
//     [rating],
//   );

//   console.log(rating)
//     ratingCompleted(rating) {
//     console.log("Rating is: " + rating);
//   }

// const ratingCompleted = (rating) => {
//     console.log(rating)
// }
const ratingCompleted = (rating) => {
  console.log('Rating is: ' + rating);
};

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>

    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.one}>The fare was</Text>
        <Text style={styles.two}>$30</Text>
        <Text style={styles.one}>August 26, 2023 at 04:56 p.m.</Text>
      </View>
      <View style={styles.mid}>
        <Image source={require('./assets/76.png')} style={styles.img}/>

        <View style={styles.check}>
          <MaterialCommunityIcons name='check-circle' color={'#32BA77'} size={43}/>
          </View>

          <Text style={styles.name}>Renfred Oi.</Text>
          <Text style={styles.rate}>Rate your Passanger</Text>

          <View style={styles.root}>
            
            <AirbnbRating
            size={25}
            onFinishRating={ratingCompleted}
            // reviewSize={20}
            // reviews={[
            //   'Terrible',
            //   'Bad',
            //   'Okay',
            //   'Good',
            //   'Excellent',
            // ]}
            showRating={false}
            reviewColor='#0088cd'
            selectedColor='#0088cd'/>
    </View>
  </View>
<View style={styles.tInp}>
  
      <TextInput 
      placeholder='Type Message Here'
      style={styles.TextInput}
      multiline
      />
      </View>

<View style={styles.down}>
    <Link href={"/(authenticated)/(tabs)/map"} asChild >
      <TouchableOpacity 
      style={styles.btn}>
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    </Link>
</View>
    </View>
  </ScrollView>
  

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // alignItems: 'center',
  },
  top: {
    alignItems: 'center',
    // gap: ,
    borderBottomWidth: 1,
    borderBottomColor: '#64AFD5',
    paddingBottom: 15,
  },
  mid: {
    alignItems: 'center',
    // gap: 20,
    paddingBottom: 30,
    paddingTop: 17
  },
  img: {
    width: 135,
    height: 135,
    borderRadius: 100,
  },
  // root: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  text: {
    fontSize: 17,
    marginTop: 20,
  },
  TextInput: {
    height: 40,
    width: '100%',
    // backgroundColor: 'red',
    fontFamily: 'Baloo-2-400',
    fontSize: 18,
    lineHeight: 15
    // flex: 1
  },
  tInp: {
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 20,
    // minHeight: 130,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width:'80%',
    alignSelf: 'center',
    // height: 120
  },
  check: {
    position: 'absolute',
    top: 20,
    left: '58%',
    backgroundColor: '#fff',
    borderRadius: 100
  },
  down: {
    alignItems: 'center',
    marginTop: 35
  },
  btn: {
    backgroundColor: '#0088CD',
    // paddingVertical: 15,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 30,
    height: 46,
  },
  one: {
    fontFamily: 'Baloo-2-400',
    fontSize: 16
  },
  two: {
    fontFamily: 'Baloo-2-500',
    fontSize: 30
  },
  name: {
    fontFamily: 'Baloo-2-600',
    fontSize: 24,
    marginTop: 5
  }, 
  rate: {
    fontFamily: 'Baloo-2-400',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Baloo-2-500',
    fontSize: 18
  }
  
})