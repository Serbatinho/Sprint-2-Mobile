// Home.js

import React, { useState, useEffect, useCallback } from 'react';
import { View, Modal, Text, TouchableOpacity, Image, Button } from 'react-native';
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={globalStyles.stdViewMovel} >
                    <Image source={require('../assets/brand.png')} style={{ width: 150, height: 150, marginBottom: 20 }} />
                    <Text style={globalStyles.linkBold}>
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

            <Image source={require('../assets/brand.png')} style={{ width: 350, height: 350, marginBottom: 20 }} />

            {user?.email && (
                <Text style={globalStyles.linkBold}>Bem-vindo, {user.email}!</Text>
            )}

            {user && (
                <View>

                    <TouchableOpacity
                        style={globalStyles.stdButton}
                        onPress={() => navigation.navigate('UserPanel')}
                    >
                        <Text style={globalStyles.stdButtonText}>User Area</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyles.stdButton}
                        onPress={handleSignOut}
                    >
                        <Text style={globalStyles.stdButtonText}>Logout</Text>
                    </TouchableOpacity>

                </View>
            )}

            {!user && (
                <View style={{ marginTop: 20 }}>
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
