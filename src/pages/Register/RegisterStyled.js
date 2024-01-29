import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Form as FormikForm } from 'formik'

export const WrapperRegisterStyled = styled(motion.div) `
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 80vh;
    min-height:400px;
`
export const RegConteinerStyled = styled.div `
    width:80%;
    height:90%;
    max-width: 800px;
    background: transparent;
    border: 2px solid #0ef;
    display: flex;
    border-radius: 15px;
    overflow:hidden;
    box-shadow: 0 0 25px #0ef;
`
export const RegFormStyled = styled(FormikForm) `
    width:50%;
    height:100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const LinkloginStyled = styled(Link) `
    font-size:1rem;
    font-weight: normal;
    color: darkcyan;
    cursor: pointer;
    margin: 0.5rem;
    font-weight:650;
    `

export const RegInfoContStyled = styled.div `
    width:50%;
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(45deg, #081b29, #0ef);
    border-left: 3px solid #081b29;
`

export const IconRegSpanStyled = styled.span`
    
    color: #fff;
    `
export const RegTitleStyled = styled.h2`
text-align: left;
padding: 0 40px 0 50px;
`