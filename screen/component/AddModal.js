import React, { Component, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import * as firebase from 'firebase';

const { width, height } = Dimensions.get('window');

const AddModal = (props) => {
    const [input, setInput] = useState('');
    const [btn, setBtn] = useState('Ekle');
    const [btn_check, setBtn_check] = useState('');

    return (
        <View style={{ marginHorizontal: '10%', marginVertical: 10 }}>
            <Text style={{ fontSize: 12, color: '#707070' }}>{props.inputText}</Text>
            <TextInput
                style={{ width: '100%', paddingVertical: 4, paddingHorizontal: 3, marginVertical: 5, backgroundColor: '#f7f7f7', borderWidth: 1, borderColor: 'lightgray', borderRadius: 7 }}
                underlineColorAndroid='transparent'
                keyboardType='number-pad'
                placeholderTextColor='gray'
                onChangeText={email => setInput(email)}
                value={input}
            />
            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => {
                if(!(btn_check == input)) {
                setBtn(`${input} Eklendi!`)
                sendFire(input,props.uid,props.type)
                setBtn_check(input)
                }
                else{
                    Alert.alert('Oops', 'Aynı Değer Veri Eklenemez', [
                    { text: 'Tamam' }
                ])
                }
            }}>
                <View style={{ width: '100%', paddingVertical: 6, backgroundColor: '#27ae60', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{btn}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

let sendFire = (send,uid,type) => {
    let year = new Date().getFullYear();
    let mount = new Date().getMonth();
    let DayIndex = new Date().getDay();
    let day = new Date().getDate();

    firebase.database().ref('data').child(uid).child(year).child(mount).child(day).child('date').set({
        year:year,
        month:mount+1,
        day:day
    })

    firebase.database().ref('data').child(uid).child(year).child(mount).child(day).child('tests').once('value', (snapshot) => {
        let num = 0;
        snapshot.forEach((snap) => {
            num++;
        });

        firebase.database().ref('data').child(uid).child(year).child(mount).child(day).child('tests').child(num).set({
            value: send,
            type: type,
            time:{
                hour: new Date().getHours(),
                minute: new Date().getMinutes()
            }
        })
    })
}

export default AddModal