import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

const SceneButton = styled.button `
    height: 20px;
    width: 12rem;
    background-color: black;
    color: white;
`

export default function ActNav(c){
    const dispatch = useDispatch();
    const actView = useSelector(state => state.actView);
    const sceneView = useSelector(state => state.sceneView);
    const playText = useSelector(state => state.playText);
    let linesArray = [];
        
    useEffect(() => {
        }, [sceneView]);

    const preparePlayText = (sceneNumber) => {
        for (let i = 0; i < playText.length; i++){
            let pt = playText[i];
            if(pt.section === actView && pt.chapter === sceneNumber){
                linesArray.push({Act: pt.section, Scene: pt.chapter, Role: pt.charid, Line: pt.plaintext})
            }   
        }
        dispatch({type: 'SET_READING_TEXT', payload: linesArray});
    }
    

    return(
        <SceneButton onClick={()=>preparePlayText(c.c.chapter)}>Scene &nbsp;{c.c.chapter}: &nbsp;{c.c.description}</SceneButton>
    )

}

