import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.textInput} >Inciar Sesion con Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  textInput: {
    color: "#fff",
    fontSize: 17,
    height: 20,
    borderColor: "#000000"
  }
});

export default CupertinoButtonInfo2;
