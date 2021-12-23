// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  NativeBaseProvider,   Icon, Button, Input, Stack, FormControl } from 'native-base';
import LoginForm from './components/LoginForm';
import DetailsScreen from './Screens/Details';
import TabScreen from './Screens/TabScreen';



const Stack2 = createNativeStackNavigator();

function App() {
    return (
        <NativeBaseProvider>
        <NavigationContainer>
            <Stack2.Navigator initialRouteName="Login">
                <Stack2.Screen name="Login" component={LoginForm} />
                <Stack2.Screen name="Register" component={DetailsScreen} />
                <Stack2.Screen name="Admins Questions" component={TabScreen} />
            </Stack2.Navigator>
        </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default App;