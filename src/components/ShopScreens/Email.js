import React from 'react'
import { View, Text, Images, TouchableOpacity, TextInput, Button } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
import LogIn from './LogIn'

function Email({ navigation }) {
    return (
        <>
            {/* -------------------------------LogiText--------------------------- */}
            <View>
                <View>
                    <Text style={style.logtext}>Log in for the best experience</Text>
                    <Text style={style.log1text}>Experience the all new Flipkart!</Text>
                    <TextInput keyboardType='email-address' style={style.input}></TextInput>
                </View>
                <View style={{ alignItems: "flex-end", marginHorizontal: 12 }}>
                    <Text onPress={() => navigation.navigate(LogIn)} style={{ color: '#2874f0', fontWeight: 'bold' }}>Use Phone-Number</Text>
                </View>
                <View>
                    <Text style={style.termtext}>By continuing, you agree to Flipkart's Terms of Use and</Text>
                    <Text style={style.term1text}>Privacy Policy</Text>
                </View>
            </View>
            {/* ----------------------------------Login TextInput---------------------- */}
            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                <View style={{ margin: 11 }}>
                    <Button title='Continue' color='#f2570f' onPress={() => navigation.navigate('Home')} ></Button>
                </View>
            </View>
        </>
    )
}

export default Email