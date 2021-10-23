import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import Heading from '../components/Heading'
import ModalDetail from '../components/ModalDetail'

import { colors } from '../config/colors'
import { english, french } from '../data/translations'
import { translations } from '../data/favorites'

const mergeLanguages = (nativeLanguage, translatedLanguage, favorites) => {
    const types = ['phrases', 'words']
    const result = {}

    types.forEach((type) => {
        //TODO merge order from file
        result[type] = nativeLanguage[type].map((nativeItem) => {
            const translated = translatedLanguage[type].find((translatedItem) => translatedItem.id === nativeItem.id)
            const favorite = favorites[type].find((favoriteItem) => favoriteItem.id === nativeItem.id)
            return {
                ...nativeItem,
                translated: translated.native,
                favorite: favorite.liked,
            }
        })
    })

    return result
}

const changeOrder = () => {
    //TODO complete function for changing order on liking
}

const mergedLanguages = mergeLanguages(english, french, translations)

export default function CategoriesScreen({ route, navigation }) {
    const [show, setShow] = useState({ phrases: true, words: true })
    const [phrases, setPhrases] = useState(mergedLanguages.phrases)
    const [words, setWords] = useState(mergedLanguages.words)

    const showHandler = (type) => {
        let showCopy = { ...show, [type]: !show[type] }
        if (!showCopy.phrases && !showCopy.words)
            type === 'phrases' ? (showCopy.words = true) : (showCopy.phrases = true)

        setShow(showCopy)
    }

    const favoriteHandler = (id, type) => {
        const arrayCopy = [...(type === 'phrases' ? phrases : words)]
        const index = arrayCopy.findIndex((arrayItem) => arrayItem.id === id)
        arrayCopy[index].favorite = !arrayCopy[index].favorite
        type === 'phrases' ? setPhrases(arrayCopy) : setWords(arrayCopy)
    }

    // Modal
    const [modalVisible, setModalVisible] = useState(false)
    const [modalItem, setmodalItem] = useState({})

    const openModal = (item) => {
        setModalVisible(true)
        setmodalItem(item)
    }

    const HeaderList = ({ type }) => {
        return (
            <View style={[styles.sectionWrapper, type === 'words' ? { marginTop: 10 } : {}]}>
                <Text style={styles.sectionHeading}>{type} list</Text>
                <Pressable style={styles.sectionShow} hitSlop={10} onPress={() => showHandler(type)}>
                    <Text style={styles.sectionShowText}>{show[type] ? 'Hide' : 'Open'}</Text>
                    <AntDesign name={show[type] ? 'down' : 'up'} size={20} color={colors.primary} />
                </Pressable>
            </View>
        )
    }

    const FlatListItem = ({ type, item }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                pressDuration={0.1}
                activeOpacity={0.3}
                onPress={() => openModal(item)}
            >
                <View style={type === 'words' ? styles.itemWords : {}}>
                    <Text style={[styles.itemNative, type === 'words' ? styles.itemNativeWords : {}]}>
                        {item.native}
                    </Text>
                    <Text style={styles.itemTranslated}>{item.translated}</Text>
                </View>

                <Pressable hitSlop={15} onPress={() => favoriteHandler(item.id, type)}>
                    <AntDesign name={item.favorite ? 'heart' : 'hearto'} size={22} color="red" />
                </Pressable>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Heading text={route.params.category} language={route.params.code} navigation={navigation} />
            <View style={styles.container}>
                <ModalDetail visible={modalVisible} setVisible={setModalVisible} item={modalItem} />

                <HeaderList type="phrases" />
                {show.phrases && (
                    <FlatList
                        data={phrases}
                        renderItem={({ item }) => {
                            return <FlatListItem type="phrases" item={item} />
                        }}
                        keyExtractor={(item) => item.native}
                        showsVerticalScrollIndicator={false}
                        style={styles.sectionList}
                    />
                )}

                <HeaderList type="words" />
                {show.words && (
                    <FlatList
                        data={words}
                        renderItem={({ item }) => {
                            return <FlatListItem type="words" item={item} />
                        }}
                        keyExtractor={(item) => item.translated}
                        showsVerticalScrollIndicator={false}
                        style={styles.sectionList}
                    />
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
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
        fontSize: 16,
        color: colors.black,
        textTransform: 'capitalize',
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
