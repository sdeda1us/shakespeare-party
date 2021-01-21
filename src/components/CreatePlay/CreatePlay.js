import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const SubmitButton = styled.button `
    width: 4rem;
    height: 2rem;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin-left: 10px;
`

function CreatePlay() {
    //defines dispatch function
    const dispatch = useDispatch();
    const history = useHistory();
    //defines value of form inputs in state
    const [troupeName, setTroupeName] = useState('');
    const [playChoice, setPlayChoice] = useState(0);
    const inputCode = Math.floor(Math.random() * (99999 - 10000) + 10000);
    //loads from redux store
    const user = useSelector(state => state.user.id);
    const playList = useSelector(state=> state.allPlays);
    //populates the dropdown list with shakespeare plays on page load
    useEffect(() => {dispatch({type: 'FETCH_ALL_PLAYS'})}, [dispatch]);

    const submit = (event) => {
        event.preventDefault();
        const formPacket = {troupeName: troupeName, playChoice: playChoice, userId: user, joinCode:inputCode};
        dispatch({type:'CREATE_PLAY_INSTANCE', payload: formPacket});
        history.push('/dashboard');
    }

    return(
        <div>
            <form onSubmit={(event) => submit(event)}>
                <label>Create name for your troop of mirthful players!</label>
                <input type="text" onChange={(event) => setTroupeName(event.target.value)}/>
                <label>Select a play to perform!</label>
                <select onChange={(event) => setPlayChoice(event.target.value)}>
                    <option>Choose a Play</option>
                    {playList.map((play) => (<option key={play.id} value={play.id}>{play.title}</option>))}
                </select>
                <SubmitButton type="submit">Submit</SubmitButton>
            </form>
        </div>
    )
}

export default CreatePlay;