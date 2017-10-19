import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please login" />
      </Scene>

      <Scene key="main" initial>
        <Scene

          onRight={() => Actions.employeeCreate()}
          rightTitle="add"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene
          initial
          key="employeeCreate"
          component={EmployeeCreate}
          titel="Employee Create"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
