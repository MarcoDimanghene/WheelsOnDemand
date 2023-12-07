import { LogginBtnStyled } from "../../components/UI/Button/ButtonStyled";
import { InputStyled, LblLoginStyled } from "../../components/UI/Input/InputStyled";
import {  InfoTxtStyled,  TxtStyled } from "../../components/UI/Textformat/TxtStyled";
import {  IconRegSpanStyled, LinkloginStyled, RegConteinerStyled, RegFormStyled, RegInfoContStyled, RegTitleStyled, WrapperRegisterStyled } from "./RegisterStyled";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
    return (
    <WrapperRegisterStyled>
        <RegConteinerStyled>
            <RegInfoContStyled>
                <RegTitleStyled>
                    Registrate y Accede
                </RegTitleStyled>
                <InfoTxtStyled>Únete ahora para desbloquear 
                    beneficios exclusivos y experiencias personalizadas. ¡Regístrate hoy!
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
                <LinkloginStyled to="/login">Login</LinkloginStyled>
                </TxtStyled>
                <LogginBtnStyled>Registrate</LogginBtnStyled>
            </RegFormStyled>
                
        </RegConteinerStyled>
    </WrapperRegisterStyled>
    )
}

export default Register