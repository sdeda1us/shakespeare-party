import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function CreatePlay() {
    //defines dispatch function
    const dispatch = useDispatch();
    const history = useHistory();
    //defines value of form inputs in state
    const [troupeName, setTroupeName] = useState('');
    const [playChoice, setPlayChoice] = useState(0);
    const inputCode = Math.floor(Math.random() * (99999 - 10000) + 10000);
    //loads from redux store
    const userID = useSelector(state => state.user.id);
    const playList = useSelector(state=> state.allPlays);
    //populates the dropdown list with shakespeare plays on page load
    useEffect(() => {dispatch({type: 'FETCH_ALL_PLAYS'})}, []);

    const submit = (event) => {
        event.preventDefault();
        const formPacket = {troupeName: troupeName, playChoice: playChoice, userId: userID.id, joinCode:inputCode};
        console.log(formPacket);
        dispatch({type: 'POST_PLAY_EVENT', payload: formPacket});
        dispatch({type: 'UPDATE_USER', payload: {inputCode, userID}});
        history.push('/dashboard');
    }

    return(
        <div>
            <form onSubmit={(event) => submit(event)}>
                <label>Create name for your troop of mirthful players!</label>
                <input type="text" onChange={(event) => setTroupeName(event.target.value)}/>
                <label>Select play to perform from the list</label>
                <select onChange={(event) => setPlayChoice(event.target.value)}>
                    <option>Choose a Play</option>
                    {playList.map((play) => (<option key={play.id} value={play.id}>{play.title}</option>))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePlay;