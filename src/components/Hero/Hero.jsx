import { HeroContainerStyled, InfoContainerStyled, TextContainerStyled, TitleContainerStyled } from "./HeroStyled"


export const Hero = () => {
    return (
        <HeroContainerStyled> 
            <TitleContainerStyled>
                Wheels On Demand:
                Explora a Tu Ritmo
            </TitleContainerStyled>
            <InfoContainerStyled>
                <TextContainerStyled>
                    <p>¡Bienvenidos a Wheels On Demand! Tu puerta de entrada al emocionante mundo de la exploración sin límites. Con nuestra amplia selección de vehículos de alquiler de primera clase, estamos aquí para llevarte a cualquier destino que desees, a tu propio ritmo. ¿Listo para comenzar tu próxima aventura sobre ruedas? ¡Hazlo con Wheels On Demand!</p>
                </TextContainerStyled>        
            </InfoContainerStyled>
        </HeroContainerStyled>
    )
}


