import React, {useEffect, useState, forceUpdate} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import CheckMatch from './CheckMatch';

const TableCell = styled.td `
    word-wrap: break-word;
`

export default function PartList(part) {
    const dispatch  = useDispatch();
    const keyCode = uuidv4();
    const user = useSelector(state=> state.user);
    const takenParts = useSelector(state => state.takenParts);
    const playMeta = useSelector(state => state.playMeta);
    const parts = useSelector(state => state.parts);

    const [stateToggle, setStateToggle] = useState(0);


   

   

    return(
        
        <tr key={keyCode}>
            <td>{part.part.charname}</td>
            <td>{part.part.speechcount}</td>
            <CheckMatch part = {part.part}/>
            
        </tr>
    )
}
  
