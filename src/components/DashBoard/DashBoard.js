import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


export default function DashBoard() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();

    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    // const joinCode = playMeta.map((p)=>p.join_code);
    const castList = useSelector(state => state.players);
    useEffect(() => {
        dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: userInfo.troupe_code}});
        dispatch({type: 'FETCH_PLAYERS', payload: {joinCode: userInfo.troupe_code}});
        }, []);
    return(
        <div>
            <p>Troupe Name: {playMeta.map((p) => (p.troupe_name))}</p>
            <p>Performing: {playMeta.map((p) => (p.play_name))} </p>
            
        </div>
    )
}