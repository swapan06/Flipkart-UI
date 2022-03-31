import React from 'react'
import { View, Text, Image } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
import { Divider } from 'react-native-elements/dist/divider/Divider'
// ------------------------------------Coins View-------------------------------------
function GetCoinsView() {
    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <View style={style.getContainer}>
                    <View style={style.textdView}>
                        <Text style={style.gettext}>Get <Image source={images?.coin} style={style.coin2img}></Image> 10 Supercoins</Text>
                        <Divider style={style.divide}></Divider>
                        <View style={style.btnView}>
                            <Text style={{ color: "#0c105e", paddingHorizontal: 2, paddingVertical: 5, fontWeight: "bold" }}><Image source={images?.dollar} style={style.getdolar}></Image></Text>
                        </View>
                        <Text style={style.gettext1}><Image source={images?.gem} style={style.gemimg}></Image> Win 1996 more games to unlock</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
export default GetCoinsView