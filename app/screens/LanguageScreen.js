import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

import colors from '../config/colors';
import Heading from '../components/Heading';

import Heart from '../assets/icons/Heart';
import Download from '../assets/icons/Download';

const languages = [
    {
        code: 'es',
        name: 'Spanish',
        native: 'Español'
    },
    {
        code: 'sk',
        name: 'Slovak',
        native: 'Slovenčina'
    },
    {
        code: 'ru',
        name: 'Russian',
        native: 'русский'
    },
    {
        code: 'it',
        name: 'Italian',
        native: 'Italiano'
    },
]

export default function CategoriesScreen() {
    const [text, onChangeText] = React.useState('');

    const Item = ({ item }) => (
        <View style={language.item}>
            <Text style={language.code}>{item.code}</Text>
            <Text style={language.name}>{item.name} ({item.native})</Text>

            <View style={language.icons}>
                <Heart size={20} color={'darkred'} />
                <Download size={20} color={'darkblue'} />
            </View>
        </View>
    );



    return (
        <View style={styles.container}>
            <Heading text={'Select translated language'} />

            <Text style={styles.subHeading}>Language by your location </Text>
            <Item item={{
                code: 'it',
                name: 'Italian',
                native: 'Italiano'
            }}></Item>

            <Text style={styles.subHeading, { marginTop: 10 }}>Search for language </Text>
            <TextInput
                value={text}
                onChangeText={onChangeText}
                placeholder='search'
                style={styles.input}
            />

            <FlatList
                data={languages}
                renderItem={Item}
                keyExtractor={item => item.code}
            />

            <StatusBar style="auto" />
        </View >
    )
}


const language = StyleSheet.create({
    item: {
        backgroundColor: colors.gray100,
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
    }
})




const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    subHeading: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 3,
    }
});
