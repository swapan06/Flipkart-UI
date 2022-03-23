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
import Header2 from './Header2';
import SavingView from './SavingView';
import TabNavigation from './TabNavigation';
import IconFlatlist from './IconFlatlist';
import BannerList from './BannerList';
import SuperFlash from './SuperFlash';
import Cards from './Cards';
import EarnView from './EarnView';
import RewardsView from './RewardsView';

function CoinScreen() {
    return (
        <SafeAreaView style={style.container}>

            <View>
                <StatusBar barStyle='dark-content' backgroundColor={"transparent"}></StatusBar>
            </View>
            <ScrollView>
                <Header2 />
                <SavingView />
                <TabNavigation />
                <IconFlatlist />
                <BannerList />
                <SuperFlash />
                <Cards />
                <EarnView />
                <RewardsView />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CoinScreen