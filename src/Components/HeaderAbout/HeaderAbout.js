import React from "react";
import { Container } from "./styled";
import Background from "../../img/background-about.png";

const HeaderAbout = () => {
  return (
    <Container style={{ backgroundImage: `url(${Background})` }}>
      <div>
        <h4>HOW IT ALL STARTED</h4>
        <h1>OUR STORY</h1>
      </div>
    </Container>
  );
};

export default HeaderAbout;
