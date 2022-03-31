import React from 'react';
import { useSelector } from 'react-redux';
import Email from '../components/ShopScreens/Email';
import LogIn from '../components/ShopScreens/LogIn';
import { Login } from '../Screens';



export default function (Stack) {
    return (
        <>
            <Stack.Screen name='LogIn' component={LogIn} options={{ headerShown: true, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />
            <Stack.Screen name='Email' component={Email} options={{ headerShown: true, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />
        </>
    );
}