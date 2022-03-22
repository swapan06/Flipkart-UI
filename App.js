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
import { images } from './images/images';
import style from './style';
{/*import banner from './Banner';
import Gridimages from './Gridimages';
import { DATA } from './banner1';
import { scrolldata } from './Storieslist';
import { Discountdata } from './Discountlist';
import { footerdata } from './Footerlist';
import Header from './HomeScreens/Header';
import MyFlatlist from './HomeScreens/MyFlatlist';
import GridView from './HomeScreens/GridView';
import BannerView from './HomeScreens/BannerView';
import CardView from './HomeScreens/CardView';
import CardDeal from './HomeScreens/CardDeal';
import BannerFlatlist from './HomeScreens/BannerFlatlist';
import StoriesView from './HomeScreens/StoriesView';
import DiscountView from './HomeScreens/DiscountView';
import Footer from './HomeScreens/Footer';
import Firstbanner from './HomeScreens/Flashbanner';
import Flashbanner from './HomeScreens/Flashbanner';
import PopularView from './HomeScreens/PopularView';*/}
import Header from './SupercoinScreen/Header';
import SavingView from './SupercoinScreen/SavingView';
import TabNavigation from './SupercoinScreen/TabNavigation';
import IconFlatlist from './SupercoinScreen/IconFlatlist';
import BannerList from './SupercoinScreen/BannerList';
import SuperFlash from './SupercoinScreen/SuperFlash';
import Cards from './SupercoinScreen/Cards';
import EarnView from './SupercoinScreen/EarnView';
import RewardsView from './SupercoinScreen/RewardsView';


const App = () => {
  return (


    <SafeAreaView style={style.container}>

      <View>
        <StatusBar barStyle='dark-content' backgroundColor={"transparent"}></StatusBar>
      </View>
      <ScrollView>
        <Header />
        <SavingView />
        <TabNavigation />
        <IconFlatlist />
        <BannerList />
        <SuperFlash />
        <Cards />
        <EarnView />
        <RewardsView />
      </ScrollView>

      {/*<Header />
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
  <Footer />*/}

    </SafeAreaView>



  )
};


export default App;
