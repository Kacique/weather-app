import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import TodaysDate from "../../components/todaysDate/TodaysDate";

const WeatherCondition = ({
  location,
  temperature,
  condition,
  icon,
  humidity,
  wind,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <EvilIcons name="location" size={40} color="#f8f4f9" />
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon}></Image>
      </View>

      <View style={styles.infoContainer}>
        <TodaysDate />
        <Text style={styles.temperature}>
          {temperature == null ? "" : Math.round(temperature) + "°"}
        </Text>
        <Text style={styles.condition}>{condition}</Text>
        <View style={styles.HMContainer}>
          <View style={styles.HMText}>
            <Text style={styles.condition}>
              <Feather name="droplet" size={24} color="white" />
              {"    "}Humidity
            </Text>
            <Text style={styles.condition}>
              <Feather name="wind" size={24} color="white" />
              {"    "}Wind
            </Text>
          </View>
          <View style={styles.HMData}>
            <Text style={styles.condition}>{humidity + "%"}</Text>
            <Text style={styles.condition}>{Math.round(wind) + " mph"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: "99%",
    marginTop: 0,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginBottom: "10%",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: "15%",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    marginLeft: 3,
    backgroundColor: "rgba(255,255,255,0.4)",
    paddingBottom: "10%",
    paddingTop: "10%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  HMContainer: {
    flexDirection: "row",
  },
  location: {
    fontSize: 24,
    color: "#f8f4f9",
    marginLeft: "2%",
    //fontWeight: "bold",
  },
  icon: {
    width: 200,
    height: 200,
  },
  temperature: {
    fontSize: 80,
    color: "#f8f4f9",
    fontWeight: "bold",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    textShadowColor: "#000",
  },
  condition: {
    fontSize: 20,
    color: "#f8f4f9",
    fontWeight: "bold",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    textShadowColor: "#000",
  },
  HMText: {
    marginRight: "10%",
  },
  HMData: {},
});

export default WeatherCondition;
