import React from 'react';
import {useSelector} from 'react-redux';
import PartButtons from './PartButtons/PartButtons';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const TableCell = styled.td `
    border-bottom: 1px solid black;
`
const TableHeader = styled.th `
    border-bottom: 1px solid black;
`

export default function MyLines() {
    const user = useSelector(state => state.user);
    const takenParts = useSelector(state => state.takenParts);
    const charLines = useSelector(state => state.charLines)
    const myParts = [];
    const fillMyParts = () => {
        takenParts.map(tp => {
            if(tp.actor_name===user.username){
                myParts.push(tp.role_id);
            }
        })
    }
    
    return(
        <div>
            <div>
                {fillMyParts()}
                {myParts.map(mp=>(<PartButtons mp={mp} />))}
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <TableHeader>Act</TableHeader>
                            <TableHeader>Scene</TableHeader>
                            <TableHeader>Role</TableHeader>
                            <TableHeader>Line</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                    {charLines.map((cl)=>(
                        <tr>
                            <TableCell>{cl.Act}</TableCell>
                            <TableCell>{cl.Scene}</TableCell>
                            <TableCell>{cl.Role}</TableCell>
                            <TableCell><p>{cl.Line}</p></TableCell>
                        </tr>))}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}