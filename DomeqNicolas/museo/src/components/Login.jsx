import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import CupertinoButtonInfo from "./CupertinoButtonInfo";
import CupertinoButtonInfo2 from "./CupertinoButtonInfo2";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.iniciarSesionStack}>
          <Text style={styles.iniciarSesion}>Iniciar sesion</Text>
          <Image
            source={require("../assets/images/logo_museo_azul.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.rect2}>
            <TextInput
              placeholder="Usuario"
              style={styles.usuario}
            ></TextInput>
          </View>
        </View>
        <View style={styles.rect3}>
          <TextInput
            placeholder="Contraseña"
            style={styles.usuario}
          ></TextInput>
        </View>
        <View style={styles.loremIpsumStack}>
          <Text style={styles.loremIpsum}></Text>
          <CupertinoButtonInfo
            style={styles.cupertinoButtonInfo1}
          ></CupertinoButtonInfo>
          <CupertinoButtonInfo2
            style={styles.cupertinoButtonInfo2}
          ></CupertinoButtonInfo2>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(160,201,241,1)",
    justifyContent: 'center'
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 58,
    justifyContent: "center",
    paddingBottom: 10,
    alignItems: "center"
  },
  iniciarSesion: {
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(9,121,176,1)",
    height: 43,
    width: 167,
    fontSize: 26,
    textAlign: "center"
  },
  image: {
    width: 159,
    height: 171,
    position: "absolute"
  },
  rect2: {
    top: 154,
    width: 252,
    height: 48,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,0.25)"
  },
  usuario: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 34,
    width: 172,
    fontSize: 17,
    marginTop: 13,
    marginLeft: 14
  },
  iniciarSesionStack: {
    width: 252,
    height: 202,
    marginTop: 40,
    alignItems: "center"
  },
  rect3: {
    width: 252,
    height: 48,
    backgroundColor: "rgba(230,230,230,0.25)",
    marginTop: 15
  },
  contrasena: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 34,
    width: 172,
    fontSize: 17,
    marginTop: 12,
    marginLeft: 14
  },
  loremIpsum: {
    top: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoButtonInfo1: {
    paddingTop: 10,
    paddingBottom: 10
  },
  cupertinoButtonInfo2: {
    marginTop: 10,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  loremIpsumStack: {
    width: 256,
    marginTop: 17
  }
});

export default Login;
