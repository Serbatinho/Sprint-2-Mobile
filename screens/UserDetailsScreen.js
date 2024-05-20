import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/base/globalStyles';
import { TouchableOpacity } from 'react-native-web';

const UserDetailsScreen = ({ route }) => {
    const { userData } = route.params;

    return (


        <View style={globalStyles.stdFullView}>


            <View style={globalStyles.stdViewContent}>
                <View>
                    <Text style={globalStyles.userDetailName}>{userData.nome}</Text>
                    <Text style={globalStyles.userDetailUser}>{userData.usuario}</Text>
                    <Text style={globalStyles.userDetailData}>{userData.descricao}</Text>
                    <Text style={globalStyles.userDetailData}>{userData.situacao}</Text>

                    <TouchableOpacity
                        style={globalStyles.stdButton}
                        onPress={() => console.log("Implementar")}
                    >
                        <Text style={globalStyles.stdButtonText}>Gerar Analise</Text>
                    </TouchableOpacity>

                    <Text style={globalStyles.linkContainer}>
                        <Text onPress={() => navigation.navigate('Home')} style={globalStyles.linkBold}>Voltar ao Inicio</Text>
                    </Text>

                </View>

            </View>
        </View>
    );
};

export default UserDetailsScreen;
