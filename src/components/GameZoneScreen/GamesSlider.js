import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import style from '../../style/style'
import { gamedata } from '../Flatlist/gamebanner'
import { images } from '../../assets/images/images'
// ---------------------------------------------Game Slider Using FLATLIST---------------------------------
function GamesSlider() {
    return (
        <>
            <FlatList
                horizontal={true}
                data={gamedata}
                showsHorizontalScrollIndicator={false}
                renderItem={(element) => {
                    return (
                        <View style={{ flexDirection: "row" }}>
                            <View style={style.gameContainer}>
                                <Image source={element.item.uri} style={style.gameImage} />
                                <Text style={style.gmtext}>{element.item.price}</Text>
                                <Text style={style.gametext1}>{element.item.price1}</Text>
                            </View>
                            <View style={style.btnView}>
                                <Text style={{ color: "#0c105e", paddingHorizontal: 25, paddingVertical: 5, fontWeight: "bold" }}>Play</Text>
                            </View>
                        </View>











                    )
                }
                } />

        </>
    )
}

export default GamesSlider