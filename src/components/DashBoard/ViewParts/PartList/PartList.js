import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';


export default function PartList(part) {
    const dispatch  = useDispatch();
    const keyCode = uuidv4();
    const user = useSelector(state=> state.user);
    return(
        
        <tr key={keyCode}>
            <td>{part.part.charname}</td>
            <td>{part.part.description}</td>
            <td>{part.part.speechCount}</td>
            <td>
                <button onClick={()=> {dispatch({type:'POST_PART', payload: {part: part.part, user: user}})}}> 
                    Claim Part
                </button>
            </td>
        </tr>
    )
}
  
