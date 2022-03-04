import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./screens/home/Home";
import ForecastResults from "./screens/forecast/ForecastResults";
import Constants from "expo-constants";

const Tab = createMaterialTopTabNavigator();

export default App = () => {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        style={{ marginTop: Constants.statusBarHeight }}
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },
          tabBarActiveTintColor: "#f8f4f9",
          tabBarStyle: { backgroundColor: "#1e96fc" },
          tabBarIndicatorStyle: {
            borderBottomColor: "#f8f4f9",
            borderBottomWidth: 2.5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            title: "Current Weather",
            headerTitleAlign: "center",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#1e96fc",
            },
          }}
        >
          {(props) => (
            <Home
              {...props}
              data={data}
              setData={setData}
              forecast={forecast}
              setForecast={setForecast}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="ForecastResults"
          options={{
            title: "7 Day Forecast",
            headerTitleAlign: "center",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#1e96fc",
            },
          }}
        >
          {(props) => (
            <ForecastResults
              {...props}
              data={data}
              setData={setData}
              forecast={forecast}
              setForecast={setForecast}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
