import React from 'react'
import { Text, View, Image, TextInput, FlatList, } from 'react-native'
import { coindata } from '../Flatlist/coinlist'
import style from '../../style/style'
// ----------------------------------Banner Flatlist------------------------------

function BannerList() {
    return (

        <FlatList
            horizontal={true}
            data={coindata}
            showsHorizontalScrollIndicator={false}
            renderItem={(element) => {
                return (
                    <View>
                        <View style={style.CoinView}>
                            <Image source={element.item.uri} style={style.coinlist} />
                        </View>
                    </View>



                )
            }
            } />

    )
}

export default BannerList