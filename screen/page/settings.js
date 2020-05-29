import React, { Component } from 'react'
import { Text, View, Image, Dimensions, Alert, TouchableOpacity } from 'react-native'
import NavBar from '../component/navbar'
import * as firebase from 'firebase';
import { StackActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class settings extends Component {
    state = {
        user: {}
    }

    componentDidMount = async () => {
        firebase.auth().onAuthStateChanged(auth => {
            if (auth) {
                firebase.database().ref('users').child(auth.uid).once('value', (snap) => {
                    this.setState({ user: snap.val() })
                })
            }
        });
    }

    logout = () => {
        firebase.auth().signOut()
          .then(() => {
            this.props.navigation.dispatch(
              StackActions.replace('Login')
            );
          })
          .catch((error) => {
            Alert.alert('Oops', 'Çıkış Yapılamadı', [
              { text: 'Tamam' }
            ])
          });
      }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <NavBar header='Ayarlar' />
                <View style={{marginVertical:15,marginHorizontal:20,flexDirection:'row', justifyContent:'flex-start'}}>
                    <Image source={{ uri: 'https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg' }}
                        style={{ width: width - 260, height: width - 260, borderRadius: width - 260, opacity: 0.7 }}
                    />
                    <View style={{justifyContent:'center',marginHorizontal:10}}><Text style={{fontWeight:'bold',fontSize:25, color:'#707070'}}>{this.state.user.name}</Text></View>
                </View>

                <TouchableOpacity>
                <View style={{ width: width - 20, height: 'auto', backgroundColor: '#f7f7f7', borderRadius: 6, marginVertical: 7, flexDirection: 'row', marginLeft: width-(width-10) }}>
                  <View style={{ flexDirection: 'row', marginVertical: 12, marginHorizontal: 12, alignItems: 'center' }}>
                    <Icon name='info-circle' size={34} type='font-awesome-5' color='gray' />
                    <Text style={{ color: '#707070', fontSize: 20, fontWeight: '700', paddingLeft: 10 }}>Hakkında</Text>
                  </View>
                </View>
              </TouchableOpacity>

                <TouchableOpacity onPress={() => this.logout()}>
                <View style={{ width: width - 20,marginLeft: width-(width-10), height: 'auto', backgroundColor: '#f7f7f7', borderRadius: 6, marginVertical: 7, flexDirection: 'row'}}>
                  <View style={{ flexDirection: 'row', marginVertical: 12, marginHorizontal: 12, alignItems: 'center' }}>
                    <Icon name='sign-out-alt' size={34} type='font-awesome-5' color='#e74c3c' />
                    <Text style={{ color: '#e74c3c', fontSize: 20, fontWeight: '700', paddingLeft: 10 }}>Çıkış Yap</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
        )
    }
}
