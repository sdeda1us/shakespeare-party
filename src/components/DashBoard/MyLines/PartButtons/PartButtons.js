import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

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
        <button onClick={() => getPartText()}>{mp.mp}</button>
    )
}