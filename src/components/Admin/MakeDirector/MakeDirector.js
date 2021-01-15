import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function ManageActor() {
    const players = useSelector(state => state.players);
    const userInfo = useSelector(state => state.user);
    return (
        <div>
            <select>
                <option>Current director: {userInfo.username}</option>
                {players.map((p)=>(<option key={p.id}>{p.username}</option>))}
            </select>
            <button>Appoint Director</button>
        </div>
    )
}
