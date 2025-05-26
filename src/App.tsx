/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import {Home} from './screens/Home';
import Toast from 'react-native-toast-message';
import { styles } from './styles/style';
import Login  from './screens/Login';
import Register from './screens/Register';
import Safety from './screens/Safety';
import ContactsScreens from './screens/Contacts';
import Historys from './screens/Historys';


const Stack = createStackNavigator();

/**
 * App component is the root component of the application.
 * It sets up the navigation stack with three screens: Home, Users, and Login.
 * The initial screen is set to Login, and headers are hidden for all screens.
 * It also wraps the application with GluestackUIProvider for UI theming
 * and GestureHandlerRootView for gesture handling.
 */

export default function App() {
  return (
    <GestureHandlerRootView style={styles.home}>
      <NavigationContainer>
        <GluestackUIProvider config={config}>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Safety" component={Safety} />
            <Stack.Screen name="Contacts" component={ContactsScreens} />
            <Stack.Screen name="History" component={Historys} />
          </Stack.Navigator>
        </GluestackUIProvider>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
}
