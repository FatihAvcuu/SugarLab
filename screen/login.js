import React, { Component } from 'react'
import { Text, View, Dimensions, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import { StackActions } from '@react-navigation/native';
import * as firebase from 'firebase';

import logo from '../Image/logo.png'

const { width, height } = Dimensions.get('window');

export default class login extends Component {
    state = {
        email: '',
        password: '',
        loading: true
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(auth => {
            if (auth) {
                //yönlendirme
                this.props.navigation.dispatch(
                    StackActions.replace('Home')
                );
            }
            else {
                this.setState({ loading: false });
            }
        });
    }

    loginApp = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                
            })
            .catch((err) => {
                this.setState({ loading: false });
                Alert.alert('Oops', 'Giriş Yapılamadı', [
                    { text: 'Tamam' }
                ])
            })
    }

    goSignup = () => {
        const pushAction = StackActions.push('SignUp');

        this.props.navigation.dispatch(pushAction);
    }

    render() {
        if (this.state.loading == true) {
            return (
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size='small' color='black' />
                </View>
            )
        }
        else {
            return (
                <KeyboardAwareScrollView style={{backgroundColor:'white'}}>
                <StatusBar backgroundColor="white" barStyle={'dark-content'} />
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 230 }}>
                            <Image
                                style={{ width: width - 90, height: width - 90}}
                                source={logo}
                            />
                        </View>

                        <View style={{ backgroundColor: '#0984E3', width: width - 60, height: (height - 230)-(StatusBar.currentHeight), borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
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

                            <TouchableOpacity onPress={() => this.loginApp()}>
                                <View style={{ marginLeft: 25, marginVertical: 12, width: width - 110, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 10 }}>
                                    <Text style={{ color: '#0984E3', fontWeight: 'bold', fontSize: 20 }}>Giriş Yap</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goSignup()}>
                                <View style={{ marginLeft: 25, marginVertical: 6, width: width - 110, borderWidth: 1.3, borderColor: 'white', alignItems: 'center', justifyContent: 'center', height: 45, borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Kayıt Ol</Text>
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
}
