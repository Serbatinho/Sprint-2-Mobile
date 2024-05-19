import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { auth } from '../src/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setSuccessMessage("Login realizado com sucesso!");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigation.navigate('Home'); // Navegar para a tela Home ou outra tela após o login
                }, 3000);
            })
            .catch((error) => {
                console.log("Erro ao fazer login");
                setErrorMessage("Erro ao fazer login: " + error.message);
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            {successMessage ? (
                <Text style={styles.successMessage}>{successMessage}</Text>
            ) : null}

            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Entrar" onPress={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
                <Text style={styles.link}>Esqueceu a sua senha?</Text>
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
    successMessage: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
    },
    errorMessage: {
        fontSize: 18,
        color: 'red',
        marginBottom: 10,
    },
    link: {
        color: 'blue',
        marginTop: 15,
    },
});
