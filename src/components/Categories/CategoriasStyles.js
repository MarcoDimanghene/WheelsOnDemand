import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
    gap: 20px;
    user-select: none;
`
export const CardCategoria= styled(motion.div) `
    display: flex;
    flex-direction: column;
    align-items:center;
    width:150px;
    background-color: ${props => (props.selected ? '#02B9C9' : '#081B29')};
    border-radius: 15px;
    cursor: pointer;

    h2 {
    font-size: 1rem;
    text-transform: capitalize;
    }`

export const BorderDecoration = styled.div`
    height: 5px;
    width: 30%;
    background: #02B9C9;
    border-radius: 15px;
`