import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';
import { employeesFetch } from './../actions/EmployeeActions';

class EmpoyeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <View>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list2</Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmpoyeeList);
