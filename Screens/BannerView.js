import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import style from '../style'
import { images } from '../images/images'

function BannerView() {
    return (
        <>
            <View style={style.bannerContainer}>
                <Image source={images?.banner} style={style.bannerimg} />
            </View>
        </>

    )
}

export default BannerView