import styled from "styled-components";

export const HeroContainerStyled= styled.div `
    margin: auto;
    max-width: 1200px;

`
export const TitleContainerStyled = styled.h1`
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    height: 80px;
    border-radius: 25px;
`
export const InfoContainerStyleded = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    img {
        border-radius:25px;
        width: 100%; 
        height: auto;
    }
`
export const ImgContainerStyled = styled.div`
    width: 30%; 
    height: auto;
    overflow: hidden;
`
export const TextContainerStyled = styled.div`
    color:#000;
    font-size: 2em;
    width: 40%;
    border: 1px solid #000;
    padding:15px;
`