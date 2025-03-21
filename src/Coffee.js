import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  line-height: 2;
  height: 5rem;
  text-decoration: none;
  display:inline-flex;
  color: #FFFFFF;
  background-color: #FF813F;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 2rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: cursive;
  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:#FFFFFF;
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 2rem;
  vertical-align: middle;
`;

function Coffee() {
  return (
    <Button target="_blank" href="https://www.buymeacoffee.com/zelwa">
      <Image src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"  />
      <Text>Buy me a coffee</Text>
    </Button>
  );
}



export default Coffee;