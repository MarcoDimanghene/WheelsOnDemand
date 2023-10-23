import { LogoStyled, NavbarContainerStyled } from "./NavbarStyles"
import LogoCar from "../../Img/logoCar.png"


export const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <LogoStyled> <img src={LogoCar} alt="logo" /> </LogoStyled>  
        </NavbarContainerStyled>
    )
}
