import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import LoginBurrom from "../components/LoginButton";
import GoogleLoginButtom from "../components/GoogleLoginButtom";
import Input from "../components/Input";
import OpenURLButton from "../components/OpenUrlButton";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/museo1.jpg")}
        resizeMode="cover"
        style={styles.fondo}
      >
        <View style={styles.rect}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.iniciarSesion}>Iniciar sesion</Text>
            <Image
              source={require("../assets/images/logo_museo_azul.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Input placeholder={"Usuario"}></Input>
          <Input placeholder={"Contraseña"}></Input>
          <View style={styles.botones}>
            <LoginBurrom style={styles.googleLoginButtom} navigation={navigation}></LoginBurrom>
            <GoogleLoginButtom style={styles.googleLoginButtom}></GoogleLoginButtom>
          </View>
          <View style={{ flexDirection: "row", top: 5 }}>
            <Text style={styles.siNoTienesCuenta}>Si no tienes cuenta, </Text>
            <OpenURLButton style={styles.siNoTienesCuenta} url={"https://google.com"}>
              <Text>Registrate</Text>
            </OpenURLButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
    justifyContent: "center"
  },
  rect: {
    paddingTop: 5,
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "#000000",
    borderRadius: 50,
    alignItems: "center",
    paddingBottom: 25
  },
  iniciarSesion: {
    fontFamily: "poppins-700",
    color: "rgba(9,121,176,1)",
    fontSize: 26
  },
  image: {
    width: 150,
    height: 150
  },
  loremIpsum: {
    top: 22,
    left: 68,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  botones: {
    top: 15,
  },
  googleLoginButtom: {
    height: 44,
    width: 270,
    marginTop: 10
  },
  siNoTienesCuenta: {
    top: 15,
    fontFamily: "poppins-regular",
    color: "#121212",
    fontSize: 16
  }
});

export default Login;
