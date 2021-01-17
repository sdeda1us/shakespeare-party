import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import ViewParts from './ViewParts/ViewParts';

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
    let playCode = '';
    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const user = useSelector(state => state.user);
    const castList = useSelector(state => state.players);
    const partsList = useSelector(state => state.parts);
    
    useEffect(() => {
        dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: user.troupe_code}});
        dispatch({type: 'FETCH_PLAYERS', payload: {joinCode: user.troupe_code}});
        }, []);
    return(
        <MainSpace>
            <TopSpace>
                <TopInfo>Troupe Name: {playMeta.troupe_name}</TopInfo>
                <TopInfo>Performing: {playMeta.title} </TopInfo>
            </TopSpace>
            <FlexMain>
                <MenuSide>
                    <MenuButton 
                        onClick={()=>
                            {setViewChoice(1); 
                            {if(playMeta.workid != undefined) {dispatch({type: 'FETCH_CHARTEXT', payload: {playCode: playMeta.workid}})}}
   
                            }}>
                    View Parts
                    </MenuButton>
                </MenuSide>
                <ViewSide>
                    <ViewParts/>
                </ViewSide>

            </FlexMain>        
            
        </MainSpace>
    )
}