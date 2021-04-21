import React from 'react';
import { SnapshotViewIOS, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the Weather</Text>
    </View>
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0063B2",
        justifyContent:"flex-end",
        alignItems:"center",
        paddingHorizontal:30,
        paddingVertical:100,
    },
    text:{
        fontSize:30,
        color:"white",
    }
    
  });