import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PartList from './PartList/PartList.js';
import styled from 'styled-components';


const Table = styled.table `
    width: 95%;
    margin: auto;
    padding: 1em;
    layout: fixed;
`

const TableHead = styled.th `
    text-align: left;
`

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
            <Table>
                <thead>
                    <tr>
                        <TableHead>Part</TableHead>
                        <TableHead>Total Speeches</TableHead>
                        <TableHead>Actor</TableHead>
                        <TableHead>Button</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {parts.map((part) => (
                    <PartList part={part}/>))} 
                </tbody>
            </Table>
        </div>
    )   
}