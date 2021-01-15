import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import ManageActor from '../ManageActor/ManageActor';
import styled from 'styled-components';

const MainSpace = styled.div `
    width: 95%; 
    padding: 2% 0% 2% 0%;
    margin: auto;
    background-color: white;
`

const FlexMain = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: stretch;
`

const Header = styled.div `
    text-align: center;
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


export default function Admin() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();

    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    
    
    //populate redux data on page load
    useEffect(() => {dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: userInfo.troupe_code}})
    }, []);

    const deletePlayEvent = (event) => {
        alert('You are about to delete your play event, is this what you want?');
        const joinCode = playMeta.map((p)=>p.join_code);
        console.log('joinCode is', joinCode);
        dispatch({type: 'DELETE_TROUPE', payload: {joinCode: joinCode[0]}});
        dispatch({type: 'DELETE_PLAY_EVENT', payload: {joinCode: userInfo.troupe_code}});
    }

    return (
        <MainSpace>
            <Header>
                <h2>Director Administration Page</h2>
            </Header>
            
            <FlexMain>
                <MenuSide>
                    <div><MenuButton>View Join Code</MenuButton></div>
                    <div><MenuButton>Rename Troupe</MenuButton></div>
                    <div><MenuButton>Role Management</MenuButton></div>
                    <div><MenuButton>Appoint New Director</MenuButton></div>
                    <div><MenuButton>Delete Troupe</MenuButton></div>
                </MenuSide>
                <ViewSide>
                    <p>Troupe Name: {playMeta.map((p)=>p.troupe_name)}</p>
                    <button>Edit</button>
                
                <div>
                    <ManageActor />
                </div>
                <div>
                    <button onClick={(event)=>deletePlayEvent(event)}>Delete This Play Event</button>
                </div>
                </ViewSide>
            </FlexMain>
        </MainSpace>
    )
}