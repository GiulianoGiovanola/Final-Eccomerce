import styled from "styled-components";

const Container = styled.div`
  width: 75%;
  margin: 125px auto 50px;
  background-color: #fff;
  padding: 3em;
  min-height: 60vh;
  border-radius: 15px;
  box-shadow: 0px 10px 30px -2px rgba(0, 0, 0, 0.2);

  h2 {
    color: #333030;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
  }

  h3 {
    color: #333030;
    text-align: center;
    font-size: 22px;
    margin: 2em 0 0;
  }

  input {
    margin: 1em;
    padding: 1.25em 0.5em 1.25em 1em;
    border: none;
    background-color: #fa2b57;
    color: #fff;
    border-radius: 6px;
    width: 33%;
    font-family: "Montserrat", "Poppins", "sans-serif";
    text-transform: uppercase;
  }

  input::placeholder {
    color: #e9e9e9;
  }

  input:focus {
    outline: none;
    border: 2px solid #333030;
    border-color: #fa2b57;
    background-color: transparent;
    color: #333030;
  }

  ul {
    padding: 0;
    margin: 0 auto;
  }

  .precio {
    font-weight: 600;
  }

  .contentInputs {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    input {
      width: 25%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    input {
      width: 25%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .contentInputs {
      flex-direction: column;
      align-items: center;
      input {
        margin: 1em 0;
        width: 100%;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 3em 2em;

    div{
        grid-column-gap: 0;
    }
    .contentInputs {
      flex-direction: column;
      align-items: center;
      input {
        margin: 1em 0;
        width: 100%;
      }
    }
  }
`;

export { Container };
