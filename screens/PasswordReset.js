import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { auth } from '../src/Config';
import { sendPasswordResetEmail } from 'firebase/auth';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccessMessage('Email de redefinição de senha enviado com sucesso!');
                setEmail('');
            })
            .catch((error) => {
                setErrorMessage('Erro ao enviar email de redefinição de senha: ' + error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Redefinir Senha</Text>

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

            <Button title="Enviar Email de Redefinição de Senha" onPress={handleResetPassword} />
        </View>
    );
};

export default PasswordReset;

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
