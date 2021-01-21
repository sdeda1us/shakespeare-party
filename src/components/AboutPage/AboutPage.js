import React from 'react';
import styled from 'styled-components';

//-------------------------------Styled Components--------------------------//
let TextRegular = styled.p `
  color: black;
  text-align: center;
  font-size: 25px;
`

const AboutPage = () => (
  <div className="container">
    <div>
      <TextRegular>Shakespeare Party is an application that lets you manage the casting for a Shakespeare reading adventure!</TextRegular> 
      <TextRegular>Whether it is for a fun night with friends or a school production, assignments of parts can be quick and painless!</TextRegular>
    </div>
  </div>
);

export default AboutPage;
