import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const Heading = ({ text, navigation, back = true }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {back &&
            <Ionicons name="arrow-back" size={26} color="#15CAF2" style={styles.back} onPress={() => navigation.goBack()} />}
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
        marginBottom: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    back: {
        position: 'absolute',
        left: 10,
        bottom: -2,
    }
})