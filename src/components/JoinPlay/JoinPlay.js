import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function JoinPlay() {
    //defines dispatch function
    const dispatch = useDispatch();
    //defines value of form inputs in state
    const [inputCode, setInputCode] = useState(0);
    //loads from redux store
    const allTroupes = useSelector(state => state.allPlayEvents);
    const userId = useSelector(state => state.user.id)
    //populates the dropdown list with shakespeare plays on page load
    useEffect(() => {dispatch({type: 'FETCH_ALL_PLAY_EVENTS'})}, []);

    const submit = (event) => {
        event.preventDefault();
        allTroupes.map((troupe) => {
            console.log(allTroupes);
            console.log(troupe.join_code, inputCode);
            if (troupe.join_code==inputCode){
                dispatch({type: 'UPDATE_USER', payload: {inputCode, userId}})
                //TO DO - Navigate to dashboard
            }
        })
    }

    return(
        <div>
            <form onSubmit={(event) => {submit(event)}}>
                <label>Enter your troupe's 5 digit join code</label>
                <input onChange={(event) => setInputCode(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default JoinPlay;