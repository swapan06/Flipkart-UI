import React from 'react'
import { Text, View, Image, TextInput, FlatList, } from 'react-native'
import { icondata } from '../Iconlist'
import style from '../style'


function IconFlatlist() {
    return (
        <>
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
        </>
    )
}

export default IconFlatlist