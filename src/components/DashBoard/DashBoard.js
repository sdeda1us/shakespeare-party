import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import ViewParts from './ViewParts/ViewParts';
import MyLines from './MyLines/MyLines';
import ThePlay from './ThePlay/ThePlay';

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

const MenuSide = styled.div `
    display: inline-flex;
    margin: auto;
    justify-content: space-between; 
`
const ViewSide = styled.div `
    border: 3px solid #ED60E8;
    border-radius: 10px;
    margin: 0% 2% 0% 2%;
    padding: 2%;
`

const MenuButton = styled.button `
    padding: 5%;
    width: 11rem;
    height: 5rem;
    border: 3px solid black;
    background-color: black;
    color: white;
    font-size: 20px;
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
    const parts = useSelector(state => state.parts);
    
    useEffect(() => {
        dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: user.troupe_code}});
        dispatch({type: 'FETCH_PLAYERS', payload: {joinCode: user.troupe_code}});
        }, []);
    return(
        <MainSpace>
            <TopSpace>
                {playMeta && <TopInfo>Troupe Name: {playMeta.troupe_name}</TopInfo>}
                {playMeta && <TopInfo>Performing: {playMeta.title} </TopInfo>}
            </TopSpace>
           
                <MenuSide>
                    <MenuButton 
                        onClick={()=>
                            {setViewChoice(1); 
                            {if(playMeta.workid != undefined) {
                                dispatch({type: 'FETCH_CHARTEXT', payload: {playCode: playMeta.workid, troupeCode: user.troupe_code}})
                            }
                                
                        }}}>
                    View Parts
                    </MenuButton>
                    <MenuButton onClick={()=>setViewChoice(2)}>My Lines</MenuButton>
                    <MenuButton onClick={()=>setViewChoice(3)}>The Play</MenuButton>
                </MenuSide>
                <ViewSide>
                {viewChoice === 0 ? <p>Choose an option from the menu</p>: 
                            viewChoice === 1 ? <ViewParts/> :
                                viewChoice == 2 ?  <MyLines/>:
                                    <ThePlay/>
                    } 
                </ViewSide>       
        </MainSpace>
    )
}