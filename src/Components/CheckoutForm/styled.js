import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  button{
    margin: 1em;
    padding: 1em;
    background-color: #fa2b57;
    border: none;
    color: #fff;
    border-radius: 6px;
    width: 15%;
    font-family: 'Montserrat', 'Poppins', 'sans-serif';
    text-transform: uppercase;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    button{
    width: 20%;
  }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    button{
    width: 30%;
  }
  }

  @media (min-width: 320px) and (max-width: 480px) {
   button{
    width: 50%;
  }
  }
`;

export { Container };