import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import * as Linking from 'expo-linking';
import Firebase from './src/Config';

import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
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
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
