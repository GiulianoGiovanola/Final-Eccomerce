import styled from "styled-components";

const Footer = styled.footer`
  background-color: #333030;
  color: #fff;
  width: 100%;
  text-align: center;
  align-self: flex-end;
  display: flex;
  padding: 2em 0;

  .logo {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 40%;
    }
  }

  nav {
    width: 28%;
    margin: 0 auto;

    h3 {
      font-size: 18px;
      margin: 0 auto;
      text-align: left;
      padding: 0 0 0 3em;
    }

    ul {
      padding: 0;

      li {
        list-style: none;
        line-height: 20px;
        padding: 0.75em 0 0 3em;
        width: 100%;
        margin: 0 auto;
        text-align: left;

        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.5s;

          .imgSociales {
            padding-right: 0.5em;
            width: 6%;
            vertical-align: middle;
            fill: #fa2b57;
          }
        }

        a:hover {
          color: #fa2b57;
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    nav {
      h3{
        padding: 0 0 0 1em;
      }
      ul {
        li {
          padding: 0.75em 0 0 1em;
          a {
            font-size: 15px;
            .imgSociales {
              width: 8%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .logo {
      margin: 1em 0;
      width: 50%;
    }

    nav {
      margin: 1em 0;
      width: 50%;
      h3 {
        padding: 0;
      }
      ul {
        li {
          padding: 0.75em 0;
          a {
            font-size: 15px;
            .imgSociales {
              width: 10%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    .logo {
      margin: 1em 0;
      width: 50%;
    }

    nav {
      width: 50%;
      margin: 1em 0;
      h3 {
        padding: 0;
      }
      ul {
        li {
          padding: 0.75em 0;
          a {
            font-size: 15px;
            .imgSociales {
              width: 10%;
            }
          }
        }
      }
    }
  }
`;

export { Footer };
