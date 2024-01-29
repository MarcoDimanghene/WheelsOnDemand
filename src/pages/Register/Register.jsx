import { LblLoginStyled } from "../../components/UI/Input/InputStyled";
import {  InfoTxtStyled,  StrongeStyled,  TxtStyled } from "../../components/UI/Textformat/TxtStyled";
import {  IconRegSpanStyled, LinkloginStyled, RegConteinerStyled, RegFormStyled, RegInfoContStyled, RegTitleStyled, WrapperRegisterStyled } from "./RegisterStyled";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FadeVariants } from "../../utils";
import { Formik } from "formik";
import Submit from "../../components/UI/Submit/Submit";
import {registerInitialValues} from "../../formik/initialValues"
import {registerValidationSchema} from "../../formik/validationSchema"
import LoginInput from "../../components/UI/Input/Input";

const Register = () => {
    
    return (
    <WrapperRegisterStyled
        variants={FadeVariants}
        initial="initial"
        animate="animate"
    >
        <Formik 
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <RegConteinerStyled>
            <RegInfoContStyled>
                <RegTitleStyled>
                    Registrate y Accede
                </RegTitleStyled>
                <InfoTxtStyled>Únete ahora para desbloquear 
                    beneficios exclusivos y experiencias personalizadas. <StrongeStyled>¡Regístrate hoy!</StrongeStyled>
                </InfoTxtStyled>
            </RegInfoContStyled>

            <RegFormStyled>

                <LblLoginStyled> 
                        <IconRegSpanStyled> <FaUser /></IconRegSpanStyled>
                        <LoginInput name= "name" type='text' placeholder="Nombre"/>
                </LblLoginStyled>
                
                <LblLoginStyled>  
                    <IconRegSpanStyled> <MdEmail /></IconRegSpanStyled>
                    <LoginInput name= "email" type='text' placeholder="E-Mail"/>
                </LblLoginStyled>
                
                <LblLoginStyled>
                    <IconRegSpanStyled> <FaLock /></IconRegSpanStyled>
                    <LoginInput name= "password" type='password' placeholder="Contraseña"/>
                </LblLoginStyled>
                
                <TxtStyled>Ya tienes cuenta? 
                <LinkloginStyled to="/login">inicia tu sesión</LinkloginStyled>
                </TxtStyled>
                <Submit>Registrate</Submit>
            </RegFormStyled>
                
        </RegConteinerStyled>
        </Formik>
        
    </WrapperRegisterStyled>
    )
}

export default Register