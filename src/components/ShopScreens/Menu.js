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
    Button,
    TouchableOpacity,
} from 'react-native';
import style from '../../style/style'
import { images } from '../../assets/images/images'
import { menudata } from '../../Navigation/MenuList';
import { Divider } from 'react-native-elements/dist/divider/Divider';
// ------------------------------------Menu Container----------------------------------


function Menu({ navigation }) {
    const click = (title) => {

    }
    return (
        <View style={style.menucontainer}>
            <View style={[style.Menuheader]}>
                <View style={{ flex: 0.7, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}  >
                        <Image source={images?.homeic} style={style.menu} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: 'bold', color: 'white' }}>Home</Text>
                </View>
                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Image source={images?.icons} style={style.flipicon} />
                </View>
            </View>
            {/* ---------------------------------------Menu Flatlist---------------------------- */}
            <View style={{ backgroundColor: 'white' }} >
                <FlatList
                    vertical={true}
                    data={menudata}
                    showsVerticalScrollIndicator={false}
                    renderItem={(element) => {
                        return (
                            <>
                                {/* ----------------------------------On Press Function------------------- */}
                                <TouchableOpacity onPress={() => click(element.item)}>
                                    <View style={{ flexDirection: "row", paddingVertical: 6, }}>
                                        <Image source={element.item.uri} style={style.menulist} />
                                        <Text style={style.flattext}>{element.item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Divider />
                            </>
                        )
                    }
                    } />
            </View>
        </View>
    )
}

export default Menu