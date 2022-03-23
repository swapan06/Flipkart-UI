import React from 'react'
import { Text, View, Image, TextInput, FlatList } from 'react-native'
import style from '../style'
import { scrolldata } from '../Storieslist'

function StoriesView() {
    return (
        <>

            <View style={style.container1}>
                <Text style={style.bannertext}>Recently Viewed Stores</Text>

                <FlatList
                    horizontal={true}
                    data={scrolldata}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(element) => {
                        return (<View style={style.storyContainer}>
                            <View>
                                <Image source={element.item.uri} style={style.storyImage} />
                                <Text style={style.storytext}>{element.item.title}</Text>
                            </View>
                        </View>

                        )
                    }

                    } />
            </View>


        </>
    )
}

export default StoriesView