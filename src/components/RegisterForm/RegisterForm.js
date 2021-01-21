import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const FormBox = styled.form `
  background-color: white;
  color: black;
  border-radius: 5px;
`
const RegButton = styled.input `
  background-color: black;
  font-family: 'Calligraffitti', cursive;
  font-size: 20px;
`

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <FormBox className="formPanel" onSubmit={this.registerUser}>
        <h2>Register a New User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div>
          
          <RegButton className="btn" type="submit" name="submit" value="Register" />
        </div>
      </FormBox>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
