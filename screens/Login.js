import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../src/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import globalStyles from '../styles/base/globalStyles';

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
        <View style={globalStyles.stdFullView}>
            <Text style={globalStyles.stdPageTitle}>Login</Text>
            <View style={globalStyles.stdViewContent}>
                {successMessage ? (
                    <Text style={globalStyles.successMessage}>{successMessage}</Text>
                ) : null}
                {errorMessage ? (
                    <Text style={globalStyles.errorMessage}>{errorMessage}</Text>
                ) : null}
                <Text style={globalStyles.stdInputMarker}>Email</Text>
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
                <TouchableOpacity onPress={handleLogin} style={globalStyles.stdButton}>
                    <Text style={globalStyles.stdButtonText}>Continuar</Text>
                </TouchableOpacity>
                <Text style={globalStyles.linkContainer}>
                    <Text onPress={() => navigation.navigate('Cadastro')} style={globalStyles.linkBold}>Cadastro</Text>
                    <Text> | </Text>
                    <Text onPress={() => navigation.navigate('PasswordReset')} style={globalStyles.link}>Esqueceu a sua senha?</Text>
                </Text>
            </View>
        </View>
    );
};

export default Login;
