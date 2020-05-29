import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import Home from './page/home'
import Settings from './page/settings'
import Test from './page/test'
import Report from './page/report'

const Tab = createBottomTabNavigator();

export default class HomeNavigate extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="home"
                    options={{
                        tabBarLabel: 'Ana Sayfa',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='home' color='#707070' type='font-awesome-5' size={25} />
                        ),
                    }}
                    component={Home} />

                <Tab.Screen name="test"
                    options={{
                        tabBarLabel: 'Şeker Ölç',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='flask' color='#707070' type='font-awesome-5' size={25} />
                        ),
                    }}
                    component={Test} />

                <Tab.Screen name="report"
                    options={{
                        tabBarLabel: 'Sonuçlar',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='search' color='#707070' type='font-awesome-5' size={25} />
                        ),
                    }}
                    component={Report} />

                <Tab.Screen name="settings"
                    options={{
                        tabBarLabel: 'Ayarlar',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='cog' color='#707070' type='font-awesome-5' size={25} />
                        ),
                    }}
                    component={Settings} />
            </Tab.Navigator>
        )
    }
}
