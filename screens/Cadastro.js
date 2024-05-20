import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { auth } from '../src/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import globalStyles from '../styles/base/globalStyles';
import { TouchableOpacity } from 'react-native-web';

const Cadastro = ({ navigation }) => {
    // Cadastro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = () => {
        if (password.length < 6) {
            setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("As senhas não coincidem.");
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                setSuccessMessage("Usuário criado com sucesso!");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigation.navigate('Login');
                }, 3000);
            })
            .catch((error) => {
                console.log("Usuário não criado");
                Alert.alert(error.message);
            });
    };

    return (
        <View style={globalStyles.stdFullView}>

            <Text style={globalStyles.stdPageTitle}>Cadastro</Text>

            <View style={globalStyles.stdViewContent}>

                {successMessage ? (
                    <Text style={globalStyles.successMessage}>{successMessage}</Text>
                ) : null}

                {errorMessage ? (
                    <Text style={globalStyles.errorMessage}>{errorMessage}</Text>
                ) : null}

                <Text style={globalStyles.stdInputMarker}>E-mail</Text>
                <TextInput
                    style={globalStyles.stdInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={globalStyles.stdInputMarker}>Senha</Text>
                <TextInput
                    style={globalStyles.stdInput}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={globalStyles.stdInputMarker}>Confirmar Senha</Text>
                <TextInput
                    style={globalStyles.stdInput}
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity onPress={handleSignUp} style={globalStyles.stdButton}>
                    <Text style={globalStyles.stdButtonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default Cadastro;

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
});
