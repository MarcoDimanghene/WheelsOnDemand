import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const VerifyContStyled = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 70vh;
    background: #081b29;
    margin:25px;
`
export const VaryfiFormStyled = styled(FormikForm) `
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