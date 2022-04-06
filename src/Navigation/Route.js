import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();



export default function Route() {
    const userStatus = useSelector(state => state.userStatus);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userStatus ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}