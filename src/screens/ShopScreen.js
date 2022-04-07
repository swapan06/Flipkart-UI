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
import banner from '../components/Flatlist/Banner';
import Gridimages from '../components/Flatlist/Gridimages';
import { DATA } from '../../Navigation/banner1';
import { scrolldata } from '../../Navigation/Storieslist';
import { Discountdata } from '../../Navigation/Discountlist';
import { footerdata } from './Footerlist';
import MyHeader from '../components/ShopScreens/MyHeader';
import MyFlatlist from '../components/ShopScreens/MyFlatlist';
import GridView from '../components/ShopScreens/GridView';
import BannerView from '../components/ShopScreens/BannerView';
import CardView from '../components/ShopScreens/CardView';
import CardDeal from '../components/ShopScreens/CardDeal';
import BannerFlatlist from '../components/ShopScreens/BannerFlatlist';
import StoriesView from '../components/ShopScreens/StoriesView';
import DiscountView from '../components/ShopScreens/DiscountView';
import Flashbanner from '../components/ShopScreens/Flashbanner';
import PopularView from '../components/ShopScreens/PopularView';


// --------------------------------Shop Wrap Component-------------------------------
function ShopScreen({ navigation }) {
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
export default ShopScreen