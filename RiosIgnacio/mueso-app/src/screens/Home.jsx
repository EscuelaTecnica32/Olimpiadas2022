import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
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
                    <Text style={styles.title}>INFORMACION DEL MUSEO</Text>
                    <Text style={styles.info}>Malba funciona en un edificio construido especialmente a partir de un concurso internacional lanzado en el marco de la VII Bienal de Arquitectura de Buenos Aires BA/97. El proyecto arquitectónico ganador -que cuenta con múltiples premios y menciones internacionales- fue elaborado por el estudio cordobés AFT Arquitectos, integrado por Gastón Atelman, Martín Fourcade y Alfredo Tapia.</Text>
                    <Text style={styles.info}>Malba funciona en un edificio construido especialmente a partir de un concurso internacional lanzado en el marco de la VII Bienal de Arquitectura de Buenos Aires BA/97. El proyecto arquitectónico ganador -que cuenta con múltiples premios y menciones internacionales- fue elaborado por el estudio cordobés AFT Arquitectos, integrado por Gastón Atelman, Martín Fourcade y Alfredo Tapia.</Text>
                    <Text style={styles.info}>Malba funciona en un edificio construido especialmente a partir de un concurso internacional lanzado en el marco de la VII Bienal de Arquitectura de Buenos Aires BA/97. El proyecto arquitectónico ganador -que cuenta con múltiples premios y menciones internacionales- fue elaborado por el estudio cordobés AFT Arquitectos, integrado por Gastón Atelman, Martín Fourcade y Alfredo Tapia.</Text>
                    <Text style={styles.info}>Malba funciona en un edificio construido especialmente a partir de un concurso internacional lanzado en el marco de la VII Bienal de Arquitectura de Buenos Aires BA/97. El proyecto arquitectónico ganador -que cuenta con múltiples premios y menciones internacionales- fue elaborado por el estudio cordobés AFT Arquitectos, integrado por Gastón Atelman, Martín Fourcade y Alfredo Tapia.</Text>
                    <Text style={styles.info}>Malba funciona en un edificio construido especialmente a partir de un concurso internacional lanzado en el marco de la VII Bienal de Arquitectura de Buenos Aires BA/97. El proyecto arquitectónico ganador -que cuenta con múltiples premios y menciones internacionales- fue elaborado por el estudio cordobés AFT Arquitectos, integrado por Gastón Atelman, Martín Fourcade y Alfredo Tapia.</Text>
                    <Text style={styles.info}>Malba funciona en un edificio construido especialmente a partir de un concurso internacional lanzado en el marco de la VII Bienal de Arquitectura de Buenos Aires BA/97. El proyecto arquitectónico ganador -que cuenta con múltiples premios y menciones internacionales- fue elaborado por el estudio cordobés AFT Arquitectos, integrado por Gastón Atelman, Martín Fourcade y Alfredo Tapia.</Text>

                </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Footer />
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


export default Home