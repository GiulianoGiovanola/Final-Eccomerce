import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  color: #303030;
  padding: 7em 0;

  img {
    width: 40%;
    min-height: 200px;
    rotate: 200grad;
    transform: scaleY(-1);
  }

  .parrafo {
    padding: 0;
  }

  div {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 5em 0;

    .coffee,
    .person {
      box-shadow: 0px 1px 2px rgb(0 0 0 / 10%), 0px 2px 4px rgb(0 0 0 / 10%),
        0px 4px 8px rgb(0 0 0 / 10%), 0px 8px 16px rgb(0 0 0 / 10%);
    }

    .coffee {
      border-top-left-radius: 1em;
      border-bottom-left-radius: 1em;
    }

    .person {
      border-top-right-radius: 1em;
      border-bottom-right-radius: 1em;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 7em;

      h2 {
        font-size: 30px;
        font-weight: 800;
        line-height: 10px;
        text-align: center;
      }
      h4 {
        font-size: 18px;
        font-weight: 500;
        line-height: 10px;
      }
      p {
        font: 500 16px "EB Garamond", serif;
        width: 85%;
        line-height: 32px;
        margin: 0 0 1.5em;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    padding: 2em 0 0;
    div {
      div {
        margin-left: 4em;

        h2 {
          font-size: 30px;
        }
        h4,
        p {
          font-size: 16px;
        }

        p {
          width: 90%;
          margin: 0 0 0.75em;
        }
      }
    }

    .parrafo {
      padding: 5em 0 0;
    }

    .parrafo > div {
      padding: 0 !important;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 2em 0 0;

    .special {
      padding-bottom: 0 !important;
    }

    div {
      div {
        margin-left: 4em;

        h2 {
          font-size: 32px;
        }
        h4,
        p {
          font-size: 16px;
        }

        p {
          width: 90%;
          margin: 0 0 0.75em;
        }
      }
    }

    .parrafo {
      padding: 5em 0 5em;
    }

    .parrafo > div {
      padding: 0 !important;
    }

    img {
      height: 70vh;
      object-fit: cover;
      object-position: right;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 2em 0 0;

    .special {
      padding-bottom: 0 !important;
      flex-direction: column-reverse !important;
    }

    div {
      .coffee,
      .person {
        box-shadow: none;
      }

      .coffee {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .person {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      div {
        margin-left: 4em;

        h2 {
          font-size: 28px;
        }
        h4,
        p {
          font-size: 16px;
        }

        p {
          width: 90%;
          margin: 0 0 0.75em;
        }
      }
    }

    .parrafo {
      padding: 2em 0 0;
      flex-direction: column;
    }

    .parrafo > div {
      padding: 0 !important;
      margin: 0 0 1em;
      width: 90%;
    }

    img {
      width: 100%;
      object-fit: cover;
      object-position: right;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 2em 0 0;

    .special {
      padding-bottom: 0 !important;
      flex-direction: column-reverse !important;
    }

    div {
      .coffee,
      .person {
        box-shadow: none;
      }

      .coffee {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .person {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      div {
        margin-left: 4em;

        h2 {
          font-size: 24px;
        }
        h4,
        p {
          font-size: 16px;
        }

        p {
          width: 90%;
          margin: 0 0 0.75em;
        }
      }
    }

    .parrafo {
      padding: 2em 0 0;
      flex-direction: column;
    }

    .parrafo > div {
      padding: 0 !important;
      margin: 0 0 1em;
      width: 90%;
    }

    img {
      width: 100%;
      object-fit: cover;
      object-position: right;
    }
  }
`;

export { Container };
