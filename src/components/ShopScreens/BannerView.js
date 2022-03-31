import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'

function BannerView() {
    return (
        // ----------------------------------Banner Image--------------------//
        <>
            <View style={style.bannerContainer}>
                <Image source={images?.banner} style={style.bannerimg} />
            </View>
        </>

    )
}

export default BannerView