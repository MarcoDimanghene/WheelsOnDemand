import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
    position: absolute;
    background-color: gray;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    width: 450px;
    height:80%;
    top: 100px;
    right: 0;
    z-index: 98;
    border-radius: 1rem 0 0 1rem;
    padding: 2rem;

    & span {
    color: white;
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        opacity: 90%;
        }
    }
`;

export const ModalLinkStyled = styled.div`
    &:hover {
        opacity: 90%;
    }
`