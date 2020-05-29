import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, StatusBar, Modal, Dimensions } from 'react-native'
import UserConsumer from '../../context';

import NavBar from '../component/navbar'
import Card from '../component/card'

const { width, height } = Dimensions.get('window');

export default class home extends Component {
    state = {
        aclikModal: false,
        toklukModal: false
    }
    render() {
        return <UserConsumer>
            {
                value => {
                    const { user } = value;
                    return (
                        <View style={{ backgroundColor: 'white', flex: 1 }}>
                            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
                            <NavBar header='Ana Sayfa' />
                            <ScrollView >
                                <View style={{ alignItems: 'center' }}>
                                    <Card text={<Text style={{ fontSize: 14 }}><Text style={{ fontWeight: 'bold', color: '#5E5F65' }}>Hoş geldin</Text><Text style={{ color: '#5E5F65', fontFamily: 'sans-serif-light' }}>, {user.name}</Text></Text>} />

                                    <Card
                                        text={<Text style={{ color: '#5E5F65' }}>Çağın hastalıkları arasında en ön sıralarda yer alan diyabet (şeker hastalığı), ölümcül birçok hastalığın oluşumunda birinci sırada rol oynayan ve dünyanın her yerinde çok yaygın olarak görülen bir hastalık türüdür.</Text>}
                                    />

                                    <Card
                                        text={<Text style={{ color: '#5E5F65' }}>Hastalığın tam adı olan Diabetes Mellitus, Yunancada şekerli idrar anlamına gelir. Sağlıklı bireylerde açlık kan glukoz düzeyi 70-100 mg/dL aralığındadır. </Text>}
                                    />

                                    <Card
                                        text={<Text style={{ color: '#5E5F65' }}>Kandaki şeker seviyesinin bu aralığın üzerine çıkması, genellikle diyabet hastalığına işaret eder.</Text>}
                                    />

                                    <Card
                                        text={<Text style={{ color: '#5E5F65' }}>Hastalığın nedeni insülin hormonu üretiminin herhangi bir nedenle yetersiz olması veya hiç olmaması, ya da vücut dokularının insüline karşı duyarsız hale gelmesidir.</Text>}
                                    />

                                    <Card
                                        text={<Text style={{ color: '#5E5F65' }}> Birçok farklı çeşidi bulunan diyabet hastalığının en yaygın görülen ve genellikle 35-40 yaş üzeri bireylerde ortaya çıkan türü Tip 2 diyabettir.</Text>}
                                    />

                                    <Card
                                        text={<Text style={{ color: '#5E5F65' }}>Bir diğer adı insülin direnci olan Tip 2 diyabette pankreasta insülin üretimi yeterli olduğu halde hücrelerde insülin hormonunu algılayıcı reseptörlerin çalışmaması nedeniyle bu hormona karşı duyarsızlık gelişir.</Text>}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    )
                }
            }
        </UserConsumer>
    }
}