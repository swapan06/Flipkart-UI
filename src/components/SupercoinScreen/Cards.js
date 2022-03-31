import React from 'react'
import { View, Text, Image } from 'react-native'
import { images } from '../../assets/images/images'
import style from '../../style/style'

// ------------------------------------Cards---------------------------------
function Cards() {
    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <View style={style.bgcard}>
                    <Image source={images?.doll} style={style.cardImage2} />
                </View>
                <View style={style.bgcard1}>
                    <Image source={images?.doll} style={style.cardImage2} />
                </View>
                <View style={style.bgcard2}>
                    <Image source={images?.doll} style={style.cardImage2} />
                </View>
                <View style={style.bgcard}>
                    <Image source={images?.doll} style={style.cardImage2} />
                </View>
            </View>
        </>
    )
}

export default Cards