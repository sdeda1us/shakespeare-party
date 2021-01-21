import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const MenuButton = styled.button `
    width: 12rem;
    border: 3px solid white;
    background-color: black;
    color: white;
    font-size: 12px;
    border-radius: 120px;
`
const TableCell = styled.td `
    border-bottom: 1px solid black;
`

export default function TakenPartList(tp){
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const takenParts = useSelector(state => state.takenParts);

    useEffect(() => {
    }
    , [takenParts]);


    return (
        <tr>
            <TableCell>{tp.tp.actor_name}</TableCell>
            <TableCell>{tp.tp.role_id}</TableCell>
            <TableCell><MenuButton onClick={()=>{dispatch({type: 'DELETE_TAKEN_PARTS', payload: {role: tp.tp.role_id, joinCode: user.troupe_code}});
            }}>
                
                Remove Actor from Role
                </MenuButton>
            </TableCell>
        </tr>
    )
}