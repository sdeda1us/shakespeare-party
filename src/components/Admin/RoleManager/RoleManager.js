import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TakenPartList from './TakenPartList/TakenPartList';


export default function RoleManager() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const takenParts = useSelector(state => state.takenParts)

    useEffect(() => 
        {dispatch({type: 'FETCH_TAKEN_PARTS', payload:user.troupe_code})}
        , []);


    return (
        <div>
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
        </div>
    )

}