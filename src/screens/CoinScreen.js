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
import Header2 from '../../../Flipkart-UI/src/components/SupercoinScreen/Header2';
import SavingView from '../../../Flipkart-UI/src/components/SupercoinScreen/SavingView';
import TabNavigation from '../../../Flipkart-UI/src/components/SupercoinScreen/TabNavigation';
import IconFlatlist from '../../../Flipkart-UI/src/components/SupercoinScreen/IconFlatlist';
import BannerList from '../../../Flipkart-UI/src/components/SupercoinScreen/BannerList';
import SuperFlash from '../../../Flipkart-UI/src/components/SupercoinScreen/SuperFlash';
import Cards from '../../../Flipkart-UI/src/components/SupercoinScreen/Cards';
import EarnView from '../../../Flipkart-UI/src/components/SupercoinScreen/EarnView';
import RewardsView from '../../../Flipkart-UI/src/components/SupercoinScreen/RewardsView';

function CoinScreen() {
    return (
        <SafeAreaView style={style.container}>
            {/* -------------------------------Status Bar-------------------------------- */}
            <View>
                <StatusBar barStyle='dark-content' backgroundColor={"transparent"}></StatusBar>
            </View>
            {/* ------------------------component Pass ----------------------- */}
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