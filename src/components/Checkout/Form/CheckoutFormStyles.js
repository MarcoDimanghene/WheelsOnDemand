import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled  = styled.div `
    width: 50%;
    margin: 0 auto;
    @media (max-width: 768px) {
        margin: 0;
        width:80%;
    }
`
export const Formik = styled(FormikContainer) `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
export const Form = styled(FormikForm)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;