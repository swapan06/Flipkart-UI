import React from 'react'
import { Text, View, Image } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'


function RewardsView() {
    return (
        <>
            <View style={{ marginVertical: 10, }}>
                <View style={[style.coinheader2]}>
                    <View style={{ flex: 0.7, flexDirection: 'row', }}>
                        <Text style={style.playtext}>Latest Video Entertainment Rewards</Text>
                    </View>
                </View>
                <View style={style.nextview2}>
                    <Image source={images?.nextblue} style={style.nextimg1} />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={style.earnContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.movie1} style={style.EarnImage} />
                        <Text style={style.dailytext}>SonyLIV 1 Month Pack</Text>
                        <Text style={style.earntext}>From <Image source={images?.coin} style={style.coin2img} /> 1</Text>
                        <Text style={style.greentext}>Claim Now</Text>
                    </View>
                </View>
                <View style={style.earnContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.movie2} style={style.EarnImage} />
                        <Text style={style.dailytext}>Disney+ Hotstar 1 Year</Text>
                        <Text style={style.earntext}>From <Image source={images?.coin} style={style.coin2img} /> 1</Text>
                        <Text style={style.greentext}>Claim Now</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={style.earnContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.movie3} style={style.EarnImage} />
                        <Text style={style.dailytext}>ZEE5 1 Month Pack</Text>
                        <Text style={style.earntext}>From <Image source={images?.coin} style={style.coin2img} /> 1</Text>
                        <Text style={style.greentext}>Claim Now</Text>
                    </View>
                </View>
                <View style={style.earnContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.movie4} style={style.EarnImage} />
                        <Text style={style.dailytext}>YouTube Premium</Text>
                        <Text style={style.earntext}>From <Image source={images?.coin} style={style.coin2img} /> 1</Text>
                        <Text style={style.greentext}>Claim Now</Text>
                    </View>
                </View>
            </View>

        </>
    )
}

export default RewardsView