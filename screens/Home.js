import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Button, Modal, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../src/context/AuthContext'; // Importe o contexto de autenticação

const Home = ({ navigation }) => {
    const { user, handleSignOut } = useAuth(); // Obtenha o usuário e a função handleSignOut do contexto de autenticação
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
                    <Text style={styles.modalText}>Bem-vindo, {user?.email}!</Text>
                    <Button
                        title="Começar"
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    />
                </View>
            </Modal>

            <Text style={styles.welcome}>Bem-vindo, {user?.email}!</Text>

            {user && (
                <Button
                    title="Sair"
                    onPress={handleSignOut} // Chame a função handleSignOut do contexto de autenticação
                />
            )}

            {!user && (
                <View style={styles.buttonContainer}>
                    <Button
                        title="Login"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        title="Cadastro"
                        onPress={() => navigation.navigate('Cadastro')}
                    />
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
