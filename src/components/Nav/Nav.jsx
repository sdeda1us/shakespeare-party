import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import styled from 'styled-components';

const NavBanner = styled.div `
  width: 100%;
  background-color: yellow;
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
  const directorId= props.store.playMeta.map((p)=>(p.director_id));

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
      
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.store.user.id && (
        <>
        <div>
            <Link  to="/info">
              <LinkText>Info Page</LinkText>
            </Link>
       </div>
        
        </>
        )}
      <div>
        {/* Always show this link since the about page is not protected */}
        <Link  to="/about">
          <LinkText>About</LinkText>
        </Link>
      </div>
     
      {props.store.user.id==directorId ? 
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
