import styled from "styled-components";

const Container = styled.div`
  color: #333030;
  position: relative;
  background-color: white;
  padding: 10em 0;

  img {
    width: 40%;
    min-height: 200px;
    rotate: 200grad;
    transform: scaleY(-1);
  }

  h2 {
    font-size: 38px;
    font-weight: 800;
    width: 100%;
    text-align: center;
    margin-bottom: 3em;
  }

  div {
    display: flex;
    width: 100%;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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

      a {
        color: #fff;
        text-decoration: none;
        background-color: #fa2b57;
        border-radius: 6px;
        padding: 1em;
        font-size: 14px;
        box-shadow: 0px 5px 10px -5px #333030;
        border: none;
        cursor: pointer;
      }

      p {
        font: 500 18px "EB Garamond", serif;
        width: 80%;
        line-height: 32px;
        margin: 0 0 1.5em;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    div {
      p {
        font-size: 16px;
      }
    }

    h2 {
      font-size: 34px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    div {
      p {
        font-size: 16px;
      }
    }

    h2 {
      font-size: 34px;
    }

    img {
      width: 45%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 10em 0;

    div {
      flex-direction: column-reverse;
      div {
        margin-bottom: 3em;

        p {
          font-size: 16px;
        }
      }
    }

    h2 {
      font-size: 34px;
      width: 80%;
      margin: 0 auto 1em;
    }

    img {
      width: 75%;
      rotate: 180grad;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 5em 0;

    div {
      flex-direction: column-reverse;
      div {
        margin-bottom: 3em;
        p {
          font-size: 16px;
        }
      }
    }

    h2 {
      font-size: 30px;
      width: 80%;
      margin: 0 auto 1em;
    }

    img {
      width: 90%;
    }
  }
`;

export { Container };
