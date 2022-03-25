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
import Footer from './Footer';
import Notification from './Notification';
import { color } from 'react-native-elements/dist/helpers';
import MyCart from './MyCart';
import Menu from './Menu';

function Stacknav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Footer} />
            <Stack.Screen name='Notification' component={Notification} options={{ headerShown: true, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />
            <Stack.Screen name='My Cart' component={MyCart} options={{ headerShown: true, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />
            <Stack.Screen name='Menu' component={Menu} />
        </Stack.Navigator>
    )
}

export default Stacknav