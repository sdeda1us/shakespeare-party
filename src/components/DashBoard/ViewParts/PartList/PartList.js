import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';

const TableCell = styled.td `
    word-wrap: break-word;
`

export default function PartList(part) {
    const dispatch  = useDispatch();
    const keyCode = uuidv4();
    const user = useSelector(state=> state.user);
    const takenParts = useSelector(state => state.takenParts);
    //const [buttonFlag, setButtonFlag] = useState(true);

    
    return(
        
        <tr key={keyCode}>
            <td>{part.part.charname}</td>
            <td>{part.part.speechcount}</td>
            {takenParts.map((tp) => {
                    if(tp.role_id === part.part.charid) {
                        return <td>{tp.actor_name}</td>
                        } 
                    })}
            <td>
                 <button onClick={()=>{dispatch({type:'POST_PART', payload: {part: part.part, user: user}})}}>Claim Part</button>    
            </td>
        </tr>
    )
}
  
