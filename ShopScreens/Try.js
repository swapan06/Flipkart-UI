import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    FlatList,
    TextInput,
    View,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
import Footer from '../ShopScreens/Footer';
import Notification from './Notification';
import { color } from 'react-native-elements/dist/helpers';

function Try() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Footer} />
            <Stack.Screen name='Notification' component={Notification} options={{ headerShown: true, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />

        </Stack.Navigator>
    )
}

export default Try