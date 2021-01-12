import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


export default function Admin() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();

    //loads from redux store
    const playEvent = useSelector(state => state.playEvent);
    const userInfo = useSelector(state => state.user);
    //populate redux data on page load
    useEffect(() => {dispatch({type: 'FETCH_PLAY_EVENT', payload: {joinCode: userInfo.troupe_code}})}, []);

    return (
        <div>
            <div>
                <h1>Hi from Admin!</h1>
            </div>
            <div>
                <p>Troupe Name: {playEvent.map((p)=>p.troupe_name)}</p>
                <button>Edit</button>
            </div>
            <div>
                <table>
                    <thead>
                        <th>Actor</th>
                        <th>Delete</th>
                    </thead>
                </table>
            </div>
        </div>
    )

}