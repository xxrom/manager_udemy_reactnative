import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducer';

import LoginForm from './components/LoginForm';

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
      <Provider store={createStore(
        reducers,
        {},
        applyMiddleware(ReduxThunk)
      )}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
