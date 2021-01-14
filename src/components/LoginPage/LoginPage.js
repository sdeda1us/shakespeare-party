import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import styled from 'styled-components';

const FancyLink = styled.span `
  font: 40px;
  color: yellow;
`

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />

        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            <FancyLink>Go Back to Register Instead</FancyLink>
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
