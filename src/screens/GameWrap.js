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
import style from '../style/style';
import GameHeader from '../../../Flipkart-UI/src/components/GameZoneScreen/GameHeader';
import GamesSlider from '../../../Flipkart-UI/src/components/GameZoneScreen/GamesSlider';
import GetCoinsView from '../../../Flipkart-UI/src/components/GameZoneScreen/GetCoinsView';
import GameCards from '../../../Flipkart-UI/src/components/GameZoneScreen/GameCards';


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
                <GameCards />

            </ScrollView >



        </SafeAreaView>



    )
}

export default GameWrap