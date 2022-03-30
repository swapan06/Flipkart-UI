import React from 'react'
import style from '../../style/style'
import { Text, View, Image, TextInput } from 'react-native'
import { images } from '../../assets/images/images'

function Flashbanner() {
    return (
        <>
            <View style={style.bannerView}>
                <Image source={images?.bannerView} style={style.bannersale} />
            </View>
        </>
    )
}

export default Flashbanner