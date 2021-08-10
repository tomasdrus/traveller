import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Heading = ({ text, navigation, back = true }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {back && (
                <Pressable hitSlop={15} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={26} color="#15CAF2" style={styles.back} />
                </Pressable>
            )}
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
        marginBottom: 20,
        backgroundColor: 'white',
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
    },
})
