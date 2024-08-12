import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
    position: absolute;
    background-color: black;
    box-shadow: 0 0 25px #0ef;
    width: 400px;
    top: 100px;
    right: 0;
    z-index: 98;
    border-radius: 1rem 0 0 1rem;
    padding: 2rem;

    & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        opacity: 90%;
    }}
`;

export const MenudivsStyled = styled.div `
    display: flex;
    flex-direction:column;
`

export const LinkStyled = styled(Link)`
    &:hover {
    opacity: 90%;
    }
`;

export const UsernameStyled = styled.h2`
    font-weight: 400;
`;

export const HrStyled = styled.hr`
    margin: 2rem 0;
`;
