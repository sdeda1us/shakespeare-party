import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const MenuButton = styled.button `
    padding: 5%;
    width: 80%;
    margin: 5% 5% 0% 5%;
    border: 3px solid #ED60E8;
    background-color: #ED60E8;
    color: white;
    font-size: 30px;
    border-radius: 10px;
`
const TextDisplay = styled.p `
    font-size: 30px;
    text-align: center;
`

export default function RenameTroupe() {
    const dispatch = useDispatch();
    const playMeta = useSelector(state => state.playMeta);
    const [isEditable, setEditable] = useState(false);
    const [newName, setNewName] = useState('');

    useEffect(() => {}
        
        , [playMeta]);

    return (
        <div>
            {isEditable ? <div><TextDisplay>Troupe Name:</TextDisplay> <input type="text" onChange={(event)=>{setNewName(event.target.value)}}></input></div> : <TextDisplay>Troupe Name: {playMeta.troupe_name}</TextDisplay>}
            {!isEditable ? <MenuButton onClick={()=>{setEditable(true); console.log(isEditable)}}>Edit</MenuButton> : <MenuButton onClick={()=>{setEditable(false); dispatch({type:'EDIT_TROUPE_NAME', payload: {name:newName, joinCode:playMeta.join_code}})}}>Submit New Name</MenuButton>}
        </div>
    )
}