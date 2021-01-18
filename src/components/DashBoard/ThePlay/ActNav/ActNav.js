import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';


const ActButton = styled.button `
    height: 20px;
    width: 15%;
`


export default function ActNav(act){
    const dispatch = useDispatch();
    const [viewChoice, setViewChoice] = useState(0);
    const chapters = useSelector(state => state.chapter);
    const setActtoRender = (actNumber) => {
        dispatch({type: 'SET_ACT_VIEW', payload: actNumber});
    }

    return(
        <ActButton onClick={()=>setActtoRender(act.act.section)}>{act.act.section}</ActButton>
    )

}

