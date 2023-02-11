import React from "react";
import Mesa from "../../img/capsule1.png";
import { Container } from "./styled";

const Informacion = () => {
  return (
    <Container>
      <h2>Our Coffee Comes with our Signature Desserts</h2>
      <div>
        <img src={Mesa} alt="imgCafe" />
        <div>
          <p>
            At Coffee Station we see life from a positive perspective, trying
            every day to turn our obligations into small pleasures for our
            customers, thanks to the best selection of coffees in the world and
            the healthy properties of tea.
            <br />
            Our philosophy is based on balance and enjoyment through a healthy
            diet with healthy infusions and anti-oxidant coffees.
            <br />
            We want to share this philosophy with all our clients.
            <br />
            Go ahead and try the coffees and infusions that we have selected for
            you and check all their properties.
          </p>
          <a href="/about">Learn More</a>
        </div>
      </div>
    </Container>
  );
};

export default Informacion;
