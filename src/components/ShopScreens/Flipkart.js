import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    FlatList,
    TextInput,
    View,
    Image,
    Button,
} from 'react-native';
import style from '../../style/style';
import images from '../../assets/images/flipcart.jpeg'


function Flipkart({ navigation }) {
    //-----------------------------------Notification View---------------------------//
    return (
        <View style={style.flipkartcontainer}>
            <View>
                <Image source={images} style={style.notification}></Image>
            </View>
            <View style={style.flipkartView}>
                <Text style={style.flipkarttext}>Your cart is empty!</Text>
                <Text>Add items to it now.</Text>
            </View>
            <View style={style.flipkartbutton}>
                <Button title="Shop Now" color='#2874f0' onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}


export default Flipkart