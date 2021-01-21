import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const MenuButton = styled.button `
    width: 8rem;
    border: 3px solid white;
    background-color: black;
    color: white;
    font-size: 30px;
    border-radius: 120px;
    font-family: 'Calligraffitti', cursive;
`
const TextDisplay = styled.p `
    font-size: 30px;
    text-align: center;
`
const InputField = styled.input `
    width: 20rem;
`
const Row = styled.div `
    display: inline-flex;
    justify-content: center;
    width: 100%;
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
            <Row>
                {isEditable ? 
                    <div>
                        <TextDisplay>Troupe Name:</TextDisplay> 
                        <InputField 
                            type="text" 
                            onChange={(event)=>{setNewName(event.target.value)}}>
                        </InputField>
                    </div> : 
                        <TextDisplay>
                            Troupe Name: {playMeta.troupe_name}
                        </TextDisplay>
                }
            </Row>
            <Row>
            {!isEditable ? 
                    <MenuButton 
                        onClick={()=>{setEditable(true);}}>
                        Edit
                    </MenuButton> : 
                    <MenuButton 
                        onClick={()=>{
                            setEditable(false); 
                            dispatch({type:'EDIT_TROUPE_NAME', 
                                payload: {name:newName, joinCode:playMeta.join_code}})}}>
                        Submit
                    </MenuButton>
                }
                {isEditable ? <MenuButton onClick={()=>{setEditable(false)}}>Cancel</MenuButton> : <></>}
            </Row>
        </div>
    )
}