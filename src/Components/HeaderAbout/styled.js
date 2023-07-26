import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-attachment: fixed;
  background-position: 0 -18em;

  div {
    text-align: center;

    h1 {
      font-size: 50px;
      font-weight: 800;
      line-height: 10px;
    }

    h4 {
      font-size: 20px;
      font-weight: 500;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    height: 100vh;
    background-position: 0;

    div {
      h1 {
        font-size: 44px;
      }

      h4 {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 100vh;
    background-position: 0;

    div {
      h1 {
        font-size: 42px;
      }

      h4 {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 100vh;
    background-position: 0;
    div {
      h1 {
        font-size: 30px;
      }

      h4 {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100vh;
    background-position: 0;
    div {
      h1 {
        font-size: 34px;
      }

      h4 {
        font-size: 16px;
      }
    }
  }
`;

export { Container };
