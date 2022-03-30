import React from 'react'
import { Text, View, Image, TextInput, Button, FlatList } from 'react-native'
import style from '../../style/style';
import { images } from '../../assets/images/images';
import { Discountdata } from '../../Navigation/Discountlist';

function DiscountView() {
    return (
        <>
            <View style={style.imgcontainer}>
                <Image source={images?.loot} style={style.lootView} />
            </View>
            <FlatList
                data={Discountdata}
                renderItem={(element) => {
                    return (
                        <View style={style.discountcontainer}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={style.dealtext}>Deals Of The Day</Text>
                                <View style={style.Viewtext}>
                                    <Text style={style.Viewbtn}>View  all </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>

                                <View style={style.disContainer}>
                                    <View>
                                        <Image source={element.item.uri} style={style.disImage} />
                                        <Text style={style.distext}>{element.item.title}</Text>
                                        <Text style={style.offertext}>{element.item.offer}</Text>
                                    </View>
                                </View>
                                <View style={style.disContainer}>
                                    <View>
                                        <Image source={element.item.uri} style={style.disImage} />
                                        <Text style={style.distext}>{element.item.title}</Text>
                                        <Text style={style.offertext}>{element.item.offer}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    )
                }}



            />


        </>

    )
}

export default DiscountView