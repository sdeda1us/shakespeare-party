import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styled from 'styled-components';

const NavBanner = styled.div `
  width: 100%;
  background-color: 
  #ED60E8;
  overflow: hidden;
`


const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <NavBanner>
      <Link to="/home">
        <h2>Prime Solo Project</h2>
      </Link>
      <div >
        <Link to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link  to="/info">
              Info Page
            </Link>
            <LogOutButton  />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link  to="/about">
          About
        </Link>
      </div>
    </NavBanner>
  );
};

export default connect(mapStoreToProps)(Nav);
