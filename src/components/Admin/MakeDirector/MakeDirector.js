import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export default function ManageActor() {
    const dispatch = useDispatch();
    const history = useHistory();
    const players = useSelector(state => state.players);
    const userInfo = useSelector(state => state.user);
    const playMeta = useSelector(state => state.playMeta)

    const [newDirector, setNewDirector] = useState('');
    return (
        <div>
            <select onChange={(event)=>setNewDirector(event.target.value)}>
                <option value={userInfo.username}>Current director: {userInfo.username}</option>
                {players.map((p)=>(<option key={p.id} value={p.id}>{p.username}</option>))}
            </select>
            <button onClick={()=>
                {alert('Are you sure you want to do this? You will be removed from access to this page if you proceed.')
                    dispatch({type:'UPDATE_DIRECTOR', payload: {director: newDirector, joinCode: playMeta.join_code}});
                    history.push('/dashboard');
                }
            }>
                Appoint Director
            </button>
        </div>
    )
}
