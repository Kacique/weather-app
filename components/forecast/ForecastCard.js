import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ForecastCard = ({ weekday, tempMax, tempMin, icon }) => {
  switch (weekday) {
    case 0:
      weekday = "Sunday";
      break;
    case 1:
      weekday = "Monday";
      break;
    case 2:
      weekday = "Tuesday";
      break;
    case 3:
      weekday = "Wednesday";
      break;
    case 4:
      weekday = "Thursday";
      break;
    case 5:
      weekday = "Friday";
      break;
    case 6:
      weekday = "Saturday";
      break;
    default:
      break;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.info}>
        <View>
          <Text style={styles.day}>{weekday}</Text>
        </View>
        <View style={styles.rightSide}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={icon}></Image>
          </View>
          <View>
            <Text style={styles.temp}>
              {`Day    ${tempMax == null ? "" : Math.round(tempMax)}°`}
              <AntDesign name="arrowup" size={16} color="#F76E11" />
            </Text>
            <Text style={styles.temp}>
              {`Night ${tempMin == null ? "" : Math.round(tempMin)}°`}
              <AntDesign name="arrowdown" size={16} color="#1597BB" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: 5,
    padding: 0,
  },
  iconContainer: {
    marginRight: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dee2e6",
    height: "99%",
    width: "98%",
    margin: 5,
    borderRadius: 5,
    borderColor: "#70757a",
    borderWidth: 1,
    padding: 5,
  },
  day: {
    fontSize: 18,
    color: "#000",
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 60,
  },
  temp: {
    fontSize: 18,
  },
});

export default ForecastCard;
