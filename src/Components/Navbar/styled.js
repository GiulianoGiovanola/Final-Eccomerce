import styled from 'styled-components';

const Container = styled.div`

    height: 80px;
    background-color: transparent;
    //box-shadow: 1px 1px 5px #333030;
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        width: 4%;
        padding-left: 2em;
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
`

export { Container }