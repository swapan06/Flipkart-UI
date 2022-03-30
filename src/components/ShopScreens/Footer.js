import React from 'react'
import { Text, View, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();
import GridView from './GridView'
import PopularView from './PopularView'
import ShopWrap from '../../../../Flipkart-UI/src/screens/ShopWrap'
import CoinScreen from '../../../../Flipkart-UI/src/screens/CoinScreen'
import GameWrap from '../../../../Flipkart-UI/src/screens/GameWrap'
import Notification from './Notification'


function Footer({ navigation }) {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name='Shop' component={ShopWrap} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.shop} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />
                <Tab.Screen name='SuperCoin' component={CoinScreen} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.supercoin} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />
                <Tab.Screen name='SuperCoin1' component={ShopWrap} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <TouchableOpacity><Image source={images?.home} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} /></TouchableOpacity>)
                }} />
                <Tab.Screen name='Credit' component={Notification} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.credit} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />
                <Tab.Screen name='Game Zone' component={GameWrap} options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <Image source={images?.gamezone} style={{ height: 20, width: 20, tintColor: focused ? '#2874f0' : '#626363' }} />)
                }} />


            </Tab.Navigator>
            {/*<View style={style.FooterIcons}>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.shop} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>Shop</Text>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.supercoin} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>SuperCoin</Text>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.home} style={style.Icons} /></TouchableOpacity>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.credit} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>Credit</Text>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.gamezone} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>GameZone</Text>
                </View>
        </View>*/}
        </>

    )
}

export default Footer