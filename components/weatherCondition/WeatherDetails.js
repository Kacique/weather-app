import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WeatherDetails = ({
  feelsLike,
  description,
  tempMin,
  tempMax,
  humidity,
  wind,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Description}>
        <Text style={styles.text}>Feels Like</Text>
        <Text style={styles.text}>Description</Text>
        <Text style={styles.text}>Temp. Min</Text>
        <Text style={styles.text}>Temp. Max</Text>
        <Text style={styles.text}>Humidity</Text>
        <Text style={styles.text}>Wind Speed</Text>
      </View>
      <View style={styles.results}>
        <Text style={styles.textR}>
          {feelsLike == null ? "" : Math.round(feelsLike) + "°"}
        </Text>
        <Text style={styles.textR}>{description}</Text>
        <Text style={styles.textR}>
          {tempMin == null ? "" : Math.round(tempMin) + "°"}
        </Text>
        <Text style={styles.textR}>
          {tempMax == null ? "" : Math.round(tempMax) + "°"}
        </Text>
        <Text style={styles.textR}>{humidity + "%"}</Text>
        <Text style={styles.textR}>{Math.round(wind) + " mph"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginTop: 0,
    backgroundColor: "#f8f4f9",
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
  },
  text: {
    color: "#969faf",
    fontSize: 18,
    fontWeight: "bold",
  },
  textR: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WeatherDetails;
