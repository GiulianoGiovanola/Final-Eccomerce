import React from 'react'
import Taza from '../../img/img8.png';
import { Container } from './styled';

const HoraAtencion = () => {
  return (
    <Container>
      <div>
        <h2>Open Hours</h2>
        <h4>Everyday</h4>
        <h3>08:00 AM - 02:00 PM</h3>
      </div>
      <img src={Taza} alt="imgTaza" />
    </Container>
  )
}

export default HoraAtencion