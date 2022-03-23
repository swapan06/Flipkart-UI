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
} from 'react-native';
import { images } from '../images/images';
import style from '../style';
import GameHeader from './GameHeader';
import GamesSlider from './GamesSlider';
import GetCoinsView from './GetCoinsView';


function GameWrap() {
    return (
        <SafeAreaView style={style.container}>

            <View>
                <StatusBar barStyle='dark-content' backgroundColor={"transparent"}></StatusBar>
            </View>
            <ScrollView>
                <GameHeader />
                <GamesSlider />
                <GetCoinsView />

            </ScrollView >



        </SafeAreaView>



    )
}

export default GameWrap