import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ActNav from './Nav/ActNav';
import SceneNav from './Nav/SceneNav';



export default function ThePlay() {
    const dispatch = useDispatch();
    const playMeta = useSelector(state => state.playMeta);
    const chapters = useSelector(state => state.chapter);
    const acts = useSelector(state => state.act);
    const actView = useSelector(state => state.actView);
    const sceneView = useSelector(state => state.actView);


    useEffect(() => {
        dispatch({type: 'FETCH_CHAPTERS', payload: {workid: playMeta.workid}});
        dispatch({type: 'FETCH_ACTS', payload: {workid: playMeta.workid}});
        dispatch({type:'FETCH_PLAY', payload: {workid: playMeta.workid}});
        }, []);


    return(
        <div>
            <div>
                <h2>Act</h2>
                {acts.map(act => (<ActNav act={act} /> ))}
                {chapters.map((c)=>(
                    <p>{actView === c.section && <SceneNav c={c}/>}</p>
                ))}
            </div>
            <div>
                {actView && sceneView && <p>Text will go here!</p>}
            </div>
        </div>
    )
}