
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
import banner from '../Banner';
import Gridimages from '../Gridimages';
import { DATA } from '../banner1';
import { scrolldata } from '../Storieslist';
import { Discountdata } from '../Discountlist';
import { footerdata } from './Footerlist';
import MyHeader from './MyHeader';
import MyFlatlist from './MyFlatlist';
import GridView from './GridView';
import BannerView from './BannerView';
import CardView from './CardView';
import CardDeal from './CardDeal';
import BannerFlatlist from './BannerFlatlist';
import StoriesView from './StoriesView';
import DiscountView from './DiscountView';
import Footer from './Footer';
import Firstbanner from './Flashbanner';
import Flashbanner from './Flashbanner';
import PopularView from './PopularView';


function ShopWrap({ navigation }) {
    return (
        <SafeAreaView style={style.container}>
            <View>
                <StatusBar barStyle='light-content' backgroundColor={"#2874f0"}></StatusBar>
            </View>

            <ScrollView>
                <MyHeader navigation={navigation} />
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



        </SafeAreaView>



    )
}

export default ShopWrap