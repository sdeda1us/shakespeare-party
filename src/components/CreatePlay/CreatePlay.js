import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function CreatePlay() {
    const dispatch = useDispatch();
    useEffect(() => {dispatch({type: 'FETCH_ALL_PLAYS'})}, []);
    return(
        <div>
            <label>Select Play from the List below</label>
            <select>

            </select>
        </div>
    )
}

export default CreatePlay;