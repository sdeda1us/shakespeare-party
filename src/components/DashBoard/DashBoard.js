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
    let tableZip = [];
    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    const castList = useSelector(state => state.players);
    const characters = useSelector(state=> state.folger.characters);
    const words = useSelector(state => state.folger.wordCount);
    if(characters) {tableZip = characters.map((c, i) => {return {character: c, wordCount: words[i]}});};
    useEffect(() => {
        dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: userInfo.troupe_code}});
        dispatch({type: 'FETCH_PLAYERS', payload: {joinCode: userInfo.troupe_code}});
        dispatch({type: 'FETCH_CHARTEXT'});
        }, []);
    return(
        <MainSpace>
            <TopSpace>
                <TopInfo>Troupe Name: {playMeta.map((p) => (p.troupe_name))}</TopInfo>
                <TopInfo>Performing: {playMeta.map((p) => (p.play_name))} </TopInfo>
            </TopSpace>
                    
            <div>
                <table>
                    {tableZip ? tableZip.map((t) => <tr><td>{t.character}</td><td>{t.wordCount}</td></tr>) : <tr><td>no role data</td></tr>}
                </table>
            </div>
        </MainSpace>
    )
}