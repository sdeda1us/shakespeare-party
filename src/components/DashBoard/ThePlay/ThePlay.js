import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';



export default function ThePlay() {
    const dispatch = useDispatch();
    const playMeta = useSelector(state => state.playMeta);
    useEffect(() => {
        dispatch({type: 'FETCH_CHAPTERS', payload: {workid: playMeta.workid}});
        dispatch({type: 'FETCH_ACTS', payload: {workid: playMeta.workid}});

        }, []);


    return(
        <p>hi from the play!</p>
    )
}