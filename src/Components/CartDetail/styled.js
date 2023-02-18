import styled from "styled-components";

const Container = styled.div`

button {
      color: white;
      border: none;
      background-color: #fa2b57;
      border-radius: 4px;
      padding: 0.5em 1em;
      cursor: pointer;
}

.total{
  margin: 0;
}

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .productname{
      width: 20%;
      text-align: start;
    }

    .addOrDelete {
      width: 15%;
      text-align: center;

      .btn {
        color: white;
        border: none;
        background-color: #fa2b57;
      }

      .btn:disabled {
        color: #a1cac8;
        border: 1px solid #a1cac8;
        background-color: #fafafa;
      }

      .btn, .btn:disabled {
        border-radius: 4px;
        margin: 0 1em;
        cursor: pointer;
      }

      label {
        color: #303030;
      }
    }

  }

  p {
    color: #333030;
    text-align: center;
  }

  .precio{
    text-align: end;
  }

  .final{
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    width: 90%;
    margin: 2em auto 0;
  }

  .final2{
    text-align: center;
  }
`;

export { Container };
