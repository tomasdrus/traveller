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
        <View style={styles.container}>
            <Heading text={`Categories (${route.params.code})`} navigation={navigation} />

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
                        <View style={styles.imageWrapper}>
                            <Image source={item.uri} style={styles.image} />
                        </View>
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
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
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#15CAF2' + opacity(15),
        padding: 11,
    },
    image: {
        width: '100%',
        height: '100%',
        tintColor: '#15CAF2',
    },
})
