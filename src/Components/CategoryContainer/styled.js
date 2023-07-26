import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 125px auto 50px;

  .gif {
    width: 40%;
    margin: 0 auto;
    display: block;
  }

  .contenedor {
    padding: 0.5em;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;

    div {
      grid-column: span 4;
      div {
        img {
          width: 50%;
        }
        .contenedor {
          padding: 0 1em 1.25em;
          height: 55%;
          h2 {
            font-size: 24px;
          }

          p {
            font-size: 15px;
          }
        }

        a {
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;

    div {
      grid-column-gap: 25px;
      grid-row-gap: 25px;
      div {
        img {
          width: 40%;
        }
        .contenedor {
          padding: 0 1em;
          h2 {
            font-size: 20px;
          }

          p {
            font-size: 15px;
          }
        }

        a {
          font-size: 13px;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;

    div {
      grid-column-gap: 25px;
      grid-row-gap: 25px;
      div {
        width: 90%;
        margin: 0 auto;
        img {
          width: 40%;
        }
        .contenedor {
          padding: 0 1em;
          h2 {
            font-size: 20px;
          }

          p {
            font-size: 15px;
          }
        }

        a {
          font-size: 13px;
        }
      }
    }
  }
`;

export { Container };
