import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import ViewParts from './ViewParts/ViewParts';
import MyLines from './MyLines/MyLines';
import ThePlay from './ThePlay/ThePlay';
import Runner from './Runner.jsx';

const MainSpace = styled.div `
    width: 95%; 
    margin: auto;
    background-color: white;
`

const MenuSide = styled.div `
    display: flex;
    margin: auto;
    justify-content: center; 
`
const ViewSide = styled.div `
    border: 3px solid black;
    border-radius: 10px;
    margin: 5% 2% 0% 2%;
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
    font-family: 'Calligraffitti', cursive;
`

export default function DashBoard() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const [viewChoice, setViewChoice] = useState(0);
    //loads from redux store
    const playMeta = useSelector(state => state.playMeta);
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        dispatch({type: 'GRAB_TEXT_DATA', payload: {workid: playMeta.workid, troupeCode: user.troupe_code}});
        // dispatch({type: 'FETCH_CHAPTERS', payload: {workid: playMeta.workid}});
        // dispatch({type: 'FETCH_ACTS', payload: {workid: playMeta.workid}});
        // dispatch({type:'FETCH_PLAY', payload: {workid: playMeta.workid}});
    }, [dispatch, viewChoice]);

    return(
        <MainSpace>
            <Runner />
                <MenuSide>
                    <div>
                        <MenuButton 
                            onClick={()=>
                                {setViewChoice(1); 
                                //  dispatch({type: 'FETCH_CHARTEXT', payload: {playCode: playMeta.workid, troupeCode: user.troupe_code}})
                                }     
                            }>
                        View Parts
                        </MenuButton>
                    </div>
                    <div>
                        <MenuButton onClick={()=>setViewChoice(2)}>My Lines</MenuButton>
                    </div>
                    <div>
                        <MenuButton onClick={()=>setViewChoice(3)}>The Play</MenuButton>
                    </div>
                </MenuSide>
                <ViewSide>
                {viewChoice === 0 ? <p>Choose an option from the menu</p>: 
                            viewChoice === 1 ? <ViewParts/> :
                                viewChoice === 2 ?  <MyLines/>:
                                    <ThePlay/>
                    } 
                </ViewSide>       
        </MainSpace>
    )
}