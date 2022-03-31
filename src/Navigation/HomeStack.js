import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Footer from '../components/ShopScreens/Footer';
import Menu from '../components/ShopScreens/Menu';
import MyCart from '../components/ShopScreens/MyCart';
import Notification from '../components/ShopScreens/Notification';
import { Home } from '../Screens';


const Stack = createStackNavigator();
export default function () {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Footer} options={{ headerShown: false }} />
            <Stack.Screen name='Notification' component={Notification} options={{ headerShown: true, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />
            <Stack.Screen name='My Cart' component={MyCart} options={{ headerShown: true, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />
            <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}