import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { } from '../src/Config';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
            <Button title="Entrar" onPress={() => { /* Lógica de login */ }} />
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    link: {
        color: 'blue',
        marginTop: 15,
    },
});
