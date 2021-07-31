import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Heading = ({ text, navigation, back = true }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {back &&
            <AntDesign name="back" size={24} color="darkblue" style={styles.back} onPress={() => navigation.goBack()} />}
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
        bottom:0,
    }
})