import React from 'react'
import { Text, View, Image } from 'react-native'
import style from '../style'
import { images } from '../images/images'
import { Divider } from 'react-native-elements/dist/divider/Divider'




function TabNavigation() {
    return (
        <View >
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                <Text style={style.tabtext1}>All</Text>
                <Text style={style.tabtext}>Use Coins</Text>
                <Text style={style.tabtext}>Earn Coins</Text>

            </View>
            <Text style={style.Divider} numberOfLines={1}>
                ______________________________________________________________________
            </Text>
        </View>

    )
}

export default TabNavigation