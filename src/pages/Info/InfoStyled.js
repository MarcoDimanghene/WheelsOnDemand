import styled from "styled-components";
import { Form as FormikForm } from 'formik'

export const WrapperInfoStyled = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1400px;
    flex-wrap: wrap;
    width: 100%;
`
export const InfoContStyled = styled.div `
    box-shadow: 0 0 25px #0ef;
    border: 0.5px solid #0ef;
    background: #081b29;
    width: 35%;
    margin: auto;
    padding: 1rem;
    text-align: center;
    @media (max-width: 600px) {
        width:80%;
    }
`
export const ContacFormStyled = styled(FormikForm) `
    height: 400px;
    width: 50%;
    background: #081b29;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 25px #0ef;
    border: 0.5px solid #0ef;
    background: #081b29;
    margin: auto;
    padding: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
    @media (max-width: 600px) {
        width:80%;
    }
`
export const TxtContacStyled = styled.textarea `
    width:80%;
    height: 50%;
    padding: 5px;
    margin: 15px;
    color: wheat;
    background-color: transparent;
    border: 3px solid #0ef;
`
export const WrapperContacStyled = styled.div `
    width: 100%;
    
`
export const ImputContStyeld = styled.span `
    width: 100%;
    padding: 0px;
    margin: auto;
    display: flex;
    align-self: center;
    justify-content: center;
`