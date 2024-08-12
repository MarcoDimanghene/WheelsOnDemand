import styled from "styled-components";
import { Form as FormikForm } from 'formik';
import { motion } from "framer-motion";

export const ContResetPassStyled = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;
`
export const ResetPassFormStyled =  styled(FormikForm) `
    width:80%;
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
export const InputSpan = styled.span`
    padding: 0.8rem;
    height:50px;
`
export const SendCodebtn = styled(motion.button) `    
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: linear-gradient(#081b29, #0ef, #081b29 );
    color: white;
    font-weight: 400;
    cursor: pointer;
    margin-top: 5px;
    border: 2px solid #0ef;
    cursor: pointer;
    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    }
    &:hover{
        opacity: 50%;
        scale: 1.1;
    }
    
`
export const MsgSpan = styled.span`
    text-align: center;
    margin:5px;
    height:40px;
`
export const PassContStyled = styled.div `
    display: flex;
    align-items: center;
    flex-direction:row-reverse;
`