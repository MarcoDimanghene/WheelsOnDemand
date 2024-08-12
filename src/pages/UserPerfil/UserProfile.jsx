import { useSelector } from "react-redux";
import { ContProfile, DataContStyled, LblProfile, PersonalDataStyled, ProfileConStyled, TilteStyled, Userbtn } from "./UserProfileStyled";
import { FadeVariants } from "../../utils";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const currentUser = useSelector(state => state.user.currentUser);
    const navigate = useNavigate();
    return (
    <ContProfile
            variants={FadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
    >
        <ProfileConStyled>
            <TilteStyled>
                <h2>{
                    `Bienvenido a tu perfil ${currentUser.nombre}`
                }</h2>
            </TilteStyled>
            <DataContStyled>
                <PersonalDataStyled>
                    <LblProfile placeholder={currentUser.nombre} readOnly={true}/>
                    <LblProfile placeholder={currentUser.email} readOnly={true}/>
                    <LblProfile name= "verified" type='text' 
                        placeholder={ currentUser.verified ? "Cuenta verificada" : "Valida tu Cuenta"}
                        readOnly={true}/> 
                </PersonalDataStyled>
                <PersonalDataStyled>
                    <Userbtn whileTap={{ scale: 0.75 }} onClick={() =>navigate("/verifyaccount")}>Validar Cuenta</Userbtn>
                    <Userbtn whileTap={{ scale: 0.75 }} onClick={() =>navigate("/changepass")}>Cambiar Contraseña</Userbtn>
            </PersonalDataStyled>
            </DataContStyled>
        </ProfileConStyled>
            
    </ContProfile>
    ) 
}

export default UserProfile