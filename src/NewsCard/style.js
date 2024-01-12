import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
    container_card: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10
    },
    image :{
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
    },
    text_container: {
        padding: 5,
    },
    name: {
        textAlign: "right",
        fontStyle: "italic",
        fontSize: 12
    }
})

export default Style