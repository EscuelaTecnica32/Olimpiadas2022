import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"


const Header = () => {
    return (
        <View style={styles.header}>
            <View style={{ justifyContent: "center" }}>
                <Image
                    source={require("../assets/images/logo_museo_blanco.png")}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            <View style={{ justifyContent: "center" }}>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/images/logo_museo_blanco.png")}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#0979B0",
        zIndex: 20,
        minHeight: 100

    },
    image: {
        width: 100,
        height: 100
    },
    iconUser: {
        color: "#ffffff",
        width: 50,
        height: 50
    }
})

export default Header