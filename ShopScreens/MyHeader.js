import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import style from '../style'
import { images } from '../images/images'


function Header() {
    return (
        <>
            <View style={{ backgroundColor: '#2874f0', }}>
                <View style={[style.header]}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <Image source={images?.menuIcon} style={style.headermenu} />
                        <Image source={images?.logoIcon} style={style.logo} />
                    </View>

                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Image source={images?.bellIcon} style={style.icon} />
                        <Image source={images?.cartIcon} style={style.icon} />
                    </View>
                </View>
                <View style={style.searchbar}>
                    <TextInput style={style.textInput} ><Image source={images?.searchIcon} style={style.icon} />Search for Products and Brands </TextInput>
                </View>
            </View>


        </>
    )
}

export default Header