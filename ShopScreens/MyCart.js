import React from 'react'
import style from '../style'
import { View, Text, Image, Button } from 'react-native'
import { images } from '../images/images'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Notification from './Notification'
import { color } from 'react-native-elements/dist/helpers'
import Flipkart from './Flipkart'
import Grocery from './Grocery'
const Tab = createMaterialTopTabNavigator()

function MyCart() {
    return (
        <Tab.Navigator screenOptions={{ swipeEnabled: false, tabBarInactiveTintColor: 'black', tabBarPressColor: 'white' }} initialRouteName="Home" tabBarOptions={{ activeTintColor: "#2874f0", labelStyle: { fontSize: 12 }, style: { backgroundColor: 'white' } }}>
            <Tab.Screen name="Flipkart" component={Flipkart} options={{ tabBarLabel: "flipkart" }} />
            <Tab.Screen name="Grocery" component={Grocery} options={{ tabBarLabel: "grocery" }} />



        </Tab.Navigator>

    )
}

export default MyCart