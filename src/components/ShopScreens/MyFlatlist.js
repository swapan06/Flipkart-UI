import React from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { banner } from '../Flatlist/Banner'
import style from '../../style/style'
// --------------------------------------Using Flatlist-----------------------------
function MyFlatlist() {
    const click = (title) => {

    }

    return (<FlatList
        horizontal={true}
        data={banner}
        showsHorizontalScrollIndicator={false}
        renderItem={(element) => {
            return (
                <TouchableOpacity onPress={() => click(element.item)}>
                    <Image source={element.item.uri} style={style.bannerSize} />
                </TouchableOpacity>)
        }
        } />
    )
}

export default MyFlatlist