import Button from "../../components/UI/Button/Button";
import { InputStyled, LblLoginStyled } from "../../components/UI/Input/InputStyled";
import { TxtStyled, InfoTxtStyled } from "../../components/UI/Textformat/TxtStyled";
import {  IconSpanStyled,  InfotextContStyled,  LinkTxtStyled, LogginConteinerStyled, LoggintFormStyled, TitleStyled,  WrapperLoginStyled} from "./LoginStyled"
import { FaLock, FaUser } from "react-icons/fa"; 

InfoTxtStyled
const Login = () => {
    
    return (
        <WrapperLoginStyled>
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
                    <Button whileTap={{ scale: 0.95 }}>Ingresar</Button>
                </LoggintFormStyled>
                
                <InfotextContStyled>
                    
                    <TitleStyled>!Bienvenido!</TitleStyled>
                    <InfoTxtStyled>Inicia sesión para acceder a tu perfil y realizar operaciones. Descubre todas las opciones disponibles para una experiencia personalizada y segura.</InfoTxtStyled>
                </InfotextContStyled>
                
            </LogginConteinerStyled>
            
        </WrapperLoginStyled>
    )
}

export default Login