import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import style from '../style'
import { images } from '../images/images'

function CardView() {
    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <View style={style.cardContainer}>
                    <View style={style.textView}>
                        <Text style={style.cardtext}>Great Deal</Text>
                        <Image source={images?.mobile} style={style.cardImage} />
                        <Text style={style.text}>realme 8 2021</Text>
                        <Text style={style.text}>From Rs8,999*</Text>
                    </View>
                </View>
                <View style={style.cardContainer}>
                    <View style={style.textView}>
                        <Text style={style.cardtext}>Great Deal</Text>
                        <Image source={images?.mobile} style={style.cardImage} />
                        <Text style={style.text}>realme 8 2021</Text>
                        <Text style={style.text}>From Rs8,999*</Text>
                    </View>
                </View>
                <View style={style.cardContainer}>
                    <View style={style.textView}>
                        <Text style={style.cardtext}>Great Deal</Text>
                        <Image source={images?.mobile} style={style.cardImage} />
                        <Text style={style.text}>realme 8 2021</Text>
                        <Text style={style.text}>From Rs8,999*</Text>
                    </View>
                </View>

            </View>



        </>

    )
}

export default CardView