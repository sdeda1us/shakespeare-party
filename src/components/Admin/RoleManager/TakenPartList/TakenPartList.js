import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


export default function TakenPartList(tp){
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    return (
        <tr>
            <td>{tp.tp.actor_name}</td>
            <td>{tp.tp.role_id}</td>
            <td><button onClick={()=>{dispatch({type: 'DELETE_TAKEN_PARTS', payload: tp.tp.role_id});
                    dispatch({type: 'FETCH_TAKEN_PARTS', payload: {user:user}})
            }}>
                
                Remove Actor from Role
                </button>
            </td>
        </tr>
    )
}