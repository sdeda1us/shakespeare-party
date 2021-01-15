import React from 'react';
import {useDispatch, useSelector} from 'react-redux';




export default function DeletePlay() {

    const deletePlayEvent = (event) => {
        alert('You are about to delete your play event, is this what you want?');
        const joinCode = playMeta.map((p)=>p.join_code);
        console.log('joinCode is', joinCode);
        dispatch({type: 'DELETE_TROUPE', payload: {joinCode: joinCode[0]}});
        dispatch({type: 'DELETE_PLAY_EVENT', payload: {joinCode: userInfo.troupe_code}});
    }
    
    const dispatch = useDispatch();
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    
    return (
        <div>
            <button onClick={(event)=>deletePlayEvent(event)}>Delete This Play Event</button>
        </div>
    )

}