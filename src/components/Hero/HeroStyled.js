import styled from "styled-components";

export const HeroContainerStyled= styled.div `
    margin: auto;
    max-width: 1400px;
    background-color: #fff
`
export const TitleContainerStyled = styled.h1`
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    background-color: #081b29;
    height: 80px;
    
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
    img {
        border-radius:15%;
        width: 100%; 
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
    color:#000;
    width: 40%;
    padding:15px;
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