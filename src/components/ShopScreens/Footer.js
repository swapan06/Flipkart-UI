import React from 'react'
import { Text, View, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();
import CoinScreen from '../../../../Flipkart-UI/src/screens/CoinScreen'
import Notification from './Notification'
import ShopScreen from '../../screens/ShopScreen'
import GameScreen from '../../screens/GameScreen'

// --------------------------------------------Footer Navigation-----------------------------------
function Footer({ navigation }) {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name='Shop' component={ShopScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.shop} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />
                <Tab.Screen name='SuperCoin' component={CoinScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.supercoin} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />
                <Tab.Screen name='SuperCoin1' component={ShopScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <TouchableOpacity><Image source={images?.home} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} /></TouchableOpacity>)
                }} />
                <Tab.Screen name='Credit' component={Notification} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.credit} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />
                <Tab.Screen name='Game Zone' component={GameScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.gamezone} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />
            </Tab.Navigator>
        </>
    )
}
export default Footer