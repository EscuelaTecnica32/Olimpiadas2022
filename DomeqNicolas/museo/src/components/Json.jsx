import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from 'react';

const Json = () => {

    useEffect(() => {
        const options = { method: 'GET' };

        fetch('http://olimpiadaset32.000webhostapp.com/index.php?consulta=obtenerTurnosDisponibles', options)
            .then(response => response.json())
            .then(
                response => {
                    setIsLoading(false);
                    setResonse(response);
                },
                error => {
                    setIsLoading(false);
                    setError(error)
                }
            )
    }, [])

    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResonse] = useState();

    if (isLoading) {
        return (
            <View>
                <Text style={{ color: "#4c4cfd" }}>Lamando a la API</Text>
                <ActivityIndicator color="#4c4cfd" size="large" />
            </View>
        )
    }

    if (error) {
        return <Text>Algo salio mal {error}</Text>
    }


    return (
        <View>
            <Text style={{ fontWeight: "bold", color: "#56b056", textAlign: "center" }}>API LLAMADA EXITOSAMENTE!</Text>
            <Text>{JSON.stringify(response)}</Text>
        </View>
    )
}    

export default Json

