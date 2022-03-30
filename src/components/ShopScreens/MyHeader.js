import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
import Menu from './Menu'



function Header({ navigation }) {


    return (
        <>

            <View style={{ backgroundColor: '#2874f0', }}>
                <View style={[style.header]}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Image source={images?.menuIcon} style={style.headermenu} />
                        </TouchableOpacity>
                        <Image source={images?.logoIcon} style={style.logo} />
                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification')}  >
                            <Image source={images?.bellIcon} style={style.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('My Cart')}  >
                            <Image source={images?.cartIcon} style={style.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                            <Text style={style.Logintext}>Log In</Text>
                        </TouchableOpacity>



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