import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
    return (
        <TextInput style={styles.input} placeholder={props.placeholder}></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        fontFamily: "poppins-regular",
        backgroundColor: "rgba(230,230,230,0.54)",
        color: "#121212",
        width: 250,
        fontSize: 17,
        paddingVertical: 10,
        marginTop: 10,
        paddingLeft: 5
    }
})

export default Input;