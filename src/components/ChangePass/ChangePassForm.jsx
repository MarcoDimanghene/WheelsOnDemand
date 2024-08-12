import { Formik } from "formik"
import { ContResetPassStyled, InputSpan, MsgSpan, PassContStyled, ResetPassFormStyled } from "./ChangePassStyled"
import { resetPasswordValues } from "../../formik/initialValues"
import { changePassValidationSchema } from "../../formik/validationSchema"
import { useSelector } from "react-redux"
import LoginInput from "../UI/Input/Input"
import Submit from "../UI/Submit/Submit"
import { useState } from "react"
import { resetPassword } from "../../axios/axios-user"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EyesBtnStyled } from "../../pages/Login/LoginStyled"


const ChangePassForm = () => {
    const [message, setMessage] = useState(null);
    const currentUser = useSelector (state => state.user.currentUser);

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    return (
        <ContResetPassStyled>
            <Formik 
                initialValues={resetPasswordValues}
                validationSchema={changePassValidationSchema}
                onSubmit= {async (values, { setSubmitting }) => {
                    setMessage(null); 
                    try {
                        const response = await resetPassword(values.email, values.resetCode, values.newpassword);
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
                        <LoginInput name="resetCode" type="text" placeholder="Codigo de reseteo" />
                    </InputSpan>
                    <InputSpan>
                        <PassContStyled>
                            <LoginInput name="password" type={showPassword ? "text" : "password"} placeholder="Nueva Contraseña" />
                            <EyesBtnStyled type="button" onClick={toggleShowPassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </EyesBtnStyled>
                        </PassContStyled>
                    </InputSpan>
                    <InputSpan>
                        <PassContStyled>
                            <LoginInput name="newpassword" type={showNewPassword ? "text" : "password"} placeholder="Repita la Nueva Contraseña" />
                                <EyesBtnStyled type="button" onClick={toggleShowNewPassword}>
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                </EyesBtnStyled>
                        </PassContStyled>
                    </InputSpan>
                    <InputSpan>
                        <Submit type="submit">Cambiar Contraseña</Submit>
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

export default ChangePassForm