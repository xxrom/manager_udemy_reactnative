import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducer';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAKkXCFQI1Wqq01wc4Yakrdi2NGcMXyKE8',
      authDomain: 'manager-c9368.firebaseapp.com',
      databaseURL: 'https://manager-c9368.firebaseio.com',
      projectId: 'manager-c9368',
      storageBucket: 'manager-c9368.appspot.com',
      messagingSenderId: '279967820360'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;