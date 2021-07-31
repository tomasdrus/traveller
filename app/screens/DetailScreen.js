import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native'

import colors from '../config/colors';
import Heading from '../components/Heading';

export default function CategoriesScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <Heading text={`Select your category (${route.params.category})`} navigation={navigation} />

            <FlatList
                data={phrases}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.native}</Text>
                            <Text>{item.translated}</Text>
                        </View >
                )}}
                keyExtractor={item => item.native}
            />

            <StatusBar style="auto" />
        </View >
    )
}

const phrases = [
    { 
        native: 'aaa',
        translated: 'AAA' 
    },
    { 
        native: 'bbb',
        translated: 'BBB' 
    },
    { 
        native: 'ccc',
        translated: 'CCC' 
    },
]

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    boss: {
        padding: 50,
        backgroundColor: 'red',
    }
});
