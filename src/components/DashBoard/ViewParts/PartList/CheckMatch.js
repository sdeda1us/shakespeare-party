import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';


 export default function CheckMatch(part) {
     const takenParts = useSelector(state=>state.takenParts);
     const playMeta = useSelector(state=>state.playMeta);
     const user = useSelector(state=> state.user);
     const parts = useSelector(state=> state.parts);
     const dispatch  = useDispatch();

     useEffect(() => {
        }, [parts]);

     const claimPart = () => {
        dispatch({type:'POST_PART', payload: {part: part.part, user: user}});
    }

    const releasePart = (role_id) => {
        dispatch({type: 'DELETE_TAKEN_PARTS', payload: {role: role_id, joinCode: playMeta.join_code}});
    }

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