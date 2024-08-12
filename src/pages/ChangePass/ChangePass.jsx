import ChangePassForm from "../../components/ChangePass/ChangePassForm";
import SendCode from "../../components/ChangePass/SendCode";
import { ContResetPassStyled } from "./ChangePasswordStyled";

const ChangePass = () => {
    

    return (
        <ContResetPassStyled>
            <h2>Si no tienes el codigo de reseteo soliitalo aqui con tu E-Mail</h2>
            <SendCode/>
            <h2>Modifica o recupera tu contraseña</h2>
            <ChangePassForm/>
        </ContResetPassStyled>
    );
}

export default ChangePass;
