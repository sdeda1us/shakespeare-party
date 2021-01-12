import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function CreatePlay() {
    const dispatch = useDispatch();
    const playList = useSelector(state=> state.allPlays);
    useEffect(() => {dispatch({type: 'FETCH_ALL_PLAYS'})}, []);
    return(
        <div>
            <label>Select Play from the List below</label>
            <select>
                <option>Choose a Subject</option>
                {playList.map((p) => (<option key={p.id} value={p.play_code}>{p.play_name}</option>))}
            </select>
        </div>
    )
}

export default CreatePlay;