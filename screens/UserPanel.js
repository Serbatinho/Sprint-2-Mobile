import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '../src/context/AuthContext';
import globalStyles from '../styles/base/globalStyles';
import { useNavigation } from '@react-navigation/native';

const UserPanel = () => {
    const { user, handleSignOut } = useAuth();
    const navigation = useNavigation();

    const handleLogout = () => {
        handleSignOut();
        navigation.navigate('Home');
    };

    const handleNavigateToSearch = () => {
        navigation.navigate('SearchScreen');
    };

    return (
        <View style={globalStyles.stdFullView}>
            <View style={globalStyles.welcomeContainer}>
                <View style={globalStyles.avatarPlaceholder}>
                </View>
                <Text
                    style={globalStyles.cardTitleWhite}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    Bem-vindo(a), {user ? user.email : 'Usuário'}
                </Text>
            </View>

            <View style={globalStyles.stdViewContent}>
                <ScrollView style={globalStyles.scrollViewContainer}>

                    {/* Primeiro card com onPress handler */}
                    <TouchableOpacity onPress={handleNavigateToSearch}>
                        <View style={globalStyles.cardContainer}>
                            <View style={globalStyles.iconCircle}>
                            </View>
                            <View style={globalStyles.cardTextContainer}>
                                <Text style={globalStyles.cardTitle}>
                                    Descubra Opiniões
                                </Text>
                                <Text style={globalStyles.cardDescription}>
                                    Analise a opinião dos usuários sobre qualquer pessoa do Twitter! Utilizando inteligência artificial, oferecemos resumos precisos baseados nos últimos 30 dias de atividade do usuário pesquisado.
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Outros cards */}
                    <View style={globalStyles.cardContainer}>
                        <View style={globalStyles.iconCircle}>
                        </View>
                        <View style={globalStyles.cardTextContainer}>
                            <Text style={globalStyles.cardTitle}>
                                Análise em Tempo Real
                            </Text>
                            <Text style={globalStyles.cardDescription}>
                                Obtenha insights em tempo real!
                                Nosso algoritmo analisa milhares de tweets para fornecer uma visão instantânea dos sentimentos e opiniões do Twitter sobre qualquer usuário.
                            </Text>
                        </View>
                    </View>

                    <View style={globalStyles.cardContainer}>
                        <View style={globalStyles.iconCircle}>
                        </View>
                        <View style={globalStyles.cardTextContainer}>
                            <Text style={globalStyles.cardTitle}>
                                Análise de Sentimento
                            </Text>
                            <Text style={globalStyles.cardDescription}>
                                Compreenda o sentimento por trás das postagens, com relatórios que mostram se o sentimento geral é positivo, negativo ou neutro.
                            </Text>
                        </View>
                    </View>

                </ScrollView>

                {user && (
                    <TouchableOpacity
                        style={globalStyles.stdButton}
                        onPress={handleLogout}
                    >
                        <Text style={globalStyles.stdButtonText}>Logout</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default UserPanel;
