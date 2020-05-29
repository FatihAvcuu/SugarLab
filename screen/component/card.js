import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

const card = (props) => {
    return (
        <View style={{width:width-40,paddingVertical:15,paddingHorizontal:15,borderRadius:7,marginVertical:8,backgroundColor:'#f7f7f7'}}>
            <Text>{props.text}</Text>
        </View>
    )
}

export default card
