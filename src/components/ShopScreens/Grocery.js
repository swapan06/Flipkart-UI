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
import { images } from '../../../../Flipkart-UI/src/assets/images/images';
// --------------------------------------------Grocery View with navigation-------------------------------------
function Grocery({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#f9f7fc', justifyContent: 'center', alignItems: "center", }}>
            <View>
                <Image source={images?.grocery} style={style.notification}></Image>
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: 'black', marginBottom: 5, fontWeight: 'bold' }}>Your basket is empty!</Text>
                <Text>Add items to it now.</Text>
            </View>
            <View style={{ marginVertical: 8, padding: 8, }}>
                <Button title="Shop Now" color='#2874f0' onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

export default Grocery