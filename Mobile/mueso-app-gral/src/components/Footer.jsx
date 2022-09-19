import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"

const Footer = (props) => {

    const [isActiveHome, setActiveHome] = useState();
    const [isActiveTurnos, setActiveTurnos] = useState();
    const [isActiveRecorridos, setActiveRecorridos] = useState();
    const [isActivePressHome, setActivePressHome] = useState();
    const [isActivePressTurnos, setActivePressTurnos] = useState();
    const [isActivePressRecorridos, setActivePressRecorridos] = useState();

    useEffect(() => {
        switch (props.active) {
            case "home":
                setActiveHome({ color: "white" })
                break;
            case "turnos":
                setActiveTurnos({ color: "white" })
                break;
            case "recorridos":
                setActiveRecorridos({ color: "white" })
                break;
        }
    }, [])


    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Image style={styles.bigIcon} source={require("../assets/images/logo_museo_blanco.png")} />
                    <Text style={[styles.home, isActiveHome]} onPress={() => {
                        props.navigation.navigate("Home")
                    }}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Image style={styles.bigIcon} source={require("../assets/images/logo_museo_blanco.png")} />
                    <Text style={[styles.turnos, isActiveTurnos]} onPress={() => {
                        props.navigation.navigate("Turnos")
                    }}>Turnos</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Image style={styles.bigIcon} source={require("../assets/images/logo_museo_blanco.png")} />
                    <Text style={[styles.recorridos, isActiveRecorridos]} onPress={() => {
                        props.navigation.navigate("Recorridos")
                    }} >Recorridos</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#000000",
        backgroundColor: "#808080",
        paddingTop: 10,
        height: 80
    },
    home: {
        fontSize: 20
    },
    turnos: {
        fontSize: 20
    },
    recorridos: {
        fontSize: 20
    },
    bigIcon: {
        width: 80,
        height: 30
    },
    box: {
        alignItems: "center"
    }
})

export default Footer