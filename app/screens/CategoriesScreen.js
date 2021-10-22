import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'

import Heading from '../components/Heading'

import { colors, opacity } from '../config/colors'
import { categories } from '../data/categories'

categories.sort((a, b) => a.order - b.order)

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function CategoriesScreen({ route, navigation }) {
    return (
        <>
            <Heading text={'Categories'} language={route.params.code} navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.categoryWrapper}>
                    {categories.map((item, index) => (
                        <TouchableOpacity
                            style={styles.category}
                            pressDuration={0.2}
                            activeOpacity={0.3}
                            key={index}
                            onPress={() =>
                                navigation.navigate('Detail', {
                                    category: item.name,
                                    code: route.params.code,
                                })
                            }
                        >
                            <View style={[styles.imageWrapper, { backgroundColor: item.color + opacity(10) }]}>
                                <Image source={item.uri} style={[styles.image, { tintColor: item.color }]} />
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: -5,
    },
    categoryWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    category: {
        width: Math.floor((windowWidth - 20 - 30) / 3),
        height: Math.floor((windowHeight - 180 - 10) / 6),
        margin: 5,
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
    },
    imageWrapper: {
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        transform: [{ scale: 0.37 }],
    },
})
