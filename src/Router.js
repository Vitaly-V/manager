import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar key='root'>
        <Scene key='auth'>
          <Scene
            key='Login'
            component={LoginForm}
            title='Please login'
          />
        </Scene>
        <Scene key='Main'>
          <Scene
            key='EmployeeList'
            rightTitle='Add'
            onRight={() => Actions.EmployeeCreate()}
            component={EmployeeList}
            title='Employees'
          />
          <Scene
            key='EmployeeCreate'
            component={EmployeeCreate}
            title='Create Employee'
          />
          <Scene
            key='EmployeeEdit'
            component={EmployeeEdit}
            title='Edit Employee'
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
