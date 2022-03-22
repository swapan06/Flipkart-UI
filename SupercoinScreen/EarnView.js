import React from 'react'
import { View, Text, Image } from 'react-native'
import style from '../style'
import { images } from '../images/images'

function EarnView() {
    return (
        <>
            <View style={{ marginVertical: 10, }}>
                <View style={[style.coinheader2]}>
                    <View style={{ flex: 0.7, flexDirection: 'row', }}>
                        <Text style={style.playtext}>Earn Bonus SuperCoins</Text>
                    </View>
                </View>
                <View style={style.nextview2}>
                    <Image source={images?.nextblue} style={style.nextimg1} />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={style.earnContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.dry} style={style.EarnImage} />
                        <Text style={style.dailytext}>Dry Fruits</Text>
                        <Text style={style.earntext}>Earn Extra Upto <Image source={images?.coin} style={style.coin2img} /> 100</Text>
                        <Text style={style.greentext}>Shop Now</Text>
                    </View>
                </View>
                <View style={style.earnContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.sweets} style={style.EarnImage} />
                        <Text style={style.dailytext}>Sweets</Text>
                        <Text style={style.earntext}>Earn Extra Upto <Image source={images?.coin} style={style.coin2img} /> 30</Text>
                        <Text style={style.greentext}>Shop Now</Text>
                    </View>
                </View>
            </View>

        </>
    )
}

export default EarnView