import React from 'react'
import style from '../style'
import { View, Text, Image, Button } from 'react-native'
import { images } from '../images/images'


function Notification({ navigation }) {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: "center" }}>
                <View style={{}}>
                    <Image source={images?.notify} style={style.notification}></Image>
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <Text style={{ fontSize: 18, color: 'black', marginBottom: 5 }}>No notification yet</Text>
                    <Text>Simply browse, create a wishlist</Text>
                    <Text>or make a purchase</Text>
                </View>
                <View style={{ marginVertical: 8, padding: 8, }}>
                    <Button title="Continue Shopping" color='#2874f0' onPress={() => navigation.goBack()} />
                </View>

            </View>
        </>
    )
}

export default Notification