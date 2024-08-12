import { Formik } from "formik";
import { ContResetPassStyled, InputSpan, MsgSpan, ResetPassFormStyled } from "./ChangePassStyled"
import { sendCodeValues } from "../../formik/initialValues";
import { sendCodeValidationSchema } from "../../formik/validationSchema";
import LoginInput from "../UI/Input/Input";
import { useSelector } from "react-redux";
import Submit from "../UI/Submit/Submit";
import { requestPasswordReset } from "../../axios/axios-user";
import { useState } from "react";


const SendCode = () => {
    const [message, setMessage] = useState(null);
    const currentUser = useSelector (state => state.user.currentUser);
    return (
        <ContResetPassStyled>
            <Formik
                initialValues={sendCodeValues}
                validationSchema={sendCodeValidationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setMessage(null); 
                    try {
                        const response = await requestPasswordReset(values.email);
                        setMessage({ text: response.msg, type: 'success' });
                    } catch (err) {
                        setMessage({ text: err.message, type: 'error' });
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                <ResetPassFormStyled>
                    
                    <InputSpan>
                    
                        <LoginInput name="email" type="text" 
                        placeholder={!currentUser ? "Ingrese un email válido" : currentUser.email} 
                        />
                    </InputSpan>
                    <InputSpan>
                    <Submit type="submit">Enviar Código</Submit>
                    </InputSpan>
                    <MsgSpan>
                        {message && (
                        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
                            {message.text}
                        </div>
                        )}
                    </MsgSpan>
                </ResetPassFormStyled>
            </Formik>
        </ContResetPassStyled>
    )
}


export default SendCode
