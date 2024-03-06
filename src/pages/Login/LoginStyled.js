import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form as FormikForm } from 'formik'

export const WrapperLoginStyled = styled(motion.div) `
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 80vh;
    background: #081b29;
    @media (max-width: 600px) {
        height:100%
    }
    
`
export const LogginConteinerStyled = styled.div `
    width:80%;
    height:70%;
    min-height:400px;
    max-width: 800px;
    background: transparent;
    border: 2px solid #0ef;
    display: flex;
    border-radius: 15px;
    overflow:hidden;
    box-shadow: 0 0 25px #0ef;

    @media (max-width: 770px) {
        width:90%;
        height:90%;
    }
    @media (max-width: 600px) {
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction:column-reverse;
        
    }
`
export const LoggintFormStyled = styled(FormikForm) `
    width:50%;
    height:100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
    @media (max-width: 600px) {

        width:100%;
        height:50%;
        padding: 5px;
    }
`

export const LinkTxtStyled = styled(Link) `
    font-size:1rem;
    font-weight: 600;
    color: darkcyan;
    cursor: pointer;
    margin-left: 1em;
    margin-bottom: 15px;
    @media (max-width: 600px) {
        font-size:0.8rem;
        font-weight: 300;
        margin-left: 0.5rem;
        margin-bottom: 5px;
    }
    `
export const IconSpanStyled = styled.span`
    margin-right: 5px;
    color: #fff;
    `


export const InfotextContStyled = styled.div `
    width:50%;
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(45deg, #081b29, #0ef);
    border-left: 3px solid #081b29;
    @media (max-width: 600px) {
        border-bottom: 3px solid #081b29;
        width:100%;
        height:20%;
    }
`

export const TitleStyled = styled.h2`
    text-align: right;
    padding: 0 40px 0 50px;
    @media (max-width: 600px) {
        text-align: center;
        padding: 20px;
    }
`
export const ButtonUserStyled = styled(motion.button) `
    position: relative;
    width: 60%;
    height: 45px;
    background: linear-gradient(#081b29, #0ef, #081b29 );
    border: 2px solid #0ef;
    outline: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    transition: 0.8s;
    overflow: hidden;
    transition: 0.5;
    &:hover{
        opacity: 50%;
        scale: 1.1;
    }`;