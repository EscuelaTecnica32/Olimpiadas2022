import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import Home from "./Home";
import Turnos from "./Turnos";
import { useFonts } from 'expo-font';
import Recorridos from "./Recorridos";


const Stack = createNativeStackNavigator();

const Main = () => {

    const [loaded] = useFonts({
        "poppins-500": require("../assets/fonts/poppins-500.ttf"),
        "poppins-700": require("../assets/fonts/poppins-700.ttf"),
        "poppins-regular": require("../assets/fonts/poppins-regular.ttf"),
        "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
        "roboto-500": require("../assets/fonts/roboto-500.ttf"),
    });


    if (!loaded) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{ headerTransparent: true, title: null }} name="Login" component={Login} />
                <Stack.Screen options={{ headerTransparent: true, title: null }} name="Home" component={Home} />
                <Stack.Screen options={{ headerTransparent: true, title: null }} name="Turnos" component={Turnos} />
                <Stack.Screen options={{ headerTransparent: true, title: null }} name="Recorridos" component={Recorridos} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;