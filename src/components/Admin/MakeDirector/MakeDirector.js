import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const MenuButton = styled.button `
    width: 12rem;
    margin-left: 10%;
    margin-top: 10px;
    border: 3px solid white;
    background-color: black;
    color: white;
    font-size: 30px;
    border-radius: 120px;
    font-family: 'Calligraffitti', cursive;
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
