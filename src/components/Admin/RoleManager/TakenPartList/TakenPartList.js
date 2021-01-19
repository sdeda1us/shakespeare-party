import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';


export default function TakenPartList(tp){
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const takenParts = useSelector(state => state.takenParts);

    useEffect(() => {
    }
    , [takenParts]);


    return (
        <tr>
            <td>{tp.tp.actor_name}</td>
            <td>{tp.tp.role_id}</td>
            <td><button onClick={()=>{dispatch({type: 'DELETE_TAKEN_PARTS', payload: {role: tp.tp.role_id, joinCode: user.troupe_code}});
            }}>
                
                Remove Actor from Role
                </button>
            </td>
        </tr>
    )
}