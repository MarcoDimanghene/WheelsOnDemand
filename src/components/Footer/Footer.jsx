import { FooterConteinerStyled, FooterWrapperStyled, InconsStyled, InfoContStyled, SocialStyled } from "./FooterStyled"
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";


export const Footer = () => {
    return (
        <FooterWrapperStyled>
            <FooterConteinerStyled>
            <InfoContStyled>
                <h3>Contacto</h3>
                <p>Dirección: Calle Falsa 123</p>
                <p>Email: info@tuempresa.com</p>
                <p>Teléfono: +123 456 7890</p>
            </InfoContStyled>
            <SocialStyled>
                <InconsStyled><SlSocialFacebook /></InconsStyled>
                <InconsStyled><SlSocialInstagram /></InconsStyled>
                <InconsStyled><FaXTwitter /></InconsStyled>
            </SocialStyled>
        </FooterConteinerStyled>
        </FooterWrapperStyled>
        
    )
}
