import React from 'react'
import { View, Text, Images, TouchableOpacity, Button } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'
import Email from './Email'
import PhoneInput from "react-native-phone-number-input"


function LogIn({ navigation }) {
    return (
        <>
            {/* -------------------------------LogiText--------------------------- */}
            <View>
                <View>
                    <Text style={style.logtext}>Log in for the best experience</Text>
                    <Text style={style.log1text}>Experience the all new Flipkart!</Text>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 15 }}>
                    <PhoneInput
                        keyboardType='numeric'
                        containerStyle={{ height: 71, width: '93%', borderRadius: 3, borderWidth: 2, borderColor: '#2874f0' }}
                    >
                    </PhoneInput>
                </View>
                <View style={{ alignItems: "flex-end", marginHorizontal: 12 }}>
                    <Text onPress={() => navigation.navigate(Email)} style={{ color: '#2874f0', fontWeight: 'bold' }}>Use Email-ID</Text>
                </View>
                <View>
                    <Text style={style.termtext}>By continuing, you agree to Flipkart's Terms of Use and</Text>
                    <Text style={style.term1text}>Privacy Policy</Text>
                </View>
            </View>
            {/* ----------------------------------Login TextInput---------------------- */}
            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                <View style={{ margin: 11 }}>
                    <Button title='Continue' color='#f2570f' onPress={() => navigation.goBack()} ></Button>
                </View>
            </View>
        </>
    )
}

export default LogIn