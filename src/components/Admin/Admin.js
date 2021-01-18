import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import MakeDirector from './MakeDirector/MakeDirector';
import JoinCode from './JoinCode/JoinCode';
import RenameTroupe from './RenameTroupe/RenameTroupe';
import DeletePlay from './DeletePlay/DeletePlay';
import RoleManager from './RoleManager/RoleManager';
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
const TextDisplay = styled.p `
    font-size: 30px;
    text-align: center;
`

export default function Admin() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();
    const [viewChoice, setViewChoice] = useState(0);
    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const userInfo = useSelector(state => state.user);
    
    
    //populate redux data on page load
    useEffect(() => 
        {dispatch({type: 'FETCH_PLAY_META', payload: {joinCode: userInfo.troupe_code}})
        dispatch({type: 'FETCH_PLAYERS', payload: {joinCode: userInfo.troupe_code}})}
        , []);

    
    return (
        <MainSpace>
            <Header>
                <h2>Director Administration Page</h2>
            </Header>
            
            <FlexMain>
                <MenuSide>
                    <div><MenuButton onClick={()=>setViewChoice(1)}>View Join Code</MenuButton></div>
                    <div><MenuButton onClick={()=>setViewChoice(2)}>Rename Troupe</MenuButton></div>
                    <div><MenuButton onClick={()=>setViewChoice(3)}>Role Management</MenuButton></div>
                    <div><MenuButton onClick={()=>setViewChoice(4)}>Appoint New Director</MenuButton></div>
                    <div><MenuButton onClick={()=>setViewChoice(5)}>Delete Troupe</MenuButton></div>
                </MenuSide>
                <ViewSide>
                    {viewChoice === 0 ? <TextDisplay>Choose an option from the menu</TextDisplay>: 
                            viewChoice === 1 ? <JoinCode/> :
                                viewChoice == 2 ? <RenameTroupe/> :
                                    viewChoice === 3 ? <RoleManager/> :
                                        viewChoice === 4 ? <MakeDirector/> :
                                            <DeletePlay/>
                    }       
                
                </ViewSide>
            </FlexMain>
        </MainSpace>
    )
}