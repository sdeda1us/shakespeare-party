import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import ManageActor from '../ManageActor/ManageActor';


export default function Admin() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();

    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    
    
    //populate redux data on page load
    useEffect(() => {dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: userInfo.troupe_code}})
    }, []);

    const deletePlayEvent = (event) => {
        alert('You are about to delete your play event, is this what you want?');
        const joinCode = playMeta.map((p)=>p.join_code);
        console.log('joinCode is', joinCode);
        dispatch({type: 'DELETE_TROUPE', payload: {joinCode: joinCode[0]}});
        dispatch({type: 'DELETE_PLAY_EVENT', payload: {joinCode: userInfo.troupe_code}});
    }

    return (
        <div>
            <div>
                <h1>Hi from Admin!</h1>
            </div>
            <div>
                <p>Troupe Name: {playMeta.map((p)=>p.troupe_name)}</p>
                <button>Edit</button>
            </div>
            <div>
                <ManageActor />
            </div>
            <div>
                <button onClick={(event)=>deletePlayEvent(event)}>Delete This Play Event</button>
            </div>
        </div>
    )
}