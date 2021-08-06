import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import Heading from '../components/Heading'

import colors from '../config/colors'
import { slovak, english } from '../data/translations'
import { translations } from '../data/favorites'

const mergeLanguages = (nativeLanguage, translatedLanguage, favorites) => {
    const types = ['phrases', 'words']
    const result = {}

    types.forEach((type) => {
        result[type] = nativeLanguage[type].map((nativeItem) => {
            const translated = translatedLanguage[type].find(
                (translatedItem) => translatedItem.id === nativeItem.id,
            )
            const favorite = favorites[type].find(
                (favoriteItem) => favoriteItem.id === nativeItem.id,
            )
            return {
                ...nativeItem,
                translated: translated.native,
                favorite: favorite.liked,
            }
        })
    })

    return result
}

/* const reformat = wordsList.map((word) => {
    const favorite = translations.words.find((item) => item.id === word.id)
    return { ...word, favorite: favorite.liked }
}) */

const mergedLanguages = mergeLanguages(slovak, english, translations)

export default function CategoriesScreen({ route, navigation }) {
    const [show, setShow] = useState({ phrases: true, words: true })
    const [phrases, setPhrases] = useState(mergedLanguages.phrases)
    const [words, setWords] = useState(mergedLanguages.words)

    const showHandler = (type) => {
        let showCopy = { ...show, [type]: !show[type] }
        if (!showCopy.phrases && !showCopy.words)
            type === 'phrases'
                ? (showCopy.words = true)
                : (showCopy.phrases = true)

        setShow(showCopy)
    }

    const favoriteHandler = (id, type) => {
        const arrayCopy = [...(type === 'phrases' ? phrases : words)]
        const index = arrayCopy.findIndex((arrayItem) => arrayItem.id === id)
        arrayCopy[index].favorite = !arrayCopy[index].favorite
        type === 'phrases' ? setPhrases(arrayCopy) : setWords(arrayCopy)
    }

    return (
        <View style={styles.container}>
            <Heading text={route.params.category} navigation={navigation} />

            <View style={styles.sectionWrapper}>
                <Text style={styles.sectionHeading}>Phrases list</Text>
                <TouchableOpacity
                    style={styles.sectionShow}
                    onPress={() => showHandler('phrases')}
                >
                    <Text style={styles.sectionShowText}>
                        {show.phrases ? 'Hide' : 'Open'}
                    </Text>
                    <AntDesign
                        name={show.phrases ? 'down' : 'up'}
                        size={20}
                        color={colors.primary}
                    />
                </TouchableOpacity>
            </View>
            {show.phrases && (
                <FlatList
                    data={phrases}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.itemNative}>
                                        {item.native}
                                    </Text>
                                    <Text style={styles.itemTranslated}>
                                        {item.translated}
                                    </Text>
                                </View>

                                <AntDesign
                                    name={item.favorite ? 'heart' : 'hearto'}
                                    size={22}
                                    color="red"
                                    onPress={() =>
                                        favoriteHandler(item.id, 'phrases')
                                    }
                                />
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.native}
                    showsVerticalScrollIndicator={false}
                    style={styles.sectionList}
                />
            )}

            <View style={[styles.sectionWrapper, { marginTop: 10 }]}>
                <Text style={styles.sectionHeading}>Words list</Text>
                <TouchableOpacity
                    style={styles.sectionShow}
                    onPress={() => showHandler('words')}
                >
                    <Text style={styles.sectionShowText}>
                        {show.words ? 'Hide' : 'Open'}
                    </Text>
                    <AntDesign
                        name={show.words ? 'down' : 'up'}
                        size={20}
                        color={colors.primary}
                    />
                </TouchableOpacity>
            </View>
            {show.words && (
                <FlatList
                    data={words}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <View style={styles.itemWords}>
                                    <Text
                                        style={[
                                            styles.itemNative,
                                            styles.itemNativeWords,
                                        ]}
                                    >
                                        {item.native}
                                    </Text>
                                    <Text style={styles.itemTranslated}>
                                        {item.translated}
                                    </Text>
                                </View>

                                <AntDesign
                                    name={item.favorite ? 'heart' : 'hearto'}
                                    size={22}
                                    color="red"
                                    onPress={() =>
                                        favoriteHandler(item.id, 'words')
                                    }
                                />
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.translated}
                    showsVerticalScrollIndicator={false}
                    style={styles.sectionList}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flex: 1,
        marginBottom: 30,
    },
    item: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemWords: {
        flexDirection: 'row',
    },
    itemNative: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 3,
        color: colors.gray700,
    },
    itemNativeWords: {
        marginBottom: 0,
        marginRight: 10,
    },
    itemTranslated: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.black,
    },

    sectionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingHorizontal: 3,
    },
    sectionHeading: {
        fontWeight: '600',
        fontSize: 18,
        color: colors.black,
    },
    sectionShow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionShowText: {
        fontWeight: '600',
        color: colors.primary,
        fontSize: 15,
        marginRight: 5,
    },
    sectionList: {
        height: '50%',
    },
})
