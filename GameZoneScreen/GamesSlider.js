import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import style from '../style'
import { gamedata } from '../gamebanner'
import { images } from '../images/images'

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
                                <Text style={style.text}>{element.item.price}</Text>
                                <Text style={style.gametext1}>{element.item.price1}</Text>
                            </View>
                            <View style={{ position: "absolute", bottom: 31, right: 25, backgroundColor: "white", borderRadius: 20 }}>
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