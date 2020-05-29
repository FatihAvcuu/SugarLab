import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Modal, Dimensions, StatusBar } from 'react-native'
import NavBar from '../component/navbar'
import FastCard from '../component/FastCard'
import AddModal from '../component/AddModal'
import TodayModal from '../component/TodayModal'
import { Icon } from 'react-native-elements';
import UserConsumer from '../../context';

const { width, height } = Dimensions.get('window');

export default class settings extends Component {
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
                            <NavBar header='Şeker Ölç' />
                            <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />

                            <ScrollView >
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity delayPressIn={50} onPress={() => this.setState({ aclikModal: true })}><FastCard gradient={['#1F75B9', '#98C7EC']} text='Açlık Şekeri Ekle' /></TouchableOpacity>

                                    <TouchableOpacity delayPressIn={50} onPress={() => this.setState({ toklukModal: true })}><FastCard gradient={['#1FB98F', '#98D5EC']} text='Tokluk Şekeri Ekle' /></TouchableOpacity>
                                </View>
                            </ScrollView>

                            <Modal
                                animationType='fade'
                                transparent={true}
                                visible={this.state.aclikModal}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: width, height: height, backgroundColor: 'black', opacity: 0.5 }} />
                                    <View style={{ height: 190, width: '80%', backgroundColor: 'white', position: 'absolute', borderRadius: 7 }}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 7, alignItems: 'center', borderBottomWidth: 1, borderColor: '#dbdae3' }}>
                                            <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => this.setState({ aclikModal: false })}>
                                                <Icon name='chevron-left' color='#707070' type='font-awesome-5' size={32} />
                                            </TouchableOpacity>

                                            <Text style={{ fontSize: 15, letterSpacing: 1.3, color: '#707070' }}>Açlık Şekeri Ekle</Text>
                                            <View style={{ paddingHorizontal: 10 }}>
                                                <Icon name='chevron-left' color='transparent' type='font-awesome-5' size={32} />
                                            </View>
                                        </View>
                                        <AddModal inputText='Açlık şekeri' uid={user.uid} type='aclık' />
                                    </View>
                                </View>
                            </Modal>

                            <Modal
                                animationType='fade'
                                transparent={true}
                                visible={this.state.toklukModal}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: width, height: height, backgroundColor: 'black', opacity: 0.5 }} />
                                    <View style={{ height: 190, width: '80%', backgroundColor: 'white', position: 'absolute', borderRadius: 7 }}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 7, alignItems: 'center', borderBottomWidth: 1, borderColor: '#dbdae3' }}>
                                            <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => this.setState({ toklukModal: false })}>
                                                <Icon name='chevron-left' color='#707070' type='font-awesome-5' size={32} />
                                            </TouchableOpacity>

                                            <Text style={{ fontSize: 15, letterSpacing: 1.3, color: '#707070' }}>Tokluk Şekeri Ekle</Text>

                                            <View style={{ paddingHorizontal: 10 }}>
                                                <Icon name='chevron-left' color='transparent' type='font-awesome-5' size={32} />
                                            </View>
                                        </View>
                                        <AddModal inputText='Tokluk şekeri' uid={user.uid} type='tokluk' />
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
