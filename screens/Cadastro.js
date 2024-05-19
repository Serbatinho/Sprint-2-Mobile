import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

import { db, auth } from '../src/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";

const Cadastro = ({ navigation }) => {
    // Aquisição dos usuários
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "teste"));
                let fetchedData = [];
                querySnapshot.forEach((doc) => {
                    fetchedData.push(doc.data());
                });
                setDados(fetchedData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Aqui");
        console.log(dados);
    }, [dados]);

    // Cadastro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <View style={styles.container}>
            {dados.length > 0 ? (
                dados.map((item, index) => (
                    <Text key={index} style={styles.title}>
                        {item.nome}
                    </Text>
                ))
            ) : (
                <Text style={styles.title}>Aguarde, carregando dados...</Text>
            )}

            <Text style={styles.title}>Cadastro</Text>

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
            <Button title="Cadastrar" onPress={handleSignUp} />
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
