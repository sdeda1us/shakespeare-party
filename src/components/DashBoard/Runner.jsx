import React from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';

const TopSpace = styled.div `
    padding: 2%;
    display: flex;
    justify-content: space-between;
`
const TopInfo = styled.div `
    font-size: 25px;
`

export default function Runner() {
    const playMeta = useSelector(state => state.playMeta);
    
    return (
        <TopSpace>
            {playMeta && <TopInfo>Troupe Name: {playMeta.troupe_name}</TopInfo>}
            {playMeta && <TopInfo>Performing: {playMeta.title} </TopInfo>}
        </TopSpace>
    )
}