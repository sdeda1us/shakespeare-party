import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ActNav from './Nav/ActNav';
import SceneNav from './Nav/SceneNav';
import styled from 'styled-components';

const TableCell = styled.td `
    border-bottom: 1px solid black;
`
const TableHeader = styled.th `
    border-bottom: 1px solid black;
`
const SceneContainer= styled.div `
    display: inline-flex:
    justify-content: flex-start;
    flex-wrap: wrap;
`


export default function ThePlay() {
    const dispatch = useDispatch();
    const playMeta = useSelector(state => state.playMeta);
    const chapters = useSelector(state => state.chapter);
    const acts = useSelector(state => state.act);
    const actView = useSelector(state => state.actView);
    const readingText = useSelector(state => state.readingText);


    useEffect(() => {
        dispatch({type: 'FETCH_CHAPTERS', payload: {workid: playMeta.workid}});
        dispatch({type: 'FETCH_ACTS', payload: {workid: playMeta.workid}});
        dispatch({type:'FETCH_PLAY', payload: {workid: playMeta.workid}});
        }, []);


    return(
        <div>
            <div>
                <h2>Select Act</h2>
                {acts.map(act => (<ActNav act={act} /> ))}
                <h2>Select Scene</h2>
                <SceneContainer>
                {chapters.map((c)=>(
                    <div>{actView === c.section && <SceneNav c={c}/>}</div>
                ))}
                </SceneContainer>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <TableHeader>Act</TableHeader>
                            <TableHeader>Scene</TableHeader>
                            <TableHeader>Role</TableHeader>
                            <TableHeader>Line</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {readingText.map(rt=> (<tr><TableCell>{rt.Act}</TableCell><TableCell>{rt.Scene}</TableCell><TableCell>{rt.Role}</TableCell><TableCell>{rt.Line}</TableCell></tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}