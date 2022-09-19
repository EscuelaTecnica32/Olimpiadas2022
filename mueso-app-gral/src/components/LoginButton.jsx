import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo( props) {
  return (
    <TouchableOpacity 
      style={
        [
          styles.container, 
          props.style
        ]
      }
      onPress={
        () => {
          props.navigation.navigate("Home")
        }
      }>
      <Text style={styles.iniciarSesion} >Iniciar sesion</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(231,235,240,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  iniciarSesion: {
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    fontFamily: "roboto-500",
  }
});

export default CupertinoButtonInfo;
