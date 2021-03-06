import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'

import { colors } from '../config/colors'
import Heading from '../components/Heading'

import { AntDesign } from '@expo/vector-icons'

import { languagesList } from '../data/languages'

export default function LanguageScreen({ navigation }) {
    const [text, onChangeText] = useState('')
    const [languages, setlanguages] = useState(languagesList)

    const Item = ({ item }) => (
        <TouchableOpacity style={language.item} onPress={() => navigation.navigate('Categories', { code: item.code })}>
            <Text style={language.code}>{item.code}</Text>
            <Text style={language.name}>
                <Text style={language.native}>{item.name}</Text> ({item.native})
            </Text>

            <View style={language.icons}>
                <AntDesign name="download" size={21} color={colors.primary} />
                <AntDesign name={item.code === 'es' || item.code === 'fr' ? 'heart' : 'hearto'} size={21} color="red" />
            </View>
        </TouchableOpacity>
    )

    return (
        <>
            <Heading text={'Language'} navigation={navigation} back={false} settings={false} />

            <View style={styles.container}>
                <Text style={styles.subHeading}>Language by your location </Text>
                <Item
                    item={{
                        code: 'sk',
                        name: 'Slovak',
                        native: 'Slovenčina',
                    }}
                ></Item>

                <Text style={[styles.subHeading, { marginTop: 5 }]}>Search for language </Text>
                <TextInput
                    value={text}
                    onChangeText={onChangeText}
                    placeholder="search..."
                    placeholderTextColor={colors.gray700}
                    style={styles.input}
                />

                <FlatList
                    data={languages}
                    renderItem={Item}
                    keyExtractor={(item) => item.code}
                    showsVerticalScrollIndicator={false}
                />

                <StatusBar style="auto" />
            </View>
        </>
    )
}

const language = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        paddingVertical: 13,
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
    native: {
        color: colors.primary,
    },
    icons: {
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 55,
    },
})

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1,
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        fontSize: 16,
    },
    subHeading: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 3,
    },
})
