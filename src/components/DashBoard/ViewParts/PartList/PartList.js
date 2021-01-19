import React, {useEffect, useState, forceUpdate} from 'react';
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
    const playMeta = useSelector(state => state.playMeta);


    const claimPart = () => {
        dispatch({type:'POST_PART', payload: {part: part.part, user: user}});
        
    }

    const releasePart = (role_id) => {
        dispatch({type: 'DELETE_TAKEN_PARTS', payload: role_id});
    }

    const checkMatch = () => {
        for (let i of takenParts){
            if(i.role_id === part.part.charid) {
                if(i.actor_id === user.id){
                    return <><td>{i.actor_name}</td><td><button onClick={()=>releasePart(i.role_id)}>Release Part</button></td></>
                }else{
                    return <td>{i.actor_name}</td>
                }
            } 
        }
        return <td><button onClick={()=>(claimPart())}>Claim Part</button> </td>
    }

    return(
        
        <tr key={keyCode}>
            <td>{part.part.charname}</td>
            <td>{part.part.speechcount}</td>
            {checkMatch()}
            
        </tr>
    )
}
  
