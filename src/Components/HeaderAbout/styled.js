import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: 0 -18em;

  div {
    text-align: center;


    h1{
        font-size: 50px;
        font-weight: 800;
        line-height: 10px;
    }
    
    h4 {
        font-size: 20px;
        font-weight: 500;
    }
  }
`;

export { Container };
