import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

import ForecastCard from "../../components/forecast/ForecastCard";
import { IconConditions } from "../../components/IconConditions";

import { Key } from "../../APIKey.js";

const ForecastResults = (props) => {
  const [isLoading, setLoading] = useState(true);
  const defaultLat = 36.7378;
  const defaultLon = 119.7871;

  let dayname;

  const oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${defaultLat}&lon=${defaultLon}&exclude=current,hourly,minutely,alerts&units=imperial&appid=${Key.apiKey}`;

  const getForecast = async () => {
    try {
      const response = await fetch(oneCallURL);
      const json = await response.json();

      props.setForecast({
        daily: json.daily,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.forecastContainer}>
            {props.forecast.daily.slice(0, 7).map((value, key) => {
              return (
                <ForecastCard
                  key={key}
                  weekday={(dayname = new Date(value.dt * 1000).getDay())}
                  icon={IconConditions[value.weather[0].icon].icon}
                  tempMax={value.temp.max}
                  tempMin={value.temp.min}
                />
              );
            })}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    backgroundColor: "#1e96fc",
  },
  forecastContainer: {
    width: "99%",
    height: "80%",
    marginTop: "10%",
  },
});

export default ForecastResults;
