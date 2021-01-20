import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PartButtons from './PartButtons/PartButtons';


export default function MyLines() {
    const user = useSelector(state => state.user);
    const takenParts = useSelector(state => state.takenParts);
    const charLines = useSelector(state => state.charLines)
    const myParts = [];
    const fillMyParts = () => {
        takenParts.map(tp => {
            if(tp.actor_name===user.username){
                myParts.push(tp.role_id);
            }
        })
    }
    

    return(
        <div>
            <div>
                {fillMyParts()}
                {myParts.map(mp=>(<PartButtons mp={mp} />))}
            </div>
            <div>
                {charLines.map((cl)=>(<p>{cl.Act}{cl.Scene}{cl.Role}{cl.Line}</p>))}
            </div>
        </div>
    )
}