import React from 'react'
import { Text, View, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

const navbar = (props) => {
    return (
        <View style={{ justifyContent:'center', width:width, height:45, borderBottomWidth:1,borderColor:'#dbdae3', backgroundColor:'white'}}>
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:18, color:'#666666'}}>{props.header}</Text>
        </View>
    )
}
export default navbar