import React from 'react'
import { Text, View, Image, TextInput, FlatList, } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { icondata } from '../../Navigation/Iconlist'
import style from '../../style/style'


function IconFlatlist() {
    return (
        <>
            <View>
                <Divider></Divider>
            </View>
            <View style={{ alignItems: "center" }}>
                <FlatList
                    horizontal={true}
                    data={icondata}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(element) => {
                        return (<View>
                            <Image source={element.item.uri} style={style.iconlist} />
                            <Text style={style.icontext}>{element.item.title}</Text>
                            <Text style={style.icontext1}>{element.item.title1}</Text>

                        </View>



                        )
                    }
                    } />
            </View>
        </>
    )
}

export default IconFlatlist