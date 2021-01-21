import React from 'react';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
const Banner = styled.div 
`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
    background-color: #020300;
    height 100px;
    width: 100%;
    color: #FBFBFB;
    font-family: 'Dancing Script', cursive;
    font-size: 70px;
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