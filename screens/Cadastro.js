import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../src/Config';

import { collection, getDocs, getFirestore } from "firebase/firestore";





// const db = Firebase.firestore();
const auth = getAuth();

const Cadastro = ({ navigation }) => {
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


    // useEffect(async () => {

    //     const querySnapshot = await getDocs(collection(db, "teste"));
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });




    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then(userCredential => {
                Alert.alert('Usuário criado com sucesso!');
                navigation.navigate('Login');
            })
            .catch(error => {
                console.log("Usuario não criado")
                Alert.alert(error.message);
            });
    };

    return (


        <View style={styles.container}>



            {dados.length > 0 ? (
                dados.map((item, index) => (
                    <Text key={index}

                        style={styles.title}
                    >
                        {item.Nome}
                    </Text>
                ))
            ) : (
                <Text style={styles.title}>Aguarde, carregando dados...</Text>
            )}

            <Text style={styles.title}>Cadastro</Text>
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
                value={senha}
                onChangeText={setSenha}
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
});
