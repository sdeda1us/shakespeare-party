import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function JoinPlay() {
    //defines dispatch and usehistory functions
    const dispatch = useDispatch();
    const history = useHistory();
    //defines value of form inputs in state
    const [inputCode, setInputCode] = useState(0);
    //loads from redux store
    const allTroupes = useSelector(state => state.allPlayEvents);
    const userId = useSelector(state => state.user.id)
    //populates the dropdown list with shakespeare plays on page load
    useEffect(() => {dispatch({type: 'FETCH_ALL_PLAY_EVENTS'})}, [dispatch]);

    const submit = (event) => {
        event.preventDefault();
        let toggle = 0;
        allTroupes.map((troupe) => {
            if (troupe.join_code==inputCode){
                dispatch({type: 'UPDATE_USER', payload: {inputCode, userId}})
                toggle = 1;
                history.push('/dashboard');
            } 
        })
        if(toggle===0) {alert('Error! Code does not match any acting troupes, please try again');}
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