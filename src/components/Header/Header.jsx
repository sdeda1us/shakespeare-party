import React from 'react';
import styled from 'styled-components';

const Banner = styled.div 
`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
    background-color: black;
    height 100px;
    width: 100%;
    color: #ED60E8;
    font-family: 'Dancing Script', cursive;
    font-size: 80px;
    text-align: center;
`

function Header() {

    return(
        <>
            <Banner>
                Shakespeare Party!
            </Banner>        
        </>
    )
}

export default Header;