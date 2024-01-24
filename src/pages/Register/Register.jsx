import { InputStyled, LblLoginStyled } from "../../components/UI/Input/InputStyled";
import {  InfoTxtStyled,  StrongeStyled,  TxtStyled } from "../../components/UI/Textformat/TxtStyled";
import {  IconRegSpanStyled, LinkloginStyled, RegConteinerStyled, RegFormStyled, RegInfoContStyled, RegTitleStyled, WrapperRegisterStyled } from "./RegisterStyled";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FadeVariants } from "../../utils";
import { Formik } from "formik";
import Submit from "../../components/UI/Submit/Submit";

const Register = () => {
    
    return (
    <WrapperRegisterStyled
        variants={FadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <Formik>
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
                <h2>Formulario de Registro</h2>
                <LblLoginStyled> <TxtStyled> 
                        <IconRegSpanStyled> <FaUser /></IconRegSpanStyled>
                        Usuario</TxtStyled>  
                </LblLoginStyled>
                <InputStyled />
                <LblLoginStyled> <TxtStyled> 
                    <IconRegSpanStyled> <MdEmail /></IconRegSpanStyled>
                        E-Mail</TxtStyled>  
                </LblLoginStyled>
                <InputStyled />
                <LblLoginStyled> <TxtStyled>
                    <IconRegSpanStyled> <FaLock /></IconRegSpanStyled>
                        Contraseña</TxtStyled>  
                </LblLoginStyled>
                <InputStyled />
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