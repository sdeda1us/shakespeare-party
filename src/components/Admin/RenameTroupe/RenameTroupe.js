import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function RenameTroupe() {
    const playMeta = useSelector(state => state.playMeta);
    
    return (
        <div>
            <p>Troupe Name: {playMeta.map((p)=>p.troupe_name)}</p>
            <button>Edit</button>
        </div>
    )

}