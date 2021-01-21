import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

//-------------------------------Styled Components--------------------------//
const ActButton = styled.button `
    height: 20px;
    width: 15%;
    background-color: black;
    color: white;
`

export default function ActNav(act){
    const dispatch = useDispatch();
    const setActtoRender = (actNumber) => {
        dispatch({type: 'SET_ACT_VIEW', payload: actNumber});
    }


    return(
        <ActButton onClick={()=>setActtoRender(act.act.section)}>{act.act.section}</ActButton>
    )

}

