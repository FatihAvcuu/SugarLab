import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/login';
import Signup from './screen/signup';
import Home from './screen/HomeNavigate';
import {UserProvider} from './context';

const Stack = createStackNavigator();

export default function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyCGPa16zlB7PdqOFWl53A-Xt-d5ZNArd4I",
    authDomain: "sugarlab-4cf14.firebaseapp.com",
    databaseURL: "https://sugarlab-4cf14.firebaseio.com",
    projectId: "sugarlab-4cf14",
    storageBucket: "sugarlab-4cf14.appspot.com",
    messagingSenderId: "867657406862",
    appId: "1:867657406862:web:630f22cd26ae84c2336cdf",
    measurementId: "G-43TN8T6L1F"
  };
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}