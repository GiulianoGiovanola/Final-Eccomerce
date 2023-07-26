import React from "react";
import { Container } from "./styled";
import Coffee from '../../img/coffee-img-1.jpg'
import Person from '../../img/person-img-2.jpg'

const Empresa = () => {
  return (
    <Container>
      <div className="parrafo special">
        <img className="coffee" src={Coffee} alt="imgCoffee" />
        <div>
          <h2>OUR STORY</h2>
          <h4>HOW IT ALL STARTED</h4>
          <p>
            The Coffee Station story began more than 66 years ago with a simple
            idea: enable anyone to create the perfect cup of espresso coffee –
            just like a skilled barista. From its beginning in 1957, Coffee
            Station has redefined and revolutionised the way millions of people
            enjoy their espresso coffee and shaped the global coffee culture.
          </p>
        </div>
      </div>
      <div className="parrafo">
        <div>
          <h2>A GLOBAL PRESENCE</h2>
          <h4>THE REST IS HISTORY</h4>
          <p>
            For more than 60 years, our innovations have redefined the way
            millions of people enjoy their coffee, growing from a
            ground-breaking idea in United State to a global brand with a
            presence in 81 countries.
          </p>
          <p>
            At the touch of a button, customers in homes, offices, hotels,
            restaurants and cafés can enjoy high-quality, sustainably produced
            coffee, cup after cup.
          </p>
          <p>
            Yes, we continue to grow and are still relentless in our focus on
            delivering sustainable quality at every stage of our value chain
            while at the same time maintaining a direct privileged relationship
            with our customers.
          </p>
        </div>
        <img className="person" src={Person} alt="imgPerson" />
      </div>
    </Container>
  );
};

export default Empresa;
