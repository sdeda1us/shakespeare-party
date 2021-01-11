import React, {useState} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import CreatePlay from '../CreatePlay/CreatePlay';
import JoinPlay from '../JoinPlay/JoinPlay';

function UserPage() {
  // this component doesn't do much to start, just renders some user info to the DOM
  const [display, setDisplay] = useState(true);
    return (
      <div>
        <p onClick={(event)=>{setDisplay(true)}}>To Create a Play</p>
        <p onClick={(event)=>{setDisplay(false)}}>or to Join a Play</p>
        <p>That is the question!</p>
        {display ? <CreatePlay/> : <JoinPlay/>}
        <LogOutButton className="log-in" />
      </div>
    );
  }

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
