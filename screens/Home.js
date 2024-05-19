import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Modal, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const Home = ({ navigation }) => {


    const [modalVisible, setModalVisible] = useState(true);

    useFocusEffect(
        React.useCallback(() => {
            // Show modal every time the screen is focused
            setModalVisible(true);
            return () => {
                // Cleanup if needed when the screen is unfocused
            };
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
                    <Text style={styles.modalText}>Bem-vindo!</Text>
                    <Button
                        title="Começar"
                        onPress={() => {
                            setModalVisible(false);

                        }}
                    />
                </View>
            </Modal>

            <Button
                title="Começar"
                onPress={() => {

                    navigation.navigate('Login');
                }}
            />


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
});
