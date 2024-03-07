import { Formik } from "formik";
import LoginInput from "../../components/UI/Input/Input";
import Submit from "../../components/UI/Submit/Submit";
import { TxtStyled, InfoTxtStyled, StrongeStyled } from "../../components/UI/Textformat/TxtStyled";
import { FadeVariants } from "../../utils";
import { IconRegSpanStyled } from "../Register/RegisterStyled";
import { InfotextContStyled,  LinkTxtStyled, LogginConteinerStyled, LoggintFormStyled, TitleStyled,  WrapperLoginStyled} from "./LoginStyled"
import { FaLock, FaUser } from "react-icons/fa"; 
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import { LblLoginStyled } from "../../components/UI/Input/InputStyled";
import { MdEmail } from "react-icons/md";


InfoTxtStyled
const Login = () => {

    return (
        <WrapperLoginStyled
        variants={FadeVariants}
        initial="initial"
        animate="animate"
        >
            <Formik 
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => console.log(values)}
        >
            <LogginConteinerStyled>
                <LoggintFormStyled>
                    <h2>Inicio de Sesión</h2>
                    <LblLoginStyled> 
                        <IconRegSpanStyled> <FaUser /></IconRegSpanStyled>
                        <LoginInput name= "name" type='text' placeholder="Nombre"/>
                    </LblLoginStyled>
                    <LblLoginStyled>
                        <IconRegSpanStyled> <FaLock /></IconRegSpanStyled>
                        <LoginInput name= "password" type='password' placeholder="Contraseña"/>
                    </LblLoginStyled>
                    <TxtStyled>No tienes cuentas?  
                        <LinkTxtStyled to='register'>Registrate</LinkTxtStyled>
                    </TxtStyled>
                    <Submit>Ingresar</Submit>
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