import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const BtnStyled = styled(motion.button) `
    position: relative;
    width: 80%;
    height: 45px;
    background: linear-gradient(#081b29, #0ef, #081b29 );
    border: 2px solid #0ef;
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
