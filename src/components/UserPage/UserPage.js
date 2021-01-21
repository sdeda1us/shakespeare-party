import React, {useState} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import CreatePlay from '../CreatePlay/CreatePlay';
import JoinPlay from '../JoinPlay/JoinPlay';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const MainSpace = styled.div `
    width: 95%; 
    margin: auto;
    background-color: white;
`

const ChoiceFont = styled.h2 `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
  text-align: center;
  font-family: 'Meddon', cursive;
  font-size: 35px;
  color: #FBFBFB;

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
  border: 2px solid #FBFBFB;
  padding: 1%;
  background-color: black;
  border-radius: 10px;
`
const OrBox = styled.div `
  margin-left: 10%;
  margin-right: 10%;
`





function UserPage() {
  // this component doesn't do much to start, just renders some user info to the DOM
  const [display, setDisplay] = useState(true);
    return (
      <MainSpace>
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
      </MainSpace>
    );
  }

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
