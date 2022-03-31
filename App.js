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
import style from '../Flipkart-UI/src/style/style';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header2 from '../Flipkart-UI/src/components/SupercoinScreen/Header2';
import SavingView from '../Flipkart-UI/src/components/SupercoinScreen/SavingView';
import TabNavigation from '../Flipkart-UI/src/components/SupercoinScreen/TabNavigation';
import IconFlatlist from '../Flipkart-UI/src/components/SupercoinScreen/IconFlatlist';
import BannerList from '../Flipkart-UI/src/components/SupercoinScreen/BannerList';
import SuperFlash from '../Flipkart-UI/src/components/SupercoinScreen/SuperFlash';
import Cards from '../Flipkart-UI/src/components/SupercoinScreen/Cards';
import EarnView from '../Flipkart-UI/src/components/SupercoinScreen/EarnView';
import RewardsView from '../Flipkart-UI/src/components/SupercoinScreen/RewardsView';
import Footer from '../Flipkart-UI/src/components/ShopScreens/Footer';
import GameHeader from '../Flipkart-UI/src/components/GameZoneScreen/GameHeader';
import GamesSlider from '../Flipkart-UI/src/components/GameZoneScreen/GamesSlider';
import { gamedata } from '../Navigation/gamebanner';
import GetCoinsView from '../Flipkart-UI/src/components/GameZoneScreen/GetCoinsView';
import Stacknav from '../Flipkart-UI/src/Navigation/Stacknav';



const App = () => {
  return (

    <NavigationContainer>
      {/* <Footer /> */}
      <Stacknav />
    </NavigationContainer>


  )
};


export default App;
