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

        firebase.database().ref('data').child(props.uid).child(year).child(mount).once('value', (snapshot) => {
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
            <View style={{ width: width - 40 }}>
                {Show ?
                    Details.map(deta => {
                        return (
                            <View>
                                <Text style={{ color: '#707070', marginTop:7,marginBottom:2,paddingLeft:8 }}>{deta.date.day} {mounthReturn(deta.date.month)} {deta.date.year}</Text>
                                {
                                    deta.tests.map(deta => {
                                        return (

                                            <View style={{ width: width - 40, borderRadius: 7, marginVertical: 5, backgroundColor: '#f7f7f7', flexDirection: 'row' }}>
                                                <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 10, borderRightWidth: 1, borderColor: '#e6e6e6' }}>
                                                    <Text style={{ color: '#707070', opacity: 0.8 }}>{deta.time.hour}.{deta.time.minute}</Text>
                                                </View>

                                                <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 10, borderRightWidth: 1, borderColor: '#e6e6e6' }}>
                                                    <Text style={{ color: '#707070', opacity: 0.9 }}>{deta.type == 'aclık' ? 'Açlık' : 'Tokluk'}</Text>
                                                </View>

                                                <View style={{ height: 50, justifyContent: 'center', paddingHorizontal: 10 }}>
                                                    <Text style={{ color: '#707070', opacity: 0.9 }}>{deta.value}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
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
        </View>
    )
}

let mounthReturn = (mounth) => {
    switch (mounth) {
        case 1:
            return 'Ocak'
            break;
        case 2:
            return 'Şubat'
            break;
        case 3:
            return 'Mart'
            break;
        case 4:
            return 'Nisan'
            break;
        case 5:
            return 'Mayıs'
            break;
        case 6:
            return 'Haziran'
            break;
        case 7:
            return 'Temmuz'
            break;
        case 8:
            return 'Ağustos'
            break;
        case 3:
            return 'Eylül'
            break;
        case 4:
            return 'Ekim'
            break;
        case 5:
            return 'Kasım'
            break;
        case 6:
            return 'Aralık'
            break;
        default:
            return 'NaN'
            break;
    }
}

export default TodayModal