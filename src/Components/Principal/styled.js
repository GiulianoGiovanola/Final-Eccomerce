import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-size: cover !important;
  height: 100vh;
  position: relative;
  z-index: 1;

  img {
    width: 39%;
    min-height: 200px;
  }

  div {
    padding: 0 5em;

    h1 {
      font-size: 50px;
      font-weight: 800;
      margin: 0 0 0.2em 0;
    }
    h3 {
      font-size: 30px;
      font-weight: 500;
      margin: 0 0 1em 0;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    background: center;

    div {
      h1 {
        font-size: 44px;
      }

      h3 {
        font-size: 24px;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background: center;
    background-size: cover;

    img {
      width: 45%;
    }

    div {
      padding: 0 2em;
      h1 {
        font-size: 42px;
      }

      h3 {
        font-size: 24px;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    background: center;

    img {
      width: 50%;
    }

    div {
      padding: 0 0 0 2em;
      h1 {
        font-size: 30px;
      }

      h3 {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column !important;
    justify-content: flex-end !important;
    background: center;

    div {
      padding: 0;
      text-align: center;
      h1 {
        font-size: 34px;
      }

      h3 {
        font-size: 18px;
      }
    }
    img {
      width: 90%;
    }
  }
`;

export { Container };
