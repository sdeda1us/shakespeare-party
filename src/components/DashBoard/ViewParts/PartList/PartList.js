import React from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import CheckMatch from './CheckMatch';

//-------------------------------Styled Components--------------------------//
const TableCell = styled.td `
    word-wrap: break-word;
`

export default function PartList(part) {
    const keyCode = uuidv4();

    return(
        <tr key={keyCode}>
            <TableCell>{part.part.charname}</TableCell>
            <TableCell>{part.part.speechcount}</TableCell>
            <CheckMatch part = {part.part}/>
        </tr>
    )
}
  
