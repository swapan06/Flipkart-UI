import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


import AuthStack from './AuthStack';

import MainStack from './MainStack';
const Stack = createStackNavigator();

export default function Route() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {false ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}