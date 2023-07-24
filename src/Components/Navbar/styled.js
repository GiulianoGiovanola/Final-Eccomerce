import styled from 'styled-components';

const Container = styled.div`

    height: 80px;
    background-color: transparent;
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        width: 4%;
        padding-left: 3em;
    }

    nav {
        padding-right: 1em;

        ul{
            display: flex;

            li{
                list-style: none;
                padding: 1em;

                a{
                    text-decoration: none;
                    color: #ffffff;
                    transition: color .5s;
                    font-size: 15px;
                    vertical-align: middle;

                    .imgSociales{
                        width: 100%;
                    }
                    
                    .imgSociales:hover{
                        filter: invert(41%) sepia(84%) saturate(6058%) hue-rotate(332deg) brightness(99%) contrast(98%);
                    }
                }
                a:hover{
                    color: #fa2b57;
                }
            }
        }
    }
  
  
    @media (min-width: 1025px) and (max-width: 1280px) {
        .logo{
            width: 4%;
            padding-right: 4em;
        }

        nav {
            padding-right: 3em;
        }
    }
  
    @media (min-width: 769px) and (max-width: 1024px) {
        .logo{
            width: 6%;
        }

        nav {
            padding-right: 2em;
        }
    }
  
    @media (min-width: 481px) and (max-width: 768px) {
        .logo{
            width: 8%;
        }

        nav{
            padding-right: 2em;

            ul{

                li{

                    a{
                        font-size: 13px;
                    }
                }
            }
        }
    }
  
    @media (min-width: 320px) and (max-width: 480px) {   
        .logo{
            width: 10%;
            padding-left: 1.5em;
        }

        nav{
            padding-right: 1.5em;
            ul{

                li{
                    padding: 0 0 0 1.5em;

                    a{
                        font-size: 13px;

                        img{
                            width: 85%;
                        }
                    }
                }
            }

        }
    }
`

export { Container }