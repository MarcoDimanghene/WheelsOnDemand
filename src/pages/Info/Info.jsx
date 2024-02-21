import { Formik } from "formik"
import LoginInput from "../../components/UI/Input/Input"
import { ContacFormStyled, ImputContStyeld, InfoContStyled, TxtContacStyled, WrapperContacStyled, WrapperInfoStyled } from "./InfoStyled"
import Submit from "../../components/UI/Submit/Submit"
import { contacInitialValues } from "../../formik/initialValues"
import { contacValidationSchema } from "../../formik/validationSchema"


const Info = () => {
    return (
        <WrapperInfoStyled>
            <InfoContStyled>
                <h2>Wheels on Demand: Conduciendo Tu Experiencia de Compra</h2>
                <p>En Wheels on Demand, nos apasiona conectar a los amantes de los autos con vehículos excepcionales. Con un equipo dedicado y una selección cuidadosamente curada, ofrecemos una experiencia de compra única. Descubre la excelencia en cada viaje con nosotros.</p>
            </InfoContStyled>
            <Formik
                initialValues={contacInitialValues}
                validationSchema={contacValidationSchema}
                onSubmit={(values) => console.log(values)}
            >
                <WrapperContacStyled>
                    <ContacFormStyled>
                    <ImputContStyeld>
                        <LoginInput name= "name" type='text' placeholder="Nombre"/>
                    </ImputContStyeld>
                    <ImputContStyeld>
                        <LoginInput name= "email" type='text' placeholder="E-Mail"/>
                    </ImputContStyeld>
                    
                    <TxtContacStyled/>
                    <Submit>Enviar</Submit>
                    </ContacFormStyled>
                    
                </WrapperContacStyled>
            </Formik>
        </WrapperInfoStyled>
    )
}

export default Info