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

const FlexMain = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: stretch;
`


const MenuSide = styled.div `
    display: block;
    margin: auto;
    flex-grow: 1;
`
const ViewSide = styled.div `
    flex-grow: 2;
    border: 3px solid #ED60E8;
    border-radius: 10px;
    margin: 0% 2% 0% 2%;
    padding: 2%;
`

const MenuButton = styled.button `
    padding: 5%;
    width: 80%;
    margin: 5% 5% 0% 5%;
    border: 3px solid #ED60E8;
    background-color: white;
    color: #ED60E8;
    font-size: 30px;
    border-radius: 10px;
`

export default function DashBoard() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();
    const [viewChoice, setViewChoice] = useState(0);
    let tableZip = [];
    let playCode = '';
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
        
        }, []);
    return(
        <MainSpace>
            <TopSpace>
                <TopInfo>Troupe Name: {playMeta.troupe_name}</TopInfo>
                <TopInfo>Performing: {playMeta.play_name} </TopInfo>
            </TopSpace>
            <FlexMain>
                <MenuSide>
                    <MenuButton onClick={()=>{setViewChoice(1); dispatch({type: 'FETCH_CHARTEXT', payload: {playCode: playMeta.play_code}});}}>View Parts</MenuButton>
                </MenuSide>
                <ViewSide>
                    <div>
                        <table>
                            {tableZip ? tableZip.map((t) => <tr><td>{t.character}</td><td>{t.wordCount}</td></tr>) : <tr><td>no role data</td></tr>}
                        </table>
                    </div>
                </ViewSide>

            </FlexMain>        
            
        </MainSpace>
    )
}