import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    console.log('hello')
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
