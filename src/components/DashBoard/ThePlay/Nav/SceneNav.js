import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

export default function ActNav(c){
    const dispatch = useDispatch();
    const actView = useSelector(state => state.actView);
    const sceneView = useSelector(state => state.sceneView);
    const playText = useSelector(state => state.playText);
    let linesArray = [];
        
    
    useEffect(() => {
        }, [sceneView]);

    const preparePlayText = (sceneNumber) => {
        dispatch({type: 'SET_SCENE_VIEW', payload: sceneNumber});
        for (let i = 0; i < playText.length; i++){
            let pt = playText[i];
            console.log('logging locations', pt.section, pt.chapter, actView, sceneView)
            if(pt.section === actView && pt.chapter === sceneView){
                linesArray.push({Act: pt.section, Scene: pt.chapter, Role: pt.charid, Line: pt.plaintext})
            }   
        }
        dispatch({type: 'SET_READING_TEXT', payload: linesArray});
    }
    

    return(
        <button onClick={()=>preparePlayText(c.c.chapter)}>Scene &nbsp;{c.c.chapter}: &nbsp;{c.c.description}</button>
    )

}

