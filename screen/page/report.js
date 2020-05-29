import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Modal, Dimensions, StatusBar } from 'react-native'
import NavBar from '../component/navbar'
import FastCard from '../component/FastCard'
import AddModal from '../component/AddModal'
import TodayModal from '../component/TodayModal'
import MonthModal from '../component/MonthModal'
import { Icon } from 'react-native-elements';
import UserConsumer from '../../context';

const { width, height } = Dimensions.get('window');

export default class settings extends Component {
    state = {
        todayModal: false,
        monthModal: false
    }

    render() {
        return <UserConsumer>
            {
                value => {
                    const { user } = value;
                    return (
                        <View style={{ backgroundColor: 'white', flex: 1 }}>
                            <NavBar header='Sonuçlar' />
                            <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />

                            <ScrollView >
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity delayPressIn={50} onPress={() => this.setState({ todayModal: true })}><FastCard gradient={['#1F75B9', '#98C7EC']} text='Bugünün Ölçümleri' /></TouchableOpacity>

                                    <TouchableOpacity delayPressIn={50} onPress={() => this.setState({ monthModal: true })}><FastCard gradient={['#1FB98F', '#98D5EC']} text='Bu Ayın Ölçümleri' /></TouchableOpacity>
                                </View>
                            </ScrollView>                             
                            <Modal
                                animationType='fade'
                                transparent={true}
                                visible={this.state.todayModal}>
                                <View>
                                    <View style={{ height: height, width: width, backgroundColor: 'white', position: 'absolute', borderRadius: 7 }}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 7, alignItems: 'center', borderBottomWidth: 1, borderColor: '#dbdae3' }}>
                                            <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => this.setState({ todayModal: false })}>
                                                <Icon name='chevron-left' color='#707070' type='font-awesome-5' size={32} />
                                            </TouchableOpacity>

                                            <Text style={{ fontSize: 15, letterSpacing: 1.3, color: '#707070' }}>Bugünün Ölçümleri</Text>
                                            <View style={{ paddingHorizontal: 10 }}>
                                                <Icon name='chevron-left' color='transparent' type='font-awesome-5' size={32} />
                                            </View>
                                        </View>
                                        <TodayModal uid={user.uid} />
                                    </View>
                                </View>
                            </Modal>

                            <Modal
                                animationType='fade'
                                transparent={true}
                                visible={this.state.monthModal}>
                                <View>
                                    <View style={{ height: height, width: width, backgroundColor: 'white', position: 'absolute', borderRadius: 7 }}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 7, alignItems: 'center', borderBottomWidth: 1, borderColor: '#dbdae3' }}>
                                            <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => this.setState({ monthModal: false })}>
                                                <Icon name='chevron-left' color='#707070' type='font-awesome-5' size={32} />
                                            </TouchableOpacity>

                                            <Text style={{ fontSize: 15, letterSpacing: 1.3, color: '#707070' }}>Bu Ayın Ölçümleri</Text>
                                            <View style={{ paddingHorizontal: 10 }}>
                                                <Icon name='chevron-left' color='transparent' type='font-awesome-5' size={32} />
                                            </View>
                                        </View>
                                        <MonthModal uid={user.uid} />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    )
                }
            }
        </UserConsumer>
    }
}
