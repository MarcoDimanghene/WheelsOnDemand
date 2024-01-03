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
    grid-template-columns: ${({gridLength}) => `repeat(${gridLength}, 1fr)`};
    background-color: black;
    border-radius: 10px;
`
export const Card= styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    border-radius:15px;
    width:auto;
    height:200px;
    margin:1rem;
    background-color:#24272B;
    padding: 0.2rem;
    box-shadow: 0 0 25px #0ef;
`
export const CardContImg = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
export const CardImg = styled.img `
    width:100px;
    height:100px;
    object-fit: cover;
    margin: auto;
`
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`
export const CardTitle = styled.h2`
    margin: 0;
    margin-bottom: 5px;
    font-weight: 400;
    letter-spacing: 0.05rem;
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
    width:70%;
    
`
