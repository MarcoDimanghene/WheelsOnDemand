import styled from "styled-components";


export const ProducsContainer = styled.div `
    max-width: 1200px;
    margin: auto;
    position: relative;
`

export const ProductsFilterCat = styled.div `
    max-width: 1200px;
    width:100%;
    height:60px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CategoriesStyled = styled.button `
    position: relative;
    margin-left: 5px;
    height: 35px;
    background: ${({ isActive }) => (isActive ? '#01CDDC' : 'black')};
    color: ${({ isActive }) => (isActive ? '#fff' : 'black')};
    outline: none;
    cursor: pointer;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 600;
    transition: 0.8s;
    overflow: hidden;
    border-radius: 15px;
    &:hover{
        background-color: #01CDDC;
        color:black;
        opacity: 95%;
    }
    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    }
`;
