import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { banner } from '../../Navigation/Banner'
import style from '../../style/style'
// --------------------------------------Using Flatlist-----------------------------
function MyFlatlist() {

    return (<FlatList
        horizontal={true}
        data={banner}
        showsHorizontalScrollIndicator={false}
        renderItem={(element) => {
            return (<Image source={element.item.uri} style={style.bannerSize} />)
        }
        } />
    )
}

export default MyFlatlist