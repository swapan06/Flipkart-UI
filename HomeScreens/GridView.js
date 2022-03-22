import React from 'react'
import { Text, View, FlatList, Image, } from 'react-native'
import ModalInjection from 'react-native/Libraries/Modal/ModalInjection'
import { Gridimages } from '../Gridimages'
import style from '../style'

function GridView() {

    return (
        <>
            <FlatList
                data={Gridimages}
                renderItem={(element) => {
                    return (<View >

                        <Image source={element.item.uri} style={style.gridView} />
                        <Text style={style.gridtext}>{element.item.title}</Text>
                    </View>
                    )
                }}
                numColumns={5}
            />
        </>
    )
}


export default GridView