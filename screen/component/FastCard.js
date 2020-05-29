import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { width, height } = Dimensions.get('window');

const FastCard = (props) => {
    return (
        <View style={{ width: width - 40, alignItems: 'center', justifyContent: 'center', height: 150, borderRadius: 7, marginVertical: 8, backgroundColor: '#FBFBFB' }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={props.gradient}
                style={{
                    borderRadius: 7,
                    transform: [{ rotate: '0deg' }],
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 150,
                    width: width - 40
                }}
            />
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, opacity: 0.75 }}>{props.text}</Text>
        </View>
    )
}

export default FastCard