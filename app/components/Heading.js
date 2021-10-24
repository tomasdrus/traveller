import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../config/colors'

const Heading = ({ text, language, navigation, back = true, settings = true }) => {
    return (
        <View style={[styles.container, { justifyContent: back && settings ? 'space-between' : 'center' }]}>
            {back && (
                <Pressable hitSlop={15} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={26} color={colors.primary} style={styles.back} />
                </Pressable>
            )}

            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>{text}</Text>
                {language && <Text style={styles.language}>{language}</Text>}
            </View>

            {settings && (
                <Pressable hitSlop={15}>
                    <Ionicons name="cog" size={26} color={colors.primary} style={styles.settings} />
                </Pressable>
            )}
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        paddingBottom: 13,
        paddingHorizontal: 20,
        marginBottom: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    headingWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'center',
    },
    heading: {
        fontSize: 19,
        fontWeight: '600',
        marginRight: 5,
    },
    language: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 13.5,
        color: colors.primary,
    },
    /* back: {
        position: 'absolute',
        left: 15,
        bottom: -2,
    },
    settings: {
        position: 'absolute',
        right: 15,
        bottom: -2,
    }, */
})
