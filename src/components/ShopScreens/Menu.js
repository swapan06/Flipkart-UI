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
import { menudata } from '../Flatlist/MenuList';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useDispatch } from 'react-redux';
import { Continue } from '../../redux/actions/auth';
// ------------------------------------Menu Container----------------------------------


function Menu({ navigation }) {
    const dispatch = useDispatch()
    const click = (title) => {
        console.log(title.key)
        if (title.key === "18") {
            dispatch(Continue())
        } else if (title.key === "1") {
            navigation.navigate('Login')
        }
        else if (title.key === "2") {
            navigation.navigate('Login')
        }
        else if (title.key === "3") {
            navigation.navigate('Login')
        }
        else if (title.key === "4") {
            navigation.navigate('Login')
        }
        else if (title.key === "5") {
            navigation.navigate('Login')
        }
        else if (title.key === "6") {
            navigation.navigate('Login')
        }
        else if (title.key === "7") {
            navigation.navigate('Login')
        }
        else if (title.key === "8") {
            navigation.navigate('Login')
        }
        else if (title.key === "9") {
            navigation.navigate('Login')
        }
        else if (title.key === "10") {
            navigation.navigate('Login')
        }
        else if (title.key === "11") {
            navigation.navigate('Login')
        }
        else if (title.key === "12") {
            navigation.navigate('Login')
        }
        else if (title.key === "13") {
            navigation.navigate('Login')
        }
        else if (title.key === "14") {
            navigation.navigate('Login')
        }
        else if (title.key === "15") {
            navigation.navigate('Login')
        }
        else if (title.key === "16") {
            navigation.navigate('Login')
        }
        else if (title.key === "17") {
            navigation.navigate('Login')
        }
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
                                        <Text style={style.flattext}>{element.item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Divider />
                            </>
                        )
                    }} />
            </View>
        </View>
    )
}
export default Menu