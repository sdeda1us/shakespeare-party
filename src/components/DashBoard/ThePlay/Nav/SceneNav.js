import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

export default function ActNav(c){
    const dispatch = useDispatch();
    const [viewChoice, setViewChoice] = useState(0);
    const chapters = useSelector(state => state.chapter);
    const setScenetoRender = (sceneNumber) => {
        dispatch({type: 'SET_SCENE_VIEW', payload: sceneNumber});
    }

    return(
        <button onClick={()=>{setScenetoRender(c.c.chapter)}}>Scene &nbsp;{c.c.chapter}: &nbsp;{c.c.description}</button>
    )

}



