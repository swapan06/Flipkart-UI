import React from 'react'
import { Text, View, Image } from 'react-native'
import style from '../../style/style'
import { images } from '../images/images'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import IconFlatlist from './IconFlatlist'
const Tab = createMaterialTopTabNavigator()

// --------------------------------------Supercoin Tab Navigation---------------------------------------
function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ swipeEnabled: false, tabBarInactiveTintColor: 'black', tabBarPressColor: 'white' }} tabBarOptions={{
            activeTintColor: "#2874f0", labelStyle: { fontSize: 14, fontWeight: 'bold' }
        }}>
            <Tab.Screen name="All" component={IconFlatlist} options={{ tabBarLabel: "all" }} />
            <Tab.Screen name="Use Coins" component={IconFlatlist} options={{ tabBarLabel: "use coins" }} />
            <Tab.Screen name="Earn Coins" component={IconFlatlist} options={{ tabBarLabel: "earn coins" }} />
        </Tab.Navigator>

    )
}

export default TabNavigation