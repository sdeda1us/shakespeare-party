import React from 'react';
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

export default function JoinCode() {
    const playMeta = useSelector(state => state.playMeta);

    return (
        <div>
            <TextDisplay>Your Join Code Is: {playMeta.join_code}</TextDisplay>
            <MenuButton>Copy to Clipboard</MenuButton>
        </div>
    )
}