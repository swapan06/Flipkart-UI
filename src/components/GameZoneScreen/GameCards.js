import React from 'react'
import { View, Text, Image } from 'react-native'
import { images } from '../../assets/images/images';
import style from '../../style/style';

// --------------------------------------------Game View Cards-----------------------------------------------
function GameCards() {
    return (
        <>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={style.gamecardContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.leaugue} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Cricket League</Text>
                        <Text style={style.greentext}><Image style={{ height: 15, width: 20, }} source={images?.gameicon}></Image>  Win 500 SuperCoins</Text>
                    </View>
                </View>
                <View style={style.gamecardContainer1}>
                    <View style={style.textdView}>
                        <Image source={images?.guess} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Guess What?</Text>
                        <Text style={style.greentext}><Image style={{ height: 15, width: 20, }} source={images?.gameicon}></Image>  Win SuperCoins</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={style.gamecardContainer2}>
                    <View style={style.textdView}>
                        <Image source={images?.petgame} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Pet Rush</Text>
                        <Text style={style.greentext}><Image style={{ height: 15, width: 20, }} source={images?.gameicon}></Image>  New Game</Text>
                    </View>
                </View>
                <View style={style.gamecardContainer3}>
                    <View style={style.textdView}>
                        <Image source={images?.forestmatch} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Forest Match</Text>
                        <Text style={style.greentext}><Image style={{ height: 15, width: 20, }} source={images?.gameicon}></Image>  Play now and Win</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={style.gamecardContainer4}>
                    <View style={style.textdView}>
                        <Image source={images?.word} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Play WORDLE</Text>
                        <Text style={style.greentext}><Image style={{ height: 15, width: 20, }} source={images?.gameicon}></Image>  Guess The Word</Text>
                    </View>
                </View>
                <View style={style.gamecardContainer5}>
                    <View style={style.textdView}>
                        <Image source={images?.candy} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Candy Crush Saga</Text>
                        <Text style={style.greentext}><Image style={{ height: 15, width: 20, }} source={images?.gameicon}></Image>   12k people played</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={style.gamecardContainer}>
                    <View style={style.textdView}>
                        <Image source={images?.leaugue} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Earn Extra Upto <Image source={images?.coin} style={style.coin2img} /> 100</Text>
                        <Text style={style.greentext}>Shop Now</Text>
                    </View>
                </View>
                <View style={style.gamecardContainer1}>
                    <View style={style.textdView}>
                        <Image source={images?.guess} style={style.gamecardImage} />
                        <Text style={style.gamecardtext}>Earn Extra Upto <Image source={images?.coin} style={style.coin2img} /> 30</Text>
                        <Text style={style.greentext}>Shop Now</Text>
                    </View>
                </View>
            </View>
            <View>
                <Image style={style.winimg} source={images?.win}></Image>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                    <Text style={style.notetext}><Image style={style.note} source={images?.notepad}></Image>Tell us how to improve.</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f0efeb', marginHorizontal: 15, borderRadius: 6, paddingVertical: 3, marginBottom: 5 }}>
                <View style={{ marginHorizontal: 15, marginVertical: 10 }} >
                    <Text style={style.Helptext}>Help us serve you better!</Text>
                    <Text style={{ marginTop: 22 }}>6 Questions 1 Minute</Text>
                </View>
                <View>
                    <Text style={{ color: "black", paddingHorizontal: 25, marginTop: 50 }}>Take Survey Now</Text>
                </View>
            </View>
        </>
    )
}
export default GameCards