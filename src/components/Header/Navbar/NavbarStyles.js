import styled from "styled-components"

export const NavbarContainerStyled = styled.header`
    height:80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:4px solid black ;
    background: linear-gradient(50deg, #000000, #800000);
    
`

export const LogoStyled = styled.div `
    display: flex;
    align-items: center;
    height:90%;
    margin: 10%;
    @media (max-width: 908px) {
        height:50%;
        margin: 5%;
    }
`
export const ConeinerLinksStyled = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    

    @media (max-width: 780px) {
        display: none
        
    }
`
export const LinkStyled = styled.div`
    text-decoration: none;
    
    background: linear-gradient(45deg, #b0b0b0, #e0e0e0, #b0b0b0);
    border: 1px solid #808080;
    color: #333; 
    padding: 5px;
    font-size: 1rem;
    border-radius: 10px;
    margin-right: 25px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    
    &:hover {
        background: linear-gradient(45deg, #a0a0a0, #d0d0d0, #a0a0a0); 
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
    }
    @media (max-width: 980px) {
        font-size: 0.8rem;
        font-weight: 200px;
        
    }
    a {
        text-decoration:none;
        color: #000;
    }
`
export const IconStyled = styled.span`
    vertical-align: middle; 
    
    font-size: 1.2rem;
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