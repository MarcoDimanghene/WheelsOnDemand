import styled, { keyframes } from "styled-components";
import imghero1 from "./img/001-01.png"
import imghero2 from "./img/001-02.png"
import imghero3 from "./img/001-03.png"
import imghero4 from "./img/001-04.png"
import imghero5 from "./img/001-05.png"
import imghero6 from "./img/001-06.png"
import imghero7 from "./img/001-07.png"

const images = [imghero1, imghero2, imghero3,imghero4,imghero5,imghero6,imghero7];

const changeBackground = keyframes`
    ${images.map((image, index) => `
    ${index * 100 / images.length}% {
        background-image: url(${image});
    }
    `)}
`;



export const HeroContainerStyled= styled.div `
    max-width: 1400px;
    box-shadow: 0 0 25px #0ef;
    padding:0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: ${changeBackground} 50s  infinite;
`
export const TitleContainerStyled = styled.h1`
    color: #fff;
    display:flex;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    position: absolute;
    top: 50px;
    right: 50px;
    margin: auto;
    width:25%;
    border-radius: 25px;
    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
    @media (max-width: 400px) {
        font-size: 1.2rem;
    }
`
export const InfoContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    height: 400px;
    img {
        border-radius:15%;
        height: auto;
    }
`
export const ImgContainerStyled = styled.div`
    width: 30%; 
    height: auto;
    overflow: hidden;
    @media (max-width: 400px) {
        display:none;
    }
`
export const TextContainerStyled = styled.div`
    color:#fff;
    width: 90%;
    height: 60%;
    padding:15px;
    margin: auto;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius:30px;
    p{
        font-size: 1.5rem;
    }
    @media (max-width: 850px) {
        p{
        font-size: 1rem;
        }
    }
    @media (max-width: 400px) {
        p{
        width: 100%;
        font-size: 0.8rem;
        padding:0px;
        }
    }
`
