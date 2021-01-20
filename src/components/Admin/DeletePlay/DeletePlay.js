import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const MenuButton = styled.button `
    margin-left: 40%;
    width: 14rem;
    border: 3px solid white;
    background-color: #b30000;
    color: white;
    font-size: 30px;
    border-radius: 30px;
`
const TextDisplay = styled.p `
    font-size: 30px;
    text-align: center;
`



export default function DeletePlay() {

    const deletePlayEvent = (event) => {
        alert('You are about to delete your play event, is this what you want?');
        const joinCode = playMeta.join_code;
        console.log('joinCode is', joinCode);
        dispatch({type: 'DELETE_TROUPE', payload: {joinCode: joinCode[0]}});
        dispatch({type: 'DELETE_PLAY_EVENT', payload: {joinCode: userInfo.troupe_code}});
    }

    const dispatch = useDispatch();
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    
    return (
        <div>
            <TextDisplay>WARNING! This will delete your play and reset memberships for all actors and the director.</TextDisplay>
            <MenuButton onClick={(event)=>deletePlayEvent(event)}>Delete </MenuButton>
        </div>
    )

}