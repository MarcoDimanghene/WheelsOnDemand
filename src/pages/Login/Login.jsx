import { Formik } from "formik";
import LoginInput from "../../components/UI/Input/Input";
import Submit from "../../components/UI/Submit/Submit";
import { TxtStyled, InfoTxtStyled, StrongeStyled } from "../../components/UI/Textformat/TxtStyled";
import { FadeVariants } from "../../utils";
import { IconRegSpanStyled } from "../Register/RegisterStyled";
import { EyesBtnStyled, InfotextContStyled,  LinkTxtStyled, LogginConteinerStyled, LoggintFormStyled, TitleStyled,  WrapperLoginStyled} from "./LoginStyled"
import { FaLock, FaUser } from "react-icons/fa"; 
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import { LblLoginStyled } from "../../components/UI/Input/InputStyled";
import { loginUser } from "../../axios/axios-user";
import {useDispatch} from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useRedirect from "../../Hooks/UseRedirect";
import { InputSpan, PassContStyled } from "../../components/ChangePass/ChangePassStyled";
import { useState } from "react";



InfoTxtStyled
const Login = () => {
    useRedirect("/")
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    
    return (
        <WrapperLoginStyled
        variants={FadeVariants}
        initial="initial"
        animate="animate"
        >
            <Formik 
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async(values) => {
                

                const user = await loginUser(
                    values.email,
                    values.password);

                    if(user) {
                        dispatch(setCurrentUser({
                            ...user.usuario,
                            token: user.token
                        }))
                        
                    }
            }}
        >
            <LogginConteinerStyled>
                <LoggintFormStyled>
                    <h2>Inicio de Sesión</h2>
                    <LblLoginStyled> 
                        <IconRegSpanStyled> <FaUser /></IconRegSpanStyled>
                        <LoginInput name= "email" type='text' placeholder="Email"/>
                    </LblLoginStyled>
                    <LblLoginStyled>
                        <IconRegSpanStyled> <FaLock /></IconRegSpanStyled>
                        <PassContStyled>
                            <LoginInput name="password" type={showPassword ? "text" : "password"} placeholder="Nueva Contraseña" />
                            <EyesBtnStyled type="button" onClick={toggleShowPassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </EyesBtnStyled>
                        </PassContStyled>
                        
                    </LblLoginStyled>
                    <TxtStyled>No tienes cuentas?  
                        <LinkTxtStyled to='register'>Registrate</LinkTxtStyled>
                    </TxtStyled>
                    <Submit>Ingresar</Submit>
                    <InputSpan>
                        <LinkTxtStyled to='/changepass'>Olvidaste tu contraseña?</LinkTxtStyled>
                    </InputSpan>
                </LoggintFormStyled>
                
                <InfotextContStyled>
                    
                    <TitleStyled>!Bienvenido!</TitleStyled>
                    <InfoTxtStyled>Inicia sesión para acceder a tu perfil y realizar operaciones. <StrongeStyled>Descubre todas las opciones disponibles </StrongeStyled>para una experiencia personalizada y segura.</InfoTxtStyled>
                </InfotextContStyled>
                
            </LogginConteinerStyled>
        
            </Formik>            
        </WrapperLoginStyled>
    )
}

export default Login