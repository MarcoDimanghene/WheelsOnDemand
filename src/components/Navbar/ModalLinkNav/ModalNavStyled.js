import styled, { css } from "styled-components"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export const ModalContainerStyled = styled(motion.div)`
    position: absolute;
    background-color: rgba(0, 0, 0, 2);
    box-shadow: 0 0 25px #0ef;
    top: 100px;
    right: 0;
    z-index: 98;
    border-radius: 1rem 0 0 1rem;
    padding: 2rem;
    width:90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ModalLinkStyled = styled(Link)`
    background-color: rgba(8, 27, 41, 2);
    height: 30px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    text-align: center;
    box-shadow: 0 0 15px #0ef;
    border: 2px solid #0ef;
    margin-top: 15px;
`
export const IconModalStyled = styled(motion.div)`
    font-size: 1.2rem;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
`;

export const MenuModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100vw ;
    height: 100vh;

    ${({ isHidden }) =>
        !isHidden &&
        css`
        backdrop-filter: blur(4px);
    `}
`;