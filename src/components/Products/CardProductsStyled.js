import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-wrap: wrap;
`
export const Card= styled.div`
    width:300px;
    height:350px;
    margin: 15px auto;
    background-color:black;
    padding: 25px;
`
export const CardImg = styled.img `
    width:80px;
    height:80px;
    object-fit: cover;
`
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`
export const CardTitle = styled.h2`
    margin: 0;
    margin-bottom: 5px;
    font-weight: 500;
    letter-spacing: 0.05rem;
`

export const InfoCard = styled.p`
    margin: 0;
    color: #666;
    font-size: 1.2rem;
`

export const CardPrice = styled.span`
    font-weight: 800;
    font-size: 1.5rem;
    background: linear-gradient(83deg, #ffa100, #fb103d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`