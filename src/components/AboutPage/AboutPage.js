import React from 'react';
import styled from 'styled-components';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

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
