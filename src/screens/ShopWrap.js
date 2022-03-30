
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
import banner from '../../../Flipkart-UI/src/Navigation/Banner';
import Gridimages from '../../../Flipkart-UI/src/Navigation/Gridimages';
import { DATA } from '../../Navigation/banner1';
import { scrolldata } from '../../Navigation/Storieslist';
import { Discountdata } from '../../Navigation/Discountlist';
import { footerdata } from './Footerlist';
import MyHeader from '../../../Flipkart-UI/src/components/ShopScreens/MyHeader';
import MyFlatlist from '../../../Flipkart-UI/src/components/ShopScreens/MyFlatlist';
import GridView from '../../../Flipkart-UI/src/components/ShopScreens/GridView';
import BannerView from '../../../Flipkart-UI/src/components/ShopScreens/BannerView';
import CardView from '../../../Flipkart-UI/src/components/ShopScreens/CardView';
import CardDeal from '../../../Flipkart-UI/src/components/ShopScreens/CardDeal';
import BannerFlatlist from '../../../Flipkart-UI/src/components/ShopScreens/BannerFlatlist';
import StoriesView from '../../../Flipkart-UI/src/components/ShopScreens/StoriesView';
import DiscountView from '../../../Flipkart-UI/src/components/ShopScreens/DiscountView';
import Footer from '../../../Flipkart-UI/src/components/ShopScreens/Footer';
import Flashbanner from '../../../Flipkart-UI/src/components/ShopScreens/Flashbanner';
import PopularView from '../../../Flipkart-UI/src/components/ShopScreens/PopularView';


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