import { ScrollView, StyleSheet, Text, View } from "react-native"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Json from "../components/Json"

const Recorridos = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <View style={
                {
                    flex: 1,
                    justifyContent: "flex-start",

                }
            }>
                <Header />
            </View>
            
            <ScrollView>
                <View style={styles.vista}>
                    <Text>SOY RECORRIDOS</Text>

                </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Footer active="recorridos" navigation={ navigation }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    vista: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30
    },
    title: {
        fontFamily: "roboto-regular",
        fontWeight: "bold",
        fontSize: 50
    },
    info: {
        textAlign: "justify",
        fontSize: 35
    }
})


export default Recorridos