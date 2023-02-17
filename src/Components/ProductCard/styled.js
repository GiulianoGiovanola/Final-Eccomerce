import styled from 'styled-components'

const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 8px;
background-color: #fff;
color: #000;
padding: 1em 0 0;

box-shadow: 0px 1px 2px rgb(0 0 0 / 10%), 0px 2px 4px rgb(0 0 0 / 10%), 0px 4px 8px rgb(0 0 0 / 10%), 0px 8px 16px rgb(0 0 0 / 10%);

img{
    width: 60%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 1em 0;
}

.contenedor{
    padding: 0 0.5em 2em;
    text-align: center;
    padding: 0 0.5em;
}

h2{
    font-size: 20px;
}

p{
    font-size: 15px;
    margin-bottom: 1.5em;
}

.buttonView{
    text-decoration: none;
    background-color: #fa2b57;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    height: 7vh;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}
`

export {Container}