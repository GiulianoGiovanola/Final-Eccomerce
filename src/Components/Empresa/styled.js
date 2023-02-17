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

  .parrafo1 {
    padding: 0;
  }

  div {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 5em 0;

    .coffee, .person {
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
`;

export { Container };
