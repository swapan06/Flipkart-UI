import React from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import ModalInjection from 'react-native/Libraries/Modal/ModalInjection'
import { Gridimages } from '../Flatlist/Gridimages'
import style from '../../style/style'

function GridView() {
    const click = (title) => {
    }
    return (
        <>
            {/* ---------------------------Grid Images Flatlist-------------------- */}
            <View style={{ alignItems: "center" }}>
                <FlatList
                    data={Gridimages}
                    renderItem={(element) => {
                        return (
                            <TouchableOpacity onPress={() => click(element.item)}>
                                <View style={{ alignItems: "center" }}>
                                    <Image source={element.item.uri} style={style.gridView} />
                                    <Text style={style.gridtext}>{element.item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    numColumns={5} />
            </View>
        </>
    )
}
export default GridView