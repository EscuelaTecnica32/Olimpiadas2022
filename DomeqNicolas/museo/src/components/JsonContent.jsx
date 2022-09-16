import React from 'react';
import { useState } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";

const JsonContent = () => {

    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResonse] = useState();

    if (isLoading) {
        return (
        <ActivityIndicator color="#0979B0" size="large"/>
        )
    }

    if (error) {
        return <Text>Algo salio mal {error}</Text>
    }


    return (
        <View>
            <Text>{JSON.stringify(response)}</Text>
        </View>
    )
}

export default JsonContent