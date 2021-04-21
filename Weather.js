import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Fontisto } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "day-haze",
    gradient: ["#4DA0B0", "#b0b8b7"],
    title:"Bring the Cardigan",
    subtitle:"It maybe highs and lows today"
  },
  Thunderstorm: {
    iconName: "lightning",
    gradient: ["#081666","#d1ce13" ],
    title:"You should watch out!",
    subtitle:"Thunder is coming today"
  },
  Drizzle: {
    iconName: "day-rain",
    gradient: ["#1A2980","#26D0CE"],
    title:"Bring the umbrella",
    subtitle:"Hear the rain's knock knock"
  },
  Rain: {
    iconName: "rain",
    gradient: ["#7ea6e0","#cad0d9"],
    title:"Bring the umbrella",
    subtitle:"Hear the rain's knock knock"
  },
  Snow: {
    iconName: "snow",
    gradient: ["#7AA1D2","#CC95C0"],
    title:"Are you happy?",
    subtitle:"Be careful, floor is so slippery"
  },
  Atmosphere: {
    iconName: "day-haze",
    gradient: ["#4DA0B0", "#b0b8b7"],
    title:"Bring the Cardigan",
    subtitle:"It maybe highs and lows today"
  },
  Clear: {
    iconName: "day-sunny",
    gradient: ["#0ab1ff", "#c9eeff"],
    title:"Sunny day Happy day",
    subtitle:"get out will be nice for you"
  },
  Clouds: {
    iconName: "cloudy",
    gradient: ["#2982ff","#80d4ff"],
    title:"See the sky",
    subtitle:"Clouds greets you!"
  },
  Mist: {
    iconName: "fog",
    gradient: ["#788694","#b4bbc2"],
    title:"Bring the Cardigan",
    subtitle:"It maybe highs and lows today"
  },
  Dust: {
    iconName: "cloudy-gusts",
    gradient: ["#91722d","#bdb8ae"],
    title:"You should bring the MASK",
    subtitle:"Dust are all around today"
  }
};

export default function Weather({ temp, condition }) {
  return (
      <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
        <Fontisto name={weatherOptions[condition].iconName} size={100} color="white"/>
      <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp:{
    fontSize:35,
    color:"white",
    marginTop:20,
  },
  halfContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    color:"white",
    fontSize:60,
    fontWeight:"400",
    marginBottom:7
  },
  subtitle:{
    color:"white",
    fontSize:25,
    fontWeight:"500"
  }
});