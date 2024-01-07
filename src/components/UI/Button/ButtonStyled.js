import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ButtonStyled = styled(motion.button) `
    position: relative;
    margin: auto;
    width: ${props => props.width || 'auto'};
    height: 30px;
    background: #000;
    border: 2px solid #fff;
    outline: none;
    border-radius: ${({ radius }) => `${radius}px`};
    cursor: pointer;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    transition: 0.8s;
    overflow: hidden;
    &:hover{
        opacity: 95%;
        scale: 1.1em;
    }
    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    } 
    ${({ secondary }) =>
    secondary &&
    css`
    background: #252525;
    & span {
        background: red;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        }
    
    `}
`;

