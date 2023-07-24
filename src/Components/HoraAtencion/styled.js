import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #333030;
  position: relative;
  background-color: white;
  padding: 10em 0 0;

  img {
    width: 20%;
    min-height: 200px;
    rotate: 200grad;
    transform: scaleY(-1);
  }

  div {
    padding: 0 5em;

    h2 {
      font-size: 38px;
      font-weight: 800;
    }
    h3 {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 2em;
      color: #9abec1;
    }
    h4 {
      font-size: 18px;
      font-weight: 500;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    div {
      h2 {
        font-size: 34px;
      }

      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 16px;
      }
    }

    img {
      width: 23%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    div {
      h2 {
        font-size: 34px;
      }

      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 16px;
      }
    }

    img {
      width: 28%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    div {
      h2 {
        font-size: 34px;
      }

      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 16px;
      }
    }

    img {
      width: 30%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column !important;
    justify-content: flex-end !important;
    background-color: white;
    padding-top: 4em;

    div {
      padding: 0;
      text-align: center;
      h2 {
        font-size: 30px;
      }

      h3 {
        font-size: 18px;
      }

      h4 {
        font-size: 16px;
      }
    }
    img {
      width: 60%;
    }
  }
`;

export { Container };
