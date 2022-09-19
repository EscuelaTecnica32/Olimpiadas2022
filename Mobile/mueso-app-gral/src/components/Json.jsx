import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from 'react';
import getApi from "../Middleware/get-api";
import ApiObject from "./ApiObject";

const Json = () => {

    useEffect(() => {

        var api = getApi();

        if (api == false){
            setIsLoading(false)
            setError("error")
        }else{
            setIsLoading(false);
            setResonse(<ApiObject turnos={api}/>);
        }
        
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
            {response}
        </View>
    )
}

export default Json

