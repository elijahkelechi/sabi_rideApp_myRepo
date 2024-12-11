import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Canceled = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View>
        <Text style={styles.month}>January 2024</Text>
      </View>

        {/* start */}
    <View style={{borderBottomWidth: 2, borderColor: '#99989855', paddingBottom: 10 }}> 
      <View style={[styles.one, {marginTop: 15}]}>

          <Text style={styles.start}>Mando, Kaduna </Text>
          <Text style={[styles.start, {marginHorizontal: -20}]}>{'------>'}</Text>
          <Text style={styles.destination}>Central Market, Kaduna</Text>
          <Text style={styles.price}>NGN 0</Text>

        </View>

        <View style={styles.one}>
            <Text style={styles.startText}>Start</Text>
            <Text style={styles.time}>--</Text>
            <Text style={styles.destText}>Destination</Text>
            <Text style={styles.date}>28 January at 04:34 a.m.</Text>
        </View>

        </View>

        <View>
        <Text style={styles.month}>December 2023</Text>
      </View>

        {/* start */}
    <View style={{borderBottomWidth: 2, borderColor: '#99989855', paddingBottom: 10 }}> 
      <View style={[styles.one, {marginTop: 15}]}>

          <Text style={styles.start}>Julius Berger</Text>
          <Text style={[styles.start, {marginHorizontal: -20}]}>{'------>'}</Text>
          <Text style={styles.destination}>Central Park</Text>
          <Text style={styles.price}>NGN 0</Text>

        </View>

        <View style={styles.one}>
            <Text style={styles.startText}>Start</Text>
            <Text style={styles.time}>--</Text>
            <Text style={styles.destText}>Destination</Text>
            <Text style={styles.date}>28 December at 07:01 p.m.</Text>
        </View>

        </View>

                {/* start */}
    <View style={{borderBottomWidth: 2, borderColor: '#99989855', paddingBottom: 10 }}> 

      <View style={[styles.one, {marginTop: 15}]}>

          <Text style={styles.start}>Maitama</Text>
          <Text style={[styles.start, {marginHorizontal: -20}]}>{'------>'}</Text>
          <Text style={styles.destination}>MagicLand, Amuseme...</Text>
          <Text style={styles.price}>NGN 0</Text>

        </View>

        <View style={styles.one}>
            <Text style={styles.startText}>Start</Text>
            <Text style={styles.time}>--</Text>
            <Text style={styles.destText}>Destination</Text>
            <Text style={styles.date}>11 December at 07:34 p.m.</Text>
        </View>

        </View>
        </ScrollView>

    </View>
  )
}

export default Canceled

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    // gap: 20
  },
  one:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'baseline',
    // backgroundColor: 'red'
  }, 
  month: {
    fontFamily: 'Baloo-2-500',
    fontSize: 17,
    color: '#151513', 
    marginBottom: 10,
    marginTop: 25
  },
  start: {
    fontFamily: 'Baloo-2-400',
    fontSize: 12,
    color: '#151513'
  },
  destination:{
    fontFamily: "Baloo-2-500",
    fontSize: 12
  },
  price: {
    fontFamily: 'Baloo-2-500',
    fontSize: 15,
    color: ' #000000',
    // marginLeft: 18
  },
  startText: {
    color: '#0FA958',
    fontFamily: 'Baloo-2-400',
    fontSize: 10
  },
  time: {
    fontFamily: 'Baloo-2-400',
    fontSize: 14,
    color: '#9F9F9F'
  },
  destText: {
    color: '#E23D3D',
    fontFamily: 'Baloo-2-400',
    fontSize: 10
  },
  date: {
    fontFamily: 'Baloo-2-400',
    fontSize: 10,
    color: '#333333'
  },
})