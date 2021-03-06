import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'

function CardDeal({ navigation }) {
    return (
        <>
            {/* ------------------------------------ Card Deal-------------------------------- */}
            <View style={{ flexDirection: "row" }}>
                <View style={style.dealContainer}>
                    <View style={style.textdView}>
                        <Text style={style.cardtext}>Last Day of The Sale</Text>
                        <Image source={images?.mobile} style={style.dealImage} />
                        <Text style={style.text}>Blockbuster Deals on Tvs</Text>
                        <Text style={style.text}>From Rs8,999*</Text>
                    </View>
                </View>
                <View style={style.dealContainer}>
                    <View style={style.textView}>
                        <Text style={style.cardtext}>Last Day of The Sale</Text>
                        <Image source={images?.mobile} style={style.dealImage} />
                        <Text style={style.text}>Grocery Rs 1 Deals For You!</Text>
                        <Text style={style.text}>From Rs8,999*</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
export default CardDeal