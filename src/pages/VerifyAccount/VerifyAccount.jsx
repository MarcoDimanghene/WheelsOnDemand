import { Formik } from "formik";
import LoginInput from "../../components/UI/Input/Input";
import { VaryfiFormStyled, VerifyContStyled } from "./VerifyAccountStyled";
import { verifyInitialValues } from "../../formik/initialValues";
import Submit from "../../components/UI/Submit/Submit";
import { verifyValidationSchema } from "../../formik/validationSchema";
import { verifyUser } from "../../axios/axios-user";

const VerifyAccount = () => {
    const handleVerify = async (values, { setSubmitting, setStatus }) => {
        try {
            const result = await verifyUser(values.email, values.verified);
            console.log(result);
            setStatus({ success: result.msg });
        } catch (error) {
            setStatus({ error: error.message });
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <VerifyContStyled>
            <div>
            
            <button onClick={()=>{}}>Ingresa Codigo</button>
            </div>
            <Formik
                initialValues={verifyInitialValues}
                validationSchema={verifyValidationSchema}
                onSubmit={handleVerify}
            >
                {({ isSubmitting, status }) => (
                    <VaryfiFormStyled>
                        <h2>Verifica tu Cuenta</h2>
                        <LoginInput name="email" type="text" placeholder="Email" />
                        <LoginInput name="verified" type="text" placeholder="Código de Verificación" />
                        <Submit type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Verificando...' : 'Verificar'}
                        </Submit>
                        {status && status.success && <div>{status.success}</div>}
                        {status && status.error && <div style={{ color: 'red' }}>{status.error}</div>}
                    </VaryfiFormStyled>
                )}
            </Formik>
        </VerifyContStyled>
    );
};

export default VerifyAccount;
