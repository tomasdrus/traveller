import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Heading = ({ text }) => {
    return (
        <Text style={styles.text}>{text}</Text>
    )
}

export default Heading

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 55,
        marginBottom: 20,
        textAlign: 'center',
    },
})