import styled from "styled-components"

export const CartContainerStyled = styled.div `
    min-width: 320px;
    width: 28%;
    height: 90vh;
    top: 90px;
    right: ${({showcart}) => (showcart ? 0 : "-100%")};
    position: absolute;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(300px);
    transition: right 0.8s ease-in-out;
    
`
export const CartCardStyled = styled.div `
    width: 95%;
    height: 95%;
    background-color: #081b29;
    border: 2px solid #00DFF0;
`
export const ItemCardStyled= styled.div `
    margin: 15px;
    width:95%;
    height: 100px;
    background-color: #fff;

`
export const TitleCartStyled = styled.h2 `
    color:  #fff;
    text-align: center;
` 