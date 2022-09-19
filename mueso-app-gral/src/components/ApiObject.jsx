import React from "react";
import { FlatList, Text, View } from "react-native";
import turnos from "../data/turnos.json"

const ApiObject = () => {
    return(
        <FlatList
            data={turnos}
            ItemSeparatorComponent={() => { <Text></Text> }}
            renderItem={({ item: turno }) => (
                <View>
                    <Text style={{fontSize: 11}}>{JSON.stringify(turno)}</Text>
                </View>
            )}
        ></FlatList> 
    )
}

export default ApiObject