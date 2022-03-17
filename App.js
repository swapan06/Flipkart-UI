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
import banner from './Banner';
import Gridimages from './Gridimages';
import { DATA } from './banner1';
import { scrolldata } from './Storieslist';
import Header from './Screens/Header';
import MyFlatlist from './Screens/MyFlatlist';
import GridView from './Screens/GridView';
import BannerView from './Screens/BannerView';
import CardView from './Screens/CardView';
import CardDeal from './Screens/CardDeal';
import BannerFlatlist from './Screens/BannerFlatlist';
import StoriesView from './Screens/StoriesView';


const App = () => {
  return (
    <ScrollView>
      <SafeAreaView style={style.container}>
        <Header />
        <MyFlatlist />
        <GridView />
        <BannerView />
        <CardView />
        <CardDeal />
        <BannerFlatlist />
        <StoriesView />
      </SafeAreaView>
    </ScrollView>

  )
};


export default App;
