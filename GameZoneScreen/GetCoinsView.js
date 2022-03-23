import React from 'react'
import { View, Text, Image } from 'react-native'
import style from '../style'
import { images } from '../images/images'
import { Divider } from 'react-native-elements/dist/divider/Divider'

function GetCoinsView() {
    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <View style={style.getContainer}>
                    <View style={style.textdView}>
                        <Text style={style.gettext}>Get <Image source={images?.coin} style={style.coin2img}></Image> 10 Supercoins</Text>
                        <Divider style={{ width: '80%', marginHorizontal: 10, borderWidth: 5, borderColor: '#e0e0e0', borderRadius: 3 }}></Divider>
                        <Text style={style.gettext1}><Image source={images?.gem} style={style.gemimg}></Image> Win 1995 moe games to unlock</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default GetCoinsView