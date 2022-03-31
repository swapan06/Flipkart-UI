import React from 'react'
import { Text, View, Image, TextInput, FlatList } from 'react-native'
import style from '../../style/style'
import { DATA } from '../../Navigation/banner1'

function BannerFlatlist() {
    return (
        //   ------------------------------------- Banner Flatlist-------------------------//
        <>
            <View style={style.container1}>
                <Text style={style.bannertext}>Sponsored</Text>

                <FlatList
                    horizontal={true}
                    data={DATA}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(element) => {
                        return (<View style={style.listcontainer}>
                            <Image source={element.item.uri} style={style.bannerlist} />
                            <Text style={style.flattext}>{element.item.price}</Text>


                        </View>

                        )
                    }
                    } />
            </View>

        </>


    )
}

export default BannerFlatlist