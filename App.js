import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Firebase from './src/Config';

import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro';
import { AuthProvider } from './src/context/AuthContext';
import PasswordReset from './screens/PasswordReset';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
}

// const linking = {
//   prefixes: [Linking.createURL('/')],
//   config: {
//     screens: {
//       Home: '',
//     },
//   },
// };

export default function App() {
  return (
    // <NavigationContainer linking={linking}>
    <AuthProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
