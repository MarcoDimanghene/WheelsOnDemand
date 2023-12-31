import styled from "styled-components";

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: ${({gridLength}) => `repeat(${gridLength}, 1fr)`};
    gap: 20px;
    padding: 1rem;
    overflow: scroll;

    &::-webkit-scrollbar{
        height:6px;
        width:4px;
        
    }
    &::-webkit-scrollbar-thumb{
        background: #fff;
        border-radius: 5px;
    }
    &::-webkit-scrollbar:vertical {
    display: none;
    }
    
`
export const Card= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 103px;
    padding: 1rem 1.7rem;
    background: #24272B;
    border-radius: 10px;
`
export const CardImg = styled.img `
    width: 120px;
    height: 120px;
    border-radius: 50px;
    object-fit: cover;
`
export const CardText = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: 5px;
    min-width:220px;
    
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
    font-weight: 600;
    font-size: 1.5rem;
    background:  #fb103d;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`