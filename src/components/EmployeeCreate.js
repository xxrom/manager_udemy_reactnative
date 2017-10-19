import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

// import {
//   EMPLOYEE_UPDATE
// } from './'


class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log('pressed Save')}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
