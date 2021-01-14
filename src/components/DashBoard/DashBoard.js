import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const MainSpace = styled.div `
    width: 95%; 
    margin: auto;
    background-color: white;
`
const TopSpace = styled.div `
    padding: 2%;
    display: flex;
    justify-content: space-between;
`
const TopInfo = styled.div `
    font-size: 25px;
`

export default function DashBoard() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();

    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    const castList = useSelector(state => state.players);
    useEffect(() => {
        dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: userInfo.troupe_code}});
        dispatch({type: 'FETCH_PLAYERS', payload: {joinCode: userInfo.troupe_code}});
        }, []);
    return(
        <MainSpace>
            <TopSpace>
                <TopInfo>Troupe Name: {playMeta.map((p) => (p.troupe_name))}</TopInfo>
                <TopInfo>Performing: {playMeta.map((p) => (p.play_name))} </TopInfo>
            </TopSpace>
            <div>
                {castList.map((actor) => (<ul key={actor.id}>{actor.username}</ul>))}
            </div>
            <div>
                
            </div>
        </MainSpace>
    )
}