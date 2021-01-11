import React, {useState} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import CreatePlay from '../CreatePlay/CreatePlay';
import JoinPlay from '../JoinPlay/JoinPlay';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const ChoiceFont = styled.h2 `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
  text-align: center;
  font-family: 'Meddon', cursive;
  font-size: 35px;
  color: #ED60E8;

  &:hover {
    color: yellow;
  }
`
const OrFont = styled.p `
  font-size:35px;
`
const HeaderFont = styled.h3 `
  text-align: center;
`
const ChoiceRow = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
  padding-top: 30px;
`
const ChoiceBox = styled.div `
  border: 2px solid #ED60E8;
  padding: 1%;
  background-color: black;
`
const OrBox = styled.div `
  margin-left: 10%;
  margin-right: 10%;
`

function UserPage() {
  // this component doesn't do much to start, just renders some user info to the DOM
  const [display, setDisplay] = useState(true);
    return (
      <div>
        <ChoiceRow>
          <ChoiceBox onClick={(event)=>{setDisplay(true)}}>
            <ChoiceFont >To Create a Play</ChoiceFont>
          </ChoiceBox>
          <OrBox>
            <OrFont>OR</OrFont>
          </OrBox>
          <ChoiceBox onClick={(event)=>{setDisplay(false)}}>
            <ChoiceFont >To Join a Play</ChoiceFont>
          </ChoiceBox>
        </ChoiceRow>
        <HeaderFont>That is the question!</HeaderFont>
        {display ? <CreatePlay/> : <JoinPlay/>}
        <LogOutButton className="log-in" />
      </div>
    );
  }

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
