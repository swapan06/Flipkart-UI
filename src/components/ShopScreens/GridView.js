import React from 'react'
import { Text, View, FlatList, Image, } from 'react-native'
import ModalInjection from 'react-native/Libraries/Modal/ModalInjection'
import { Gridimages } from '../../Navigation/Gridimages'
import style from '../../style/style'

function GridView() {

    return (
        <>
            <View style={{ alignItems: "center" }}>
                <FlatList
                    data={Gridimages}
                    renderItem={(element) => {
                        return (
                            <View style={{ alignItems: "center" }}>

                                <Image source={element.item.uri} style={style.gridView} />
                                <Text style={style.gridtext}>{element.item.title}</Text>
                            </View>
                        )
                    }}
                    numColumns={5}
                />


            </View>
        </>
    )
}


export default GridView