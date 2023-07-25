import styled from "styled-components";

const Container = styled.div`
  .productoAgregado {
    margin: 2em 0 0;
    color: #fa2b57;
    font-family: "Montserrat", "Poppins", "sans-serif";
    font-weight: 600;
    position: absolute;
    top: 33em;
    left: 14em;
  }

  .gif {
    width: 40%;
    margin: 2em auto 0;
    display: block;
  }

  .exclamation {
    width: 2.4%;
    filter: invert(50%) sepia(94%) saturate(6068%) hue-rotate(330deg)
      brightness(97%) contrast(102%);
    vertical-align: middle;
    padding-right: 0.4em;
    transform: translate(0px, -2px);
  }

  div {
    align-items: center !important;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .productoAgregado {
      top: 31em;
      left: 12em;
    }

    img {
      width: 60%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .productoAgregado {
      top: 32em;
      left: 10em;
    }

    img {
      width: 60%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 85%;
    margin: 0 auto;

    div {
      width: 100%;
      padding: 1em 0;
      height: 61vh;
      div {
        div {
          h1 {
            font-size: 28px;
          }
          p {
            font-size: 15px;
          }
          button {
            font-size: 14px;
          }
        }
      }
    }

    .productoAgregado {
      top: 26em;
      left: 6em;
    }

    img {
      width: 80%;
      margin: 4em auto;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: 0 auto;

    div {
      width: 90%;
      padding: 1em 0;
      height: 100%;
      flex-direction: column;
      div {
        grid-row-gap: 0;
        padding: 1em 0 0;
        div {
          padding: 0;
          h1 {
            font-size: 28px;
          }
          p {
            font-size: 15px;
          }
          button {
            font-size: 14px;
          }
        }
        div:nth-child(2n){
          grid-row: -1;
        }
      }
    }

    .productoAgregado {
      top: 25em;
      left: 4.5em;

      img{
        width: 5%;
        margin: 0 auto;
      }
    }

    img {
      width: 80%;
      margin: 0 auto 4em;
    }
  }
`;

export { Container };
