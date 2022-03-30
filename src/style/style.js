import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    //Header style//
    container: {
        backgroundColor: 'white',
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#2874f0',
        justifyContent: 'space-between'
    },
    headermenu: {
        height: 30,
        width: 20,

    },
    logo: {
        height: 30,
        width: 80,
    },
    icon: {
        height: 20,
        width: 20,
    },
    searchbar: {
        alignItems: 'center',
        marginBottom: 10,
    },
    textInput: {
        backgroundColor: 'white',
        width: '95%',
        height: 40,
        color: 'black',
    },
    searchIcon: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    //banner style//
    bannersale: {
        width: width / 1.02,
        height: width / 5,
        resizeMode: "contain",
        marginHorizontal: 2,
    },
    bannerView: {
        width: width / 1.05,
        height: width / 5,
    },
    bannerSize: {
        height: 170,
        width: 360,
        marginHorizontal: 2,
    },
    //GridView style//

    gridView: {
        height: 60,
        width: 60,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        justifyContent: 'center',
        borderWidth: 1.3,
        borderColor: '#672d6e',
    },

    gridtext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 12,
        justifyContent: 'center',
    },
    //BannerView style//
    bannerContainer: {
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',

    },
    bannerimg: {
        height: width / 5,
        width: '95%',
        margin: 10,
        borderRadius: 6,
    },

    //CardView style//
    cardContainer: {
        borderWidth: 1,
        width: '30%',
        height: width / 3,
        margin: 6,
        borderRadius: 6,
        borderColor: '#c2c4c4',
    },
    textView: {
        width: '100%',
    },
    cardtext: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#587d28',
        backgroundColor: '#cadeaf',
        textAlign: 'center',
        borderRadius: 2.9,
    },
    cardImage: {
        height: width / 5.4,
        width: '100%',
        resizeMode: 'contain',
        justifyContent: 'center',
        backgroundColor: '#dbeeff',
    },

    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        backgroundColor: "#f5f5f",
        marginHorizontal: 2,

    },

    //CardDeal style//
    dealContainer: {
        borderWidth: 1,
        width: '45%',
        height: width / 2.4,
        margin: 10,
        borderRadius: 6,
        borderColor: '#c2c4c4',

        flex: 1,
    },
    dealImage: {
        height: width / 3.9,
        width: '100%',
        resizeMode: 'contain',
        justifyContent: 'center',
        backgroundColor: '#dbeeff',

    },

    //BannerFlatlist style//
    container1: {
        backgroundColor: '#f5f5f5',
        marginVertical: 5,
        flex: 1,
    },
    bannertext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 10,

    },
    listcontainer: {
        height: width / 1.9,
        width: 250,
        margin: 6,
        resizeMode: 'contain',
    },
    bannerlist: {
        height: width / 2.2,
        width: '100%',
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: '#c2c4c4',
    },
    flattext: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingVertical: 8,
    },

    //StoriesView style//

    storyContainer: {
        borderWidth: 1,
        width: width / 3,
        height: width / 2,
        margin: 4,
        borderRadius: 6,
        borderColor: '#c2c4c4',
        backgroundColor: 'white',
    },

    storyImage: {
        height: width / 3,
        width: '100%',
        resizeMode: 'contain',
        justifyContent: 'center',
        marginVertical: 5,
    },

    storytext: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 8,

    },

    //DiscountView//
    lootView: {
        height: width / 2,
        width: '100%',
    },
    discountcontainer: {
        height: width / 1.3,
        marginVertical: 10,
        backgroundColor: '#2874f0',
    },
    dealtext: {
        fontSize: 16,
        color: 'white',
        paddingVertical: 25,
        marginHorizontal: 8,
    },
    Viewtext: {
        height: 50,
        width: 100,
        marginTop: 21,
        alignItems: "center",
    },
    Viewbtn: {
        backgroundColor: "white",
        padding: 6,
        color: "grey",
        borderRadius: 5
    },

    disContainer: {
        width: '45%',
        height: width / 2.4,
        marginVertical: 2,
        marginHorizontal: 8,

    },
    disImage: {
        height: width / 2.7,
        width: width / 2.2,
        resizeMode: 'contain',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    distext: {
        fontSize: 12,
        width: width / 2.2,
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 4,
    },
    offertext: {
        fontSize: 12,
        width: width / 2.2,
        color: '#388e3c',
        textAlign: 'center',
        backgroundColor: 'white',
        paddingBottom: 10,

    },

    //Footer style//
    IconsView: {
        alignItems: "center",
        marginHorizontal: 8,

    },
    Icons: {
        height: 25,
        width: 25,
        marginHorizontal: 5,
    },
    FooterIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 5
    },
    //Footer Text//
    IconsText: {
        color: 'black',
        fontSize: 12,
    },
    //PopularView//
    PopularText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        backgroundColor: '#f7f7f7',
        padding: 12,

    },
    cardContainer1: {
        width: '30%',
        height: width / 3.4,
        margin: 6,
        borderRadius: 6,

    },
    cardImage1: {
        height: width / 3.3,
        width: '100%',
        resizeMode: 'contain',
        justifyContent: 'center',
        borderRadius: 6,
    },
    textv: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 2,
    },
    text1: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 2,

    },


    //////SupercoinScreen css/////////

    coinheader: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    coinheadermenu: {
        height: 30,
        width: 20,
    },
    coin1text: {
        fontSize: 18,
        marginLeft: 10,
        color: 'black',
    },
    cointext: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        color: 'black',
    },
    coinbtn: {
        backgroundColor: "white",
        padding: 6,
        color: "grey",
        borderRadius: 5
    },
    coinimg: {
        height: 20,
        width: 20,
    },
    coinview: {
        height: 30,
        width: 50,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#e8e7e6',
    },
    //SavingView//
    saving: {
        marginHorizontal: 16,
        flexDirection: "row",
        backgroundColor: '#d6f5d5',
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 3,
    },
    savingInput: {
        padding: 8,
        color: 'black',
    },
    nextimg: {
        height: 20,
        width: 20,
        marginRight: 10
    },
    //TabNavigation//
    tabtext1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2874f0',
        padding: 4,
    },
    tabtext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    Divider: {
        color: '#d9dadb',

        //IconFlatlist//
    },
    iconlist: {
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    icontext: {
        fontSize: 10,
        color: 'black',
        marginTop: 4,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        textAlign: 'center',
    },
    icontext1: {
        fontSize: 10,
        color: 'black',
        marginHorizontal: 20,
        textAlign: 'center',

    },
    //BannerList//
    CoinView: {
        marginHorizontal: 4,
        marginVertical: 12,
    },
    coinlist: {
        height: width / 2,
        width: width / 1.1,
        borderRadius: 8,
        padding: 6,
    },
    //SuperFlash//
    playtext: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    coin2img: {
        height: 11,
        width: 11,
    },
    flashtext: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5,
        backgroundColor: '#ffd9c2',
        padding: 3,
        borderRadius: 4,
    },
    coinheader2: {

        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between'

    },
    Dailytext: {
        fontSize: 11,

    },
    nextview: {
        alignItems: "center",
        position: "absolute",
        right: 10,
        top: 8,
    },
    nextimg1: {
        height: 25,
        width: 32,
    },
    //Cards//
    bgcard: {
        width: '23%',
        height: width / 2.4,
        marginVertical: 10,
        marginHorizontal: 4,
        borderRadius: 4,
        backgroundColor: '#dbc469',
    },
    cardImage2: {
        height: width / 2.7,
        width: '80%',
        resizeMode: 'contain',
        justifyContent: 'center',
        borderRadius: 4,
        marginHorizontal: 8,
        marginVertical: 8

    },
    bgcard1: {
        width: '23%',
        height: width / 2.4,
        marginVertical: 10,
        marginHorizontal: 4,
        borderRadius: 4,
        backgroundColor: '#683975',
    },
    bgcard2: {
        width: '23%',
        height: width / 2.4,
        marginVertical: 10,
        marginHorizontal: 4,
        borderRadius: 4,
        backgroundColor: '#3c4729',
    },
    nextview2: {
        alignItems: "center",
        position: "absolute",
        right: 10,
    },
    //EarnView and RewardsView//
    earnContainer: {
        borderWidth: 1,
        width: '45%',
        height: width / 1.6,
        margin: 8,
        borderRadius: 4,
        borderColor: '#c2c4c4',
    },
    EarnImage: {
        height: width / 2.25,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 4,
    },
    earntext: {
        fontsize: 12,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 4,
    },
    greentext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#388e3c',
        marginHorizontal: 4
    },
    dailytext: {
        marginHorizontal: 4,
        fontSize: 11,
    },

    //GameZoneScreen//

    //Header//
    gameheader: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    gameheadermenu: {
        height: 30,
        width: 20,
    },
    gametext: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        color: 'black',
    },
    gamebtn: {
        backgroundColor: "white",
        padding: 6,
        color: "grey",
        borderRadius: 5
    },
    gameimg: {
        height: 20,
        width: 20,
    },
    gameview: {
        height: 30,
        width: 50,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#e8e7e6',
        backgroundColor: '#ededed'
    },

    //GameSlider//
    gameContainer: {
        borderWidth: 1,
        width: width / 1.1,
        height: width / 1.6,
        margin: 15,
        borderRadius: 10,
        borderColor: '#c2c4c4',
        backgroundColor: '#0c105e',
        flex: 1,
    },
    gameImage: {
        height: width / 2.2,
        width: width / 1.1,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: 8,
    },
    gmtext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginHorizontal: 6,
        marginTop: 8,

    },
    gametext1: {
        fontSize: 12,
        color: 'white',
        textAlign: 'left',
        marginHorizontal: 6,

    },
    btnView: {
        position: "absolute",
        bottom: 31,
        right: 25,
        backgroundColor: "white",
        borderRadius: 20,
    },


    getContainer: {
        borderWidth: 1,
        width: '45%',
        height: width / 3.9,
        margin: 15,
        borderRadius: 10,
        borderColor: '#c2c4c4',

        flex: 1,
    },
    gettext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        marginHorizontal: 8,
        marginVertical: 10,
    },
    gemimg: {
        height: 12,
        width: 12,
    },
    gettext1: {
        fontSize: 12,
        color: 'grey',
        textAlign: 'left',
        marginHorizontal: 8,
        marginVertical: 12,
    },
    divide: {
        width: '75%',
        marginHorizontal: 10,
        borderWidth: 5,
        borderColor: '#e0e0e0',
        borderRadius: 3
    },
    getdolar: {
        height: 25,
        width: 25,
        marginLeft: 10,

    },
    //GameCard//
    gamecardContainer: {
        borderWidth: 1,
        width: '45%',
        height: width / 1.6,
        margin: 10,
        borderRadius: 10,
        borderColor: '#c2c4c4',
        backgroundColor: '#f7a054'
    },
    gamecardContainer1: {
        borderWidth: 1,
        width: '45%',
        height: width / 1.6,
        margin: 10,
        borderRadius: 10,
        borderColor: '#c2c4c4',
        backgroundColor: '#31852e'
    },
    gamecardContainer2: {
        borderWidth: 1,
        width: '45%',
        height: width / 1.6,
        margin: 10,
        borderRadius: 10,
        borderColor: '#c2c4c4',
        backgroundColor: '#bda440'
    },
    gamecardContainer3: {
        borderWidth: 1,
        width: '45%',
        height: width / 1.6,
        margin: 10,
        borderRadius: 10,
        borderColor: '#c2c4c4',
        backgroundColor: '#f0a2fa'
    },
    gamecardContainer4: {
        borderWidth: 1,
        width: '45%',
        height: width / 1.6,
        margin: 10,
        borderRadius: 10,
        borderColor: '#c2c4c4',
        backgroundColor: '#18cded'
    },
    gamecardContainer5: {
        borderWidth: 1,
        width: '45%',
        height: width / 1.6,
        margin: 10,
        borderRadius: 10,
        borderColor: '#c2c4c4',
        backgroundColor: '#8e70b5'
    },

    gamecardImage: {
        height: width / 2.25,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 7,
    },
    gamecardtext: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 6,
        marginTop: 8
    },
    greentext: {
        fontSize: 12,
        color: 'white',
        marginHorizontal: 6
    },
    dailytext: {
        marginHorizontal: 4,
        fontSize: 11,
    },
    winimg: {
        height: width / 2,
        width: '98%',
        marginHorizontal: 5

    },
    notification: {
        height: width / 2,
        width: width / 1.6,

    },
    //menuscreen//
    Menuheader: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#2874f0',
        justifyContent: 'space-between'
    },
    menu: {
        height: 20,
        width: 20,
    },
    flipicon: {
        height: 25,
        width: 25,
    },







})




export default style;