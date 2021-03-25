import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import {Alert} from "react-native";
import axios from "axios";

const API_KEY = "0314cf910c0de156383b260ff3793ba8";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  };
  
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // Send to API and get weather!
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });
      } catch(error){
        Alert.alert("Can't find you.");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

