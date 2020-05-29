import React, { Component } from 'react'
import { Text, View, Dimensions, TextInput, TouchableOpacity, Image, Alert, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import { StackActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';

import logo from '../Image/logo.png'

const { width, height } = Dimensions.get('window');

export default class signup extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        loading: false
    }

    signUpApp = () => {
        this.setState({ loading: true });
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((auth) => {
                let uid = auth.user.uid;
                this.createUser(uid)
            })
            .catch((err) => {
                this.setState({ loading: false });
                Alert.alert('Oops', 'Kayıt olunamadı', [
                    { text: 'Tamam' }
                ])
            })
    }

    createUser = (uid) => {
        if (this.state.image == '') {
            firebase.database().ref('users').child(uid).set({
                email: this.state.email,
                uid: uid,
                name: (this.state.name),
                password: this.state.password
            })
        }
        else {
            firebase.database().ref('users').child(uid).set({
                email: this.state.email,
                uid: uid,
                name: (this.state.name),
                password: this.state.password
            })
        }
    }

    goLogin = () => {
        const popAction = StackActions.pop(1);

        this.props.navigation.dispatch(popAction);
    }

    render() {
        return (
            <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
                <StatusBar backgroundColor="white" barStyle={'dark-content'} />
                <TouchableOpacity style={{ position: 'absolute', paddingTop: 35-(StatusBar.currentHeight), paddingLeft: 17 }} onPress={() => this.goLogin()}>
                    <Icon name='chevron-left' color='#707070' type='font-awesome-5' size={32} />
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ height: 230-(StatusBar.currentHeight) }}>
                        <Image
                            style={{ width: width - 90, height: width - 90, marginTop: 20 }}
                            source={logo}
                        />
                    </View>

                    <View style={{ backgroundColor: '#0984E3', width: width - 60, height: height - 230, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <LinearGradient
                            colors={['#0f95fc', '#096ab5']}
                            style={{
                                borderTopRightRadius: 15,
                                borderTopLeftRadius: 15,
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                height: height - 230,
                            }}
                        />

                        <View style={{ marginLeft: 25, marginVertical: 17, marginTop: 40 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'sans-serif-light' }}>Kullanıcı Adı</Text>
                            <TextInput
                                style={{ width: width - 110, paddingVertical: 4, borderBottomWidth: 1.3, borderColor: 'white', color: '#DED9D9' }}
                                underlineColorAndroid='transparent'
                                keyboardType='default'
                                placeholderTextColor='gray'
                                onChangeText={name => this.setState({ name: name })}
                                value={this.state.name}
                            />
                        </View>

                        <View style={{ marginLeft: 25, marginVertical: 17 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'sans-serif-light' }}>E-posta</Text>
                            <TextInput
                                style={{ width: width - 110, paddingVertical: 4, borderBottomWidth: 1.3, borderColor: 'white', color: '#DED9D9' }}
                                underlineColorAndroid='transparent'
                                keyboardType='email-address'
                                placeholderTextColor='gray'
                                onChangeText={email => this.setState({ email: email })}
                                value={this.state.email}
                            />
                        </View>

                        <View style={{ marginLeft: 25, marginVertical: 17 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'sans-serif-light' }}>Şifre</Text>
                            <TextInput
                                style={{ width: width - 110, paddingVertical: 4, borderBottomWidth: 1.3, borderColor: 'white', color: '#DED9D9' }}
                                underlineColorAndroid='transparent'
                                secureTextEntry
                                placeholderTextColor='gray'
                                onChangeText={password => this.setState({ password: password })}
                                value={this.state.password}
                            />
                        </View>

                        <TouchableOpacity onPress={() => this.signUpApp()}>
                            <View style={{ marginLeft: 25, marginVertical: 10, width: width - 110, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 10 }}>
                                <Text style={{ color: '#0984E3', fontWeight: 'bold', fontSize: 20 }}>Kayıt Ol</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                        <Text style={{ color: 'white', fontSize: 10, textAlign: 'center', paddingBottom: 2, opacity: 0.3, fontFamily: 'sans-serif-light' }}>Created by FatihAvcuu</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
