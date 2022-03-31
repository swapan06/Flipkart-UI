import React from 'react'
import { View, Text, Image, } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'

// ---------------------------------Superflash  Container --------------------------------
function SuperFlash() {
    return (
        <>
            <View style={{ backgroundColor: '#2874f0', marginTop: 10 }}>
                <View style={[style.coinheader2]}>
                    <View style={{ flex: 0.5, flexDirection: 'row', }}>
                        <Text style={style.playtext}>SuperCoin</Text>
                        <Text style={style.flashtext}>18m:43s</Text>
                    </View>
                </View>
                <View style={[style.coinheader2]}>
                    <View style={{ flex: 0.7, flexDirection: 'row', }}>
                        <Text style={style.Dailytext}>Play Daily with <Image source={images?.coin} style={style.coin2img}></Image> 5 SuperCoin</Text>
                    </View>
                </View>
                <View style={style.nextview}>
                    <Image source={images?.nextblue} style={style.nextimg1} />
                </View>
            </View>
        </>
    )
}
export default SuperFlash