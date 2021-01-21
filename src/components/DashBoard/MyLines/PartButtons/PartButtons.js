import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const MenuButton = styled.button `
    width: 12rem;
    border: 3px solid white;
    background-color: black;
    color: white;
    font-size: 12px;
    border-radius: 120px;
`

export default function PartButtons(mp){
    const dispatch = useDispatch();
    const playText = useSelector(state => state.playText);
    let linesArray = [];

    const getPartText = () => {
        for (let i =0; i < playText.length; i++) {
            let pt = playText[i];
            if(playText[i].charid === mp.mp){
               linesArray.push({Act: pt.section, Scene: pt.chapter, Role: pt.charid, Line: pt.plaintext})
            }
        }
        dispatch({type: 'SET_CHAR_LINES', payload: linesArray});
    }

    return (
        <MenuButton onClick={() => getPartText()}>{mp.mp}</MenuButton>
    )
}