/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

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
import style from './style';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



/*import Footer from './HomeScreens/Footer';
import { images } from './images/images';
import style from './style';
import banner from './Banner';
import Gridimages from './Gridimages';
import { DATA } from './banner1';
import { scrolldata } from './Storieslist';
import { Discountdata } from './Discountlist';
import { footerdata } from './Footerlist';
import Header from './ShopScreens/Header';
import MyFlatlist from './ShopScreens/MyFlatlist';
import GridView from './ShopScreens/GridView';
import BannerView from './ShopScreens/BannerView';
import CardView from './ShopScreens/CardView';
import CardDeal from './ShopScreens/CardDeal';
import BannerFlatlist from './ShopScreens/BannerFlatlist';
import StoriesView from './ShopScreens/StoriesView';
import DiscountView from './ShopScreens/DiscountView';
import Footer from './ShopScreens/Footer';
import Firstbanner from './ShopScreens/Flashbanner';
import Flashbanner from './ShopScreens/Flashbanner';
import PopularView from './ShopScreens/PopularView';*/
import Header2 from './SupercoinScreen/Header2';
import SavingView from './SupercoinScreen/SavingView';
import TabNavigation from './SupercoinScreen/TabNavigation';
import IconFlatlist from './SupercoinScreen/IconFlatlist';
import BannerList from './SupercoinScreen/BannerList';
import SuperFlash from './SupercoinScreen/SuperFlash';
import Cards from './SupercoinScreen/Cards';
import EarnView from './SupercoinScreen/EarnView';
import RewardsView from './SupercoinScreen/RewardsView';
import Footer from './ShopScreens/Footer';
import GameHeader from './GameZoneScreen/GameHeader';
import GamesSlider from './GameZoneScreen/GamesSlider';
import { gamedata } from './gamebanner';
import GetCoinsView from './GameZoneScreen/GetCoinsView';
import Stacknav from './ShopScreens/Stacknav';
import Menu from './ShopScreens/Menu';


const App = () => {
  return (
    // <ScrollView>
    // <GameHeader />
    //<GamesSlider />
    //<GetCoinsView />
    //</ScrollView>

    <NavigationContainer>
      {/* <Footer /> */}
      <Stacknav />
    </NavigationContainer>


    // <SafeAreaView style={style.container}>

    //   <View>
    //     <StatusBar barStyle='dark-content' backgroundColor={"transparent"}></StatusBar>
    //   </View>

    //  SuperScreen <ScrollView>
    //     <Header2 />
    //     <SavingView />
    //     <TabNavigation />
    //     <IconFlatlist />
    //     <BannerList />
    //     <SuperFlash />
    //     <Cards />
    //     <EarnView />
    //     <RewardsView />
    //     <Footer />
    //   </ScrollView>

    /* <Header />
      <ScrollView>
        <Flashbanner />
        <MyFlatlist />
        <GridView />
        <BannerView />
        <CardView />
        <CardDeal />
        <BannerFlatlist />
        <StoriesView />
        <DiscountView />
        <PopularView />
      </ScrollView >
  <Footer /> */

    // </SafeAreaView >

  )
};


export default App;
