import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const MenuButton = styled.button `
    padding: 5%;
    width: 60%;
    margin: 5% 5% 0% 5%;
    border: 3px solid #ED60E8;
    background-color: #ED60E8;
    color: white;
    font-size: 30px;
    border-radius: 10px;
`
const TextDisplay = styled.p `
    font-size: 30px;
    text-align: center;
`

const SelectGrand = styled.select `
    width: 60%;
    margin-left: 5%;
    height: 50px;
`

export default function ManageActor() {
    const dispatch = useDispatch();
    const history = useHistory();
    const players = useSelector(state => state.players);
    const userInfo = useSelector(state => state.user);
    const playMeta = useSelector(state => state.playMeta)

    const [newDirector, setNewDirector] = useState('');
    return (
        <div>
            <SelectGrand onChange={(event)=>setNewDirector(event.target.value)}>
                <option value={userInfo.username}>Current director: {userInfo.username}</option>
                {players.map((p)=>(<option key={p.id} value={p.id}>{p.username}</option>))}
            </SelectGrand>
            <MenuButton onClick={()=>
                {alert('Are you sure you want to do this? You will be removed from access to this page if you proceed.')
                    dispatch({type:'UPDATE_DIRECTOR', payload: {director: newDirector, joinCode: playMeta.join_code}});
                    history.push('/dashboard');
                }
            }>
                Appoint Director
            </MenuButton>
        </div>
    )
}
