import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Firebase from './src/Config';

import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro';
import { AuthProvider } from './src/context/AuthContext';
import PasswordReset from './screens/PasswordReset';
import UserPanel from './screens/UserPanel';
import SearchScreen from './screens/SearchScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        cardStyle: {
          backgroundColor: '#317BEF',
          borderWidth: 0,
        },
        headerStyle: {
          backgroundColor: '#317BEF',
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        cardShadowEnabled: false,
        elevation: 0,
        shadowOpacity: 0,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="UserPanel" component={UserPanel} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </AuthProvider>
  );
}





