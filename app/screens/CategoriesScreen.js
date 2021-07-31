import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import colors from '../config/colors';
import Heading from '../components/Heading';

export default function CategoriesScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <Heading text={`Select your category (${route.params.code})`} navigation={navigation} />

            <View style={styles.categoryWrapper}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.category}>
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <StatusBar style="auto" />
        </View >
    )
}

const categories = [
    { name: 'aaa' },
    { name: 'bbb' },
    { name: 'ccc' },
    { name: 'ddd' },
    { name: 'eee' },
    { name: 'aaa' },
    { name: 'bbb' },
    { name: 'ccc' },
    { name: 'ddd' },
    { name: 'eee' },
    { name: 'aaa' },
    { name: 'bbb' },
    { name: 'ccc' },
    { name: 'ddd' },
    { name: 'eee' },
]

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
        height: 100,
        margin: 5,
        borderRadius: 10,
        backgroundColor: colors.gray100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 22,
    },
});
