import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'

import { colors, opacity } from '../config/colors'

const ModalDetail = ({ visible = false, setVisible, item }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.textTranslated}>{item.translated}</Text>
                    <Text style={styles.textNative}>{item.native}</Text>

                    <Pressable style={styles.buttonClose} onPress={() => setVisible(false)}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000' + opacity(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        elevation: 100,
    },
    buttonClose: {
        backgroundColor: 'gray',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    textTranslated: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    textNative: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 50,
    },
})

export default ModalDetail
