import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../src/context/AuthContext';

import globalStyles from '../styles/base/globalStyles';

const Home = ({ navigation }) => {
    const { user, handleSignOut } = useAuth();
    const [modalVisible, setModalVisible] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setModalVisible(true);
            return () => { };
        }, [])
    );

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        {user ? `Bem-vindo, ${user.email}!` : 'Olá!'}
                    </Text>
                    <TouchableOpacity
                        style={globalStyles.stdButton}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    >
                        <Text style={globalStyles.stdButtonText}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {user?.email && (
                <Text style={styles.modalText}>Bem-vindo, {user.email}!</Text>
            )}

            {user && (
                <TouchableOpacity
                    style={globalStyles.stdButton}
                    onPress={handleSignOut}
                >
                    <Text style={globalStyles.stdButtonText}>Sair</Text>
                </TouchableOpacity>
            )}

            {!user && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={globalStyles.stdButton}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={globalStyles.stdButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={globalStyles.stdButton}
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        <Text style={globalStyles.stdButtonText}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    welcome: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});
