import styled from 'styled-components'

const Container = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
color: #333030;
position: relative;
background-color: white;
padding: 10em 0;

img{
    width: 20%;
    min-height: 200px;
    rotate: 200grad;
    transform: scaleY(-1);
}

div{
    padding: 0 5em;

    h2{
        font-size: 38px;
        font-weight: 800;
    }
    h3{
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 2em;
        color: #9abec1;
    }
    h4{
        font-size: 18px;
        font-weight: 500;
    }
    /*a{
        color: #fff;
        text-decoration: none;
        background-color: #fa2b57;
        border-radius: 6px;
        padding: 1em;
        font-size: 16px;
        box-shadow: 0px 10px 20px -5px #333030;
        border: none;
        cursor: pointer;
    }*/
}
`

export {Container}