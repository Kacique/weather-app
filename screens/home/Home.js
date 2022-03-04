import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, ActivityIndicator, View, Animated } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import WeatherCondition from "../../components/weatherCondition/WeatherCondition";
import { IconConditions } from "../../components/IconConditions";

import { Key } from "../../APIKey.js";

const Home = (props) => {
  const [isLoading, setLoading] = useState(true);

  const cityName = "Paris";

  const currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${Key.apiKey}`;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const getWeather = async () => {
    try {
      const response = await fetch(currentWeatherURL);
      const json = await response.json();

      props.setData({
        location: json.name,
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        icon: json.weather[0].icon,

        humidity: json.main.humidity,
        wind: json.wind.speed,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  //Animation
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={[
            styles.container,
            {
              backgroundColor: IconConditions[props.data.icon].color,
            },
          ]}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(255,255,255,0.4)", "transparent"]}
            style={styles.background}
          />

          <View style={styles.inner}>
            <View style={styles.weatherContainer}>
              <Animated.View
                style={[
                  {
                    // Bind opacity to animated value
                    opacity: fadeAnim,
                  },
                ]}
              >
                <WeatherCondition
                  location={props.data.location}
                  temperature={props.data.temperature}
                  condition={props.data.weatherCondition}
                  //icon={props.data.icon}
                  icon={IconConditions[props.data.icon].icon}
                  humidity={props.data.humidity}
                  wind={props.data.wind}
                />
              </Animated.View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    width: "100%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});

export default Home;
