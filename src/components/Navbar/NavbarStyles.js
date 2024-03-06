import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"
import styled, { css } from "styled-components"

export const HeaderContainerStyled = styled.header`
    height:auto;
    background: #081b29;
    width:100%;
`;

export const ConteinerMenuLinks =styled.div `
    display: flex;

    @media (max-width: 780px) {
        display: none;
    }
`


export const NavbarContainerStyled=styled.div `
    height:80px;
    display: flex;
    align-items:center;
    justify-content: center;
    max-width:1400px;
    margin: auto;
    width: 100%;
    overflow-y: hidden;
    `

export const LogoStyled = styled.div `
    margin-left:5%;
    width:30%;
    @media (max-width: 908px) {
        width:30%;
        margin: 5%;
        img{
            width: 60%;
        }
    }
`
export const ConeinerLinksStyled = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
    width:40%;
    border-radius: 15px;
    

    @media (max-width: 780px) {
        width: 100%;
        height:100%;
        position: absolute;
        top: 65px;
        right: ${({show}) => (show ? 0 : "-100%")};
        margin:0;
        display: flex;
        flex-direction: column;
        align-items: center;    
        justify-content: flex-start;
        transition: 0.5s all ease-out;
        background: #081b29;
        z-index:9;
    }
`
export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
    padding:10px;
    margin-right:15px;
    font-size: 1rem;
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
    &.active {
        color: #0ef;
        background-color: gray;
    }
    a {
        text-decoration:none;
        color:white;
        font-weight: 300;
    }
`
export const IconStyled = styled.span`
    margin:auto;
    font-size: 1.2rem;
    padding-right:10px;
    @media (max-width: 980px) {
        font-size: 1rem;
        font-weight: 200px;
    }
`;

export const MenuContainerStyled = styled.div `
    display: none;
    font-size: 2rem;
    color:#fff;
    cursor: pointer;
    margin: 10px;
    @media (max-width: 780px) {
        display: flex;
    }
    @media (max-width: 400px) {
        
        font-size: 1.8rem;
    }
`

export const CarIconStyled= styled.div `
    margin:auto;
    font-size: 1.8rem;
    padding-right:10px;
    
    @media (max-width: 980px) {
        font-weight: 200px;
    }
    @media (max-width: 400px) {
        
        font-size: 1.8rem;
    }
`
export const ResMenuConteinerStyled = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:2%;
    width: 40%;
    padding: 5px;
`
export const LblCartQuantity = styled.label `
    background-color: red;
    border-radius:50%;
    font-size:0.8rem;
    color: #fff;
    position: absolute;
    top: 39px;
    padding:2px;
`

export const ModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: calc(100vw - 450px);
    height: 100vh;

    ${({ isHidden }) =>
        !isHidden &&
        css`
        backdrop-filter: blur(4px);
    `}
`;
export const LinksContainerStyled = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;


export const LinkContainerStyled = styled.div`
    display:flex;
    font-size: 1.2rem;
    color: #fff;
    padding: 5px;
    border-radius:15px;
    &:hover {
        cursor: pointer;
        background-color: #000;
        border-bottom: 2px solid #fff;
    }
    
`;