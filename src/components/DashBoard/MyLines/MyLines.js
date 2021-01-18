import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


export default function MyLines() {
    const user = useSelector(state => state.user);
    const takenParts = useSelector(state => state.takenParts);
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
            {fillMyParts()}
            {myParts.map(mp=>(<button>{mp}</button>))}
        </div>
        
    )
}