import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TakenPartList from './TakenPartList/TakenPartList';
import styled from 'styled-components';

const TableSpace = styled.div `
    display: flex;
    justify-content: center;
`

export default function RoleManager() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const takenParts = useSelector(state => state.takenParts)

    useEffect(() => 
        {dispatch({type: 'FETCH_TAKEN_PARTS', payload: user.troupe_code})}
        , [dispatch, user.troupe_code]);


    return (
        <TableSpace>
            <table>
                <thead>
                    <tr>
                        <th>Actor</th>
                        <th>Part</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {takenParts.map((tp)=> <TakenPartList tp={tp}/>)}
                </tbody>
            </table>
        </TableSpace>
    )

}