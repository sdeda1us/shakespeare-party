import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PartList from './PartList/PartList.js';

export default function PartsList() {
    const dispatch = useDispatch();
    const parts = useSelector(state=> state.parts);
    const user = useSelector(state=> state.user);
    const playMeta = useSelector(state => state.playMeta);
    useEffect(() => {
        //dispatch({type: 'FETCH_CHARTEXT', payload: {playCode: playMeta.workid}});
        }, []);
    return(
        
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Part</th>
                        <th>Description</th>
                        <th>Total Speeches</th>
                        <th>Actor</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {parts.map((part) => (
                    <PartList part={part}/>))} 
                </tbody>
            </table>
        </div>
    )   
}