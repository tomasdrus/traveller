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
                        <Text style={styles.buttonCloseText}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000' + opacity(60),
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 100,
    },
    buttonClose: {
        backgroundColor: colors.gray100,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    buttonCloseText: {
        color: '#374151',
    },
    textTranslated: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '600',
        marginTop: 50,
        marginBottom: 10,
        color: colors.primary,
    },
    textNative: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 70,
        color: colors.gray700,
    },
})

export default ModalDetail
