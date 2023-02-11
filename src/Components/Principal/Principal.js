import React from 'react'
import Cafe from '../../img/img6.png';
import { Container } from './styled';
import Button from '../Button/Button';
import background from "../../img/background.png"

const Principal = () => {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <div>
        <h1>Step into the light</h1>
        <h3>with our special coffe flavours</h3>
        <Button />
      </div>
      <img src={Cafe} alt="imgCafe" />
    </Container>
  );
};

export default Principal;
