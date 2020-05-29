import React, { Component, useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Dimensions, Alert, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase';

const { width, height } = Dimensions.get('window');

const TodayModal = (props) => {
    const [Loading, SetLoading] = useState(true);
    const [Show, SetShow] = useState(false);
    const [Details, SetDetails] = useState([]);

    useEffect(() => {
        let year = new Date().getFullYear();
        let mount = new Date().getMonth();
        let DayIndex = new Date().getDay();
        let day = new Date().getDate();

        firebase.database().ref('data').child(props.uid).child(year).child(mount).child(day).child('tests').once('value', (snapshot) => {
            let tests = [];
            snapshot.forEach((snap) => {
                tests.push(snap.val());
            });
            SetDetails(tests);
            if (tests === []) {
                SetShow(false);
                SetLoading(false);
            }
            else {
                SetShow(true);
                SetLoading(false);
            }
        })
    }, []);


    return (
        <View style={{ alignItems: 'center' }}>
            {Show ?
                Details.map(deta => {
                    return (
                        <View style={{ width: width - 40, borderRadius: 7, marginVertical: 5, backgroundColor: '#f7f7f7', flexDirection:'row' }}>
                        <View style={{height:50,justifyContent:'center',paddingHorizontal:10,borderRightWidth:1,borderColor:'#e6e6e6'}}>
                            <Text style={{color:'#707070',opacity:0.8}}>{deta.time.hour}.{deta.time.minute}</Text>
                        </View>

                        <View style={{height:50,justifyContent:'center',paddingHorizontal:10,borderRightWidth:1,borderColor:'#e6e6e6'}}>
                            <Text style={{color:'#707070',opacity:0.9}}>{deta.type =='aclık' ? 'Açlık' : 'Tokluk'}</Text>
                        </View>

                        <View style={{height:50,justifyContent:'center',paddingHorizontal:10}}>
                            <Text style={{color:'#707070',opacity:0.9}}>{deta.value}</Text>
                        </View>
                        </View>
                    )
                })
                :
                Loading ?
                    <ActivityIndicator size='small' color='black' />
                    :
                    <Text style={{ padding: 7, color: '#707070' }}>Bugün için veri bulunamadı</Text>
            }
        </View>
    )
}

export default TodayModal