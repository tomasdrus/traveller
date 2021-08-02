import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import Heading from '../components/Heading';

import colors from '../config/colors';
import { categories } from '../data/categories';

categories.sort((a, b) => a.order - b.order);

const opacity = (number) => {
    if(number <= 0) return '00'
    if(number >= 100) return 'FF'
    return Number(Math.round(number * 2.55)).toString(16)
}

export default function CategoriesScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <Heading text={`Select your category (${route.params.code})`} navigation={navigation} />

            <View style={styles.categoryWrapper}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.category}
                        onPress={() => navigation.navigate('Detail', {category: item.name})}>
                        <View style={styles.imageWrapper}>
                            <Image source={{uri: item.image}} style={styles.image} />
                        </View>
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <StatusBar style="auto" />
        </View >
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
        width: '30%',
        height: 105,
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
        borderRadius: 50/2,
        backgroundColor: '#15CAF2' + opacity(15),
        padding: 11,
    },
    image: {
        width: '100%',
        height: '100%',
        tintColor: '#15CAF2',
    }
});