import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <View style={styles.box}>
                    <FontAwesomeIcon style={styles.big} icon={faHouse} />
                    <Text style={styles.big}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <FontAwesomeIcon style={styles.big} icon={solid('calendar-days')} />
                    <Text style={styles.big}>Turnos</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <FontAwesomeIcon style={styles.big} icon={solid('person-walking-with-cane')} />
                    <Text style={styles.big}>Recorridos</Text>
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

    },
    big: {
        fontSize: 35
    },
    box: {
        alignItems: "center"
    }
})

export default Footer