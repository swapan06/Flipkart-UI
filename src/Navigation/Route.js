import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import home from '../redux/reducers/home';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();



export default function Route() {
    const userData = useSelector(state => state.home);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userData ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}