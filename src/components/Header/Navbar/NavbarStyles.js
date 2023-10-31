import styled from "styled-components"

export const HeaderContainerStyled = styled.header`
    height:auto;
    width:100%;
    border-bottom:4px solid black;
    background: #242424;
`
export const NavbarContainerStyled=styled.div `
    height:80px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: auto;
    width:100%;
    max-width: 1400px;
`

export const LogoStyled = styled.div `
    width:35%;
    @media (max-width: 908px) {
        width:20%;
        margin: 5%;
    }
`
export const ConeinerLinksStyled = styled.div `
    display: flex;
    align-items:center;
    border-radius: 15px;
    margin:0 ;
    @media (max-width: 780px) {
        display: none
    }
`
export const LinkStyled = styled.div`
    text-decoration: none;
    color: white;
    margin:0 15px 0;
    padding: 5px;
    font-size: 1.5rem;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    
    
    &:hover {
        border-bottom: 2px solid #fff;
        background-color: #000;
    }
    @media (max-width: 980px) {
        font-size: 0.8rem;
        font-weight: 200px;
        
    }
    a {
        text-decoration:none;
        color:white;
        font-weight: 300;
    }
`
export const IconStyled = styled.span`
    vertical-align: middle; 
    font-size: 1.6rem;
    @media (max-width: 980px) {
        font-size: 1rem;
        font-weight: 200px;
        
    }
`;

export const MenuContainerStyled = styled(ConeinerLinksStyled) `
    display: none;
    font-size: 2.5rem;
    color:#fff;
    cursor: pointer;
    margin: 10px;
    @media (max-width: 780px) {
        display: flex;
    }
`