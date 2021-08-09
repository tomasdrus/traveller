import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'

import { colors } from '../config/colors'
import Heading from '../components/Heading'

import Heart from '../assets/icons/Heart'
import Download from '../assets/icons/Download'

import { languagesList } from '../data/languages'

export default function LanguageScreen({ navigation }) {
    const [text, onChangeText] = useState('')
    const [languages, setlanguages] = useState(languagesList)

    const Item = ({ item }) => (
        <TouchableOpacity style={language.item} onPress={() => navigation.navigate('Categories', { code: item.code })}>
            <Text style={language.code}>{item.code}</Text>
            <Text style={language.name}>
                {item.name} ({item.native})
            </Text>

            <View style={language.icons}>
                <Heart size={20} color={'red'} />
                <Download size={20} color={colors.primary} />
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Heading text={'Select translated language'} navigation={navigation} back={false} />

            <Text style={styles.subHeading}>Language by your location </Text>
            <Item
                item={{
                    code: 'it',
                    name: 'Italian',
                    native: 'Italiano',
                }}
            ></Item>

            <Text style={(styles.subHeading, { marginTop: 10 })}>Search for language </Text>
            <TextInput value={text} onChangeText={onChangeText} placeholder="search" style={styles.input} />

            <FlatList
                data={languages}
                renderItem={Item}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
            />

            <StatusBar style="auto" />
        </View>
    )
}

const language = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    code: {
        fontSize: 15,
        fontWeight: '500',
        width: 25,
        textTransform: 'uppercase',
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 15,
    },
    icons: {
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 50,
    },
})

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    subHeading: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 3,
    },
})
