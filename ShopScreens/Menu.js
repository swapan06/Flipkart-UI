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
import style from '../style';
import { images } from '../images/images';


function Menu({ navigation }) {
    return (
        <View style={{ backgroundColor: '#2874f0', }}>
            <View style={[style.Menuheader]}>
                <View style={{ flex: 0.7, flexDirection: 'row' }}>
                    <Image source={images?.homeic} style={style.menu} />
                    <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: 'bold', color: 'white' }}>Home</Text>
                </View>
                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Image source={images?.icons} style={style.flipicon} />
                </View>
            </View>
        </View>
    )
}

export default Menu