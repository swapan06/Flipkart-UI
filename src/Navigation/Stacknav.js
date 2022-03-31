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
import Footer from '../components/ShopScreens/Footer';
import Notification from '../components/ShopScreens/Notification';
import MyCart from '../components/ShopScreens/MyCart';
import Menu from '../components/ShopScreens/Menu';
import LogIn from '../components/ShopScreens/LogIn';
import Email from '../components/ShopScreens/Email';
// --------------------------------------------------------------Stack Naviigation-------------------------------------------
function Stacknav() {
    return (
        <Stack.Navigator options={{ headerShown: false }}>


        </Stack.Navigator>
    )
}

export default Stacknav;