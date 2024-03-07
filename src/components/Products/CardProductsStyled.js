import { Link } from "react-router-dom";
import styled from "styled-components";

export const CarsContainer = styled.div `
    width:100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
    border-radius: 10px;
`
export const Card= styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    border-radius:15px;
    height:250px;
    margin:1rem;
    background-color: rgba(0, 0, 0, 0.4);
    border: 2px solid #0ef;
    width:80%;
    
`
export const CardContImg = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
`
export const CardImg = styled.img `
    height:120px;
    object-fit: cover;
    margin: auto;
    
`
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`
export const CardTitle = styled.h2`
    font-weight: 400;
    letter-spacing: 0.05rem;
    margin:0;
    padding:0;
`

export const InfoCard = styled.p`
    margin: 0;
    color: #666;
    font-size: 1.2rem;
`

export const CardPrice = styled.span`
    font-weight: 800;
    font-size: 1.2rem;
    background:  #fb103d;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
`

export const ButtonContainerStyled=styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    margin: 15px;
    @media (max-width: 768px) {
        margin: 0;
        width:90%;
    }
`
export const BtnStyled = styled(Link) `
    width: 80%;
    height: 30px;
    background: #081B29;
    cursor: pointer;
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    border: solid 0.5px #000;
    border-radius: 25px;
    transition: opacity 0.3s, transform 0.3s;
    margin: 0 15px 0 0;
    &:hover {
    opacity: 0.9; 
    transform: scale(1.1);
    background: #000; 
    }

`

