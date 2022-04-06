import React from 'react'
import { Text, View, Image } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
// ---------------------------------------Popular View Using Cards-----------------------------
function PopularView() {
    return (
        <>
            <View >
                <Text style={style.PopularText}>Popular on Flipkart</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={style.cardContainer1}>
                    <Image source={images?.dry} style={style.cardImage1} />
                    <Text style={style.textv}>DryFruits</Text>
                    <Text style={style.text1}>Buy Now</Text>
                </View>
                <View style={style.cardContainer1}>
                    <Image source={images?.sweets} style={style.cardImage1} />
                    <Text style={style.textv}>Sweets</Text>
                    <Text style={style.text1}>Shop Now</Text>
                </View>
                <View style={style.cardContainer1}>
                    <Image source={images?.swings} style={style.cardImage1} />
                    <Text style={style.textv}>Swing</Text>
                    <Text style={style.text1}>Explore Now</Text>
                </View>
            </View>



        </>
    )
}

export default PopularView