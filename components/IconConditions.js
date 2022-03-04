import ClearDay from "../images/clear-day.png";
import ClearNight from "../images/clear-night.png";
import PartlyCloudy from "../images/partly-cloudy-day.png";
import Cloudy from "../images/cloudy.png";
import Thunderstorm from "../images/thunderstorm-showers.png";
import ShowerRain from "../images/showers.png";
import Rain from "../images/heavy-showers.png";
import Snow from "../images/snow.png";
import Mist from "../images/fog.png";

export const IconConditions = {
  "01d": {
    color: "#1e96fc",
    icon: ClearDay,
  },
  "01n": {
    color: "#544179",
    icon: ClearNight,
  },
  "02d": {
    color: "#AAD8D3",
    icon: PartlyCloudy,
  },
  "02n": {
    color: "#AAD8D3",
    icon: PartlyCloudy,
  },
  "03d": {
    color: "#616161",
    icon: Cloudy,
  },
  "03n": {
    color: "#616161",
    icon: Cloudy,
  },
  "04d": {
    color: "#616161",
    icon: Cloudy,
  },
  "04n": {
    color: "#616161",
    icon: Cloudy,
  },

  "09d": {
    color: "#3CD3AD",
    icon: ShowerRain,
  },
  "09n": {
    color: "#3CD3AD",
    icon: ShowerRain,
  },

  "10d": {
    color: "#92A9BD",
    icon: Rain,
  },
  "10n": {
    color: "#92A9BD",
    icon: Rain,
  },
  "11d": {
    color: "#215a6d",
    icon: Thunderstorm,
  },
  "11n": {
    color: "#215a6d",
    icon: Thunderstorm,
  },

  "13d": {
    color: "#B8FFF9",
    icon: Snow,
  },
  "13n": {
    color: "#B8FFF9",
    icon: Snow,
  },

  "50d": {
    color: "#a8b2bd",
    icon: Mist,
  },
  "50n": {
    color: "#a8b2bd",
    icon: Mist,
  },
};
