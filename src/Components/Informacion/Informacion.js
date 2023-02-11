import React from 'react'
import Mesa from '../../img/img3.png';
import { Container } from './styled';
import background from "../../img/informacion-coffee.jpg"
import Button from '../Button/Button';

const Informacion = () => {
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <h2>Step into the light</h2>
      <div>
        <p>with our special coffe flavours</p>
        <a href='#'>Learn More</a>
      </div>
      <img src={Mesa} alt="imgCafe" />
    </Container>
  )
}

export default Informacion