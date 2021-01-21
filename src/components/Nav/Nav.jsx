import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const NavBanner = styled.div `
  width: 100%;
  background-color: #7D8CA3;
  overflow: hidden;
  margin-bottom: 30px;
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: no-wrap;
`
const LinkText= styled.p `
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
`


const Nav = (props) => {
  const directorId= props.store.playMeta.director_id;

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/';
    loginLinkData.text = 'Home';
  }

  let homeLink = {
    path: '/home',
    text: 'Home'
  }

  if(props.store.user.id != null && props.store.user.troupe_code != null) {
    homeLink.path = '/dashboard';
    homeLink.text= 'Actor Dashboard';
  }

  return (
    <NavBanner>
      <div>
        <Link to={homeLink.path}>
          <LinkText>{homeLink.text}</LinkText>
        </Link>
      </div>
      
      <div>
        {/* Always show this link since the about page is not protected */}
        <Link  to="/about">
          <LinkText>About</LinkText>
        </Link>
      </div>
     
      {props.store.user.id==directorId && props.store.user.id >0 ? 
        <div>
          <Link  to="/admin">
            <LinkText>Director Admin</LinkText>
          </Link>
        </div> 
        : <div></div>
      }
      <div>
        <LinkText><LogOutButton  /></LinkText> 
      </div>
    </NavBanner>
  );
};

export default connect(mapStoreToProps)(Nav);
