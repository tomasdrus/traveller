import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 

import Heading from '../components/Heading';

import colors from '../config/colors';
import { phrases, words } from '../data/translations';

export default function CategoriesScreen({route, navigation}) {
    const [show, setShow] = useState({phrases : true, words : true})

    const showHandler = (type) => {
        //setShow({...show, [type] : !show[type]})

        let showCopy = {...show, [type] : !show[type]}
        if(!showCopy.phrases && !showCopy.words)
            type === 'phrases' ? showCopy.words = true : showCopy.phrases = true
        
        setShow(showCopy)
    }

    return (
        <View style={styles.container}>
            <Heading text={route.params.category} navigation={navigation} />

            <View style={styles.sectionWrapper}>
                <Text style={styles.sectionHeading}>Phrases list</Text>
                <TouchableOpacity style={styles.sectionShow} onPress={() => showHandler('phrases')}>
                    <Text style={styles.sectionShowText}>{show.phrases ? 'Hide' : 'Open'}</Text>
                    <AntDesign name={show.phrases ? 'down' : 'up'} size={20} color={colors.primary} />
                </TouchableOpacity>
            </View>
            {show.phrases && <FlatList
                data={phrases}
                renderItem={({item}) => {
                    return (
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.itemNative}>{item.native}</Text>
                                <Text style={styles.itemTranslated}>{item.translated}</Text>
                            </View>

                            {item.liked ?
                            <AntDesign name="heart" size={22} color="red" /> : 
                            <AntDesign name="hearto" size={22} color="red" />}
                            
                        </View >
                )}}
                keyExtractor={item => item.native}
                showsVerticalScrollIndicator={false}
                style={styles.sectionList}
            />}

            <View style={[styles.sectionWrapper, {marginTop: 10}]}>
                <Text style={styles.sectionHeading}>Words list</Text>
                <TouchableOpacity style={styles.sectionShow} onPress={() => showHandler('words')}>
                    <Text style={styles.sectionShowText}>{show.words ? 'Hide' : 'Open'}</Text>
                    <AntDesign name={show.words ? 'down' : 'up'} size={20} color={colors.primary} />
                </TouchableOpacity>
            </View>
            {show.words && <FlatList
                data={words}
                renderItem={({item}) => {
                    return (
                        <View style={styles.item}>
                            <View style={styles.itemWords}>
                                <Text style={[styles.itemNative, styles.itemNativeWords]}>{item.native}</Text>
                                <Text style={styles.itemTranslated}>{item.translated}</Text>
                            </View>

                            <AntDesign name='hearto' size={22} color='red' />
                        </View >
                )}}
                keyExtractor={item => item.translated}
                showsVerticalScrollIndicator={false}
                style={styles.sectionList}
            />}

        </View >
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
});
