import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'

// -------------------------------------SuperCoin Screen Header-----------------------------
function Header2() {
    return (
        <>
            <View style={{ backgroundColor: '#2874f0', }}>
                <View style={[style.coinheader]}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <Image source={images?.shopmenu} style={style.coinheadermenu} />
                        <Text style={style.coin1text}>SuperCoin</Text>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={style.coinview}>
                            <Text style={style.cointext}><Image source={images?.coin} style={style.coinimg} /> 3</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>

    )
}

export default Header2