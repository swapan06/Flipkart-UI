import React from 'react'
import style from '../../style/style'
import { Text, View, Image, TextInput } from 'react-native'
import { images } from '../../assets/images/images'

function Flashbanner() {
    return (
        <>
            {/* -------------------------------Banner Image---------------------- */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={style.bannerView}>
                    <Image source={images?.bannerView} style={style.bannersale} />
                </View>
            </View>
        </>
    )
}

export default Flashbanner