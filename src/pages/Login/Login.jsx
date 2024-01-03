
import { InputStyled, LblLoginStyled } from "../../components/UI/Input/InputStyled";
import { TxtStyled, InfoTxtStyled, StrongeStyled } from "../../components/UI/Textformat/TxtStyled";
import { FadeVariants } from "../../utils";
import {  ButtonUserStyled, IconSpanStyled,  InfotextContStyled,  LinkTxtStyled, LogginConteinerStyled, LoggintFormStyled, TitleStyled,  WrapperLoginStyled} from "./LoginStyled"
import { FaLock, FaUser } from "react-icons/fa"; 

InfoTxtStyled
const Login = () => {

    return (
        <WrapperLoginStyled
        variants={FadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        >
            <LogginConteinerStyled>
                <LoggintFormStyled>
                    <h2>Inicio de Sesión</h2>
                    <LblLoginStyled> <TxtStyled> 
                        <IconSpanStyled>
                            <FaUser />
                        </IconSpanStyled> Usuario</TxtStyled>  
                    </LblLoginStyled>
                    <InputStyled />
                    <LblLoginStyled> <TxtStyled> 
                        <IconSpanStyled>
                            <FaLock />
                        </IconSpanStyled>Contraseña </TxtStyled> 
                    </LblLoginStyled>
                    <InputStyled type="password"/>
                    <TxtStyled>Tienes cuentas?  
                        <LinkTxtStyled to='register'>Registrate</LinkTxtStyled>
                    </TxtStyled>
                    <ButtonUserStyled whileTap={{ scale: 0.95 }}>Ingresar</ButtonUserStyled>
                </LoggintFormStyled>
                
                <InfotextContStyled>
                    
                    <TitleStyled>!Bienvenido!</TitleStyled>
                    <InfoTxtStyled>Inicia sesión para acceder a tu perfil y realizar operaciones. <StrongeStyled>Descubre todas las opciones disponibles </StrongeStyled>para una experiencia personalizada y segura.</InfoTxtStyled>
                </InfotextContStyled>
                
            </LogginConteinerStyled>
            
        </WrapperLoginStyled>
    )
}

export default Login