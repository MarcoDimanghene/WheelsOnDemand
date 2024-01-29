import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterWrapperStyled= styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`

export const FooterConteinerStyled = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    width: 70%;
`
export const SocialStyled = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
    width: 20%;
    font-size: 1.5rem;
`
export const InconsStyled= styled(motion.div) `
    margin-right: 15px;
    color: #fff;
    padding: 5px;
    &:hover {
    cursor:pointer;
    transform: scale(1.1);
    }
`

export const InfoContStyled= styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 70%;
    margin: 15px;
    h3 {
        margin:0;
        padding:0;
        font-size:1rem;
    }
    p{
        margin:0;
        padding:0;
        font-size:0.8rem;
    }

`