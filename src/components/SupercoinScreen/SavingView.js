import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import style from '../../style/style'
import { images } from '../../assets/images/images'

function SavingView() {
    return (
        <>
            <View>
                <View style={style.saving}>
                    <Text style={style.savingInput}>Use SuperCoins and start Saving</Text>
                    <Image style={style.nextimg} source={images?.next} />
                </View>
            </View>
        </>
    )
}

export default SavingView