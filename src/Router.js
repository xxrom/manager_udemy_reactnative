import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="login"
        component={LoginForm}
        login="Please login"
      />
    </Router>
  );
};

export default RouterComponent;
