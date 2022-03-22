import React from 'react'
import { Text, View, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import style from '../style'
import { images } from '../images/images'

function Footer() {
    return (
        <>
            <View style={style.FooterIcons}>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.shop} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>Shop</Text>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.supercoin} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>SuperCoin</Text>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.home} style={style.Icons} /></TouchableOpacity>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.credit} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>Credit</Text>
                </View>
                <View style={style.IconsView}>
                    <TouchableOpacity><Image source={images?.gamezone} style={style.Icons} /></TouchableOpacity>
                    <Text style={style.IconsText}>GameZone</Text>
                </View>
            </View>
        </>

    )
}

export default Footer