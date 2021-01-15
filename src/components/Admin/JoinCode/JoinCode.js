import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function JoinCode() {
    const playMeta = useSelector(state => state.playMeta);

    return (
        <p>Your Join Code Is: {playMeta.map((p)=> p.join_code)}</p>
    )

}