import React from 'react'
import { View, Text, Image } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
// ---------------------------------------- GameZone Header-------------------------------------
function GameHeader() {
    return (
        <>
            <View style={{ backgroundColor: '#2874f0', }}>
                <View style={[style.gameheader]}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <Image source={images?.shopmenu} style={style.gameheadermenu} />
                        <Text style={style.coin1text}>Game Zone</Text>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={style.gameview}>
                            <Text style={style.gametext}><Image source={images?.gem} style={style.gameimg} /> 5   </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default GameHeader