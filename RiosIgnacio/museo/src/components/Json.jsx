import React from "react";
import { Text, View } from "react-native";
import lista from "../json/api";



const Json = async () => {
    const algo = await lista()

    console.log(algo);
}    

export default Json

