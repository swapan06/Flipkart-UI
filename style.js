import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    //Header style//
    container: {
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
        color: 'black',
        textAlign: 'left',
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
        backgroundColor: '#f5f5f5',
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
        marginVertical: 10,
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

})




export default style;