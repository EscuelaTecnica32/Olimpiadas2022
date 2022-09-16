import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text} from "react-native";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.textInput} >Inciar Sesion</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(231,235,240,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#007AFF"
  },
  textInput: {
    color: "#007AFF",
    fontSize: 17,
    height: 20,
    borderColor: "#000000"
  }
});

export default CupertinoButtonInfo;