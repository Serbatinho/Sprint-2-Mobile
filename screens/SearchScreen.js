import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/base/globalStyles';
import { collection, getDocs } from 'firebase/firestore'; // Adicione esta linha
import { useNavigation } from '@react-navigation/native';
import { db } from '../src/Config'; // Adicione esta linha para importar db

const SearchScreen = ({ navigation }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [allData, setAllData] = useState([]);

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "dados"));
            let fetchedData = [];
            querySnapshot.forEach((doc) => {
                fetchedData.push(doc.data());
            });
            setSearchResults(fetchedData);
            setAllData(fetchedData); // Salva todos os dados
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Verifica se o texto de pesquisa está vazio
        if (searchText === '') {
            // Se estiver vazio, exibe todos os resultados
            setSearchResults(allData); // Usando allData aqui
        } else {
            // Caso contrário, aplica a lógica de filtragem normal
            const filteredResults = allData.filter(item =>
                item.nome.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    }, [searchText, allData]); // searchText e allData são as dependências deste useEffect

    const handleUserPress = (userData) => {
        navigation.navigate('UserDetailsScreen', { userData });
    };

    return (
        <View style={globalStyles.stdFullView}>
            <TextInput
                style={globalStyles.stdInputSearch}
                placeholder="Pesquisar"
                placeholderTextColor="#888"
                onChangeText={setSearchText}
            />

            <View style={globalStyles.stdViewContent}>
                <ScrollView style={globalStyles.scrollViewContainer}>
                    {searchResults.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleUserPress(item)}>
                            <View style={globalStyles.cardContainer}>
                                <View style={globalStyles.iconCircle}></View>
                                <View style={globalStyles.cardTextContainer}>
                                    <Text style={globalStyles.cardTitle}>{item.nome}</Text>
                                    <Text style={globalStyles.linkBold}>{item.usuario}</Text>
                                    <Text style={globalStyles.linkBold}>{item.descricao}</Text>
                                    <Text style={globalStyles.cardDescription}>{item.situacao}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default SearchScreen;
