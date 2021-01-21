import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const TextDisplay = styled.p `
    font-size: 30px;
    text-align: center;
`

export default function JoinCode() {
    const playMeta = useSelector(state => state.playMeta);

    return (
        <div>
            <TextDisplay>Your Join Code Is: {playMeta.join_code}</TextDisplay>
        </div>
    )
}