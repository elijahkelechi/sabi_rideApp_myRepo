import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Tab, TabView } from "@rneui/themed";
import { Link } from "expo-router";
import { customFetch } from "../../../../utils";
import { useSelector } from "react-redux";

const TripHistory = () => {
  const [trips, setTrips] = useState([]);
  const [index, setIndex] = useState(0);
  const [Tcolor, setTcolor] = useState("#0088cd");

  const accessToken = useSelector((state) => state.user.tokens?.access_token);

  useEffect(() => {
    // Fetch trip history on component mount
    const fetchTrips = async () => {
      if (!accessToken) {
        Alert.alert("no access token");
      }
      try {
        const response = await customFetch.get("/trips/history/", {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Bearer token here
          },
        });
        setTrips(response.data); // if API returns an array of trips
      } catch (error) {
        console.error("Failed to fetch trip history:", error);
      }
    };

    fetchTrips();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const renderTrips = (tripsToRender) =>
    tripsToRender.map((trip, idx) => (
      <Link key={idx} href={"./Completed"} asChild>
        <TouchableOpacity
          style={{
            borderBottomWidth: 2,
            borderColor: "#99989855",
            paddingBottom: 10,
          }}
        >
          <View style={[styles.one, { marginTop: 15 }]}>
            <View style={styles.deets1}>
              <Text style={styles.start}>{trip.origin}</Text>
              <Text style={styles.start}>{"---->"}</Text>
              <Text style={styles.destination}>{trip.destination}</Text>
            </View>
            <View style={styles.deets2}>
              <Text style={styles.price}>NGN {trip.price || "0"}</Text>
            </View>
          </View>

          <View style={styles.one}>
            <View style={styles.deets3}>
              <Text style={styles.startText}>Start</Text>
              <Text style={styles.time}>
                {trip.time_taken || "--"} {/* Placeholder if not available */}
              </Text>
              <Text style={styles.destText}>Destination</Text>
            </View>
            <View style={styles.deets4}>
              <Text style={styles.date}>{formatDate(trip.start_on)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    ));

  const Completed = () => (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrips(
          trips.filter((trip) => trip.ride_progress === "completed")
        )}
      </ScrollView>
    </View>
  );

  const Canceled = () => (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrips(trips.filter((trip) => trip.ride_progress === "canceled"))}
      </ScrollView>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <Tab
        onChange={(e) => {
          setIndex(e);
          setTcolor(Tcolor === "#0088cd" ? "#e23d3d" : "#0088cd");
        }}
        indicatorStyle={{
          backgroundColor: Tcolor,
          height: 3,
        }}
        containerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: "#9998988d",
        }}
        value={index}
      >
        <Tab.Item
          title="Completed"
          titleStyle={{
            fontSize: 17,
            color: "#0088cd",
            fontFamily: "Baloo-2-500",
          }}
          containerStyle={{
            backgroundColor: "#ffffff",
            borderRightWidth: 1.5,
            borderRightColor: "#9998988d",
          }}
        />
        <Tab.Item
          title="Canceled"
          titleStyle={{
            fontSize: 17,
            color: "#E23D3D",
            fontFamily: "Baloo-2-500",
          }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "#ffffff", width: "100%" }}>
          <Completed />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "#ffffff", width: "100%" }}>
          <Canceled />
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default TripHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  one: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 8,
  },
  start: {
    fontFamily: "Baloo-2-400",
    fontSize: 12,
    color: "#151513",
  },
  destination: {
    fontFamily: "Baloo-2-500",
    fontSize: 12,
  },
  price: {
    fontFamily: "Baloo-2-500",
    fontSize: 15,
    color: " #000000",
  },
  startText: {
    color: "#0FA958",
    fontFamily: "Baloo-2-400",
    fontSize: 10,
  },
  time: {
    fontFamily: "Baloo-2-400",
    fontSize: 14,
    color: "#9F9F9F",
  },
  destText: {
    color: "#E23D3D",
    fontFamily: "Baloo-2-400",
    fontSize: 10,
  },
  date: {
    fontFamily: "Baloo-2-400",
    fontSize: 10,
    color: "#333333",
  },
  deets1: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deets2: {
    flex: 1,
    alignItems: "flex-end",
  },
  deets3: {
    flex: 2.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deets4: {
    flex: 1.5,
    alignItems: "flex-end",
  },
});
