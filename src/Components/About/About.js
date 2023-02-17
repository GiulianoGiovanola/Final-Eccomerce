import React from 'react'
import { Container } from './styled';
import NavbarStatic from '../NavbarStatic/NavbarStatic'

const About = () => {
  return (
    <div>
      <NavbarStatic />
      <Container>
        <div>
          <h1>HOLA</h1>
          <p>
            COMO ESTAS
          </p>
        </div>
      </Container>
    </div>
  )
}

export default About