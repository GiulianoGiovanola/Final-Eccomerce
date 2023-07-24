import styled from "styled-components";

const Button = styled.button`
  background-color: #fa2b57;
  border-radius: 6px;
  padding: 1em;
  font-size: 16px;
  box-shadow: 0px 10px 20px -5px #333030;
  border: none;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
  }
`;

export { Button };
