import { ConeinerLinksStyled,  HeaderContainerStyled,  IconStyled,  LinkStyled, LogoStyled, MenuContainerStyled, NavbarContainerStyled } from "./NavbarStyles"
import LogoCar from "../Img/logoCar.png"
import {motion} from "framer-motion"
import {BiSolidHome} from "react-icons/bi"
import {AiTwotoneCar} from "react-icons/ai"
import {BsFillInfoSquareFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import {LuMenuSquare} from "react-icons/lu"
export const Navbar = () => {
    return (
        <HeaderContainerStyled>
            <NavbarContainerStyled>
                <LogoStyled> <img src={LogoCar} alt="logo" /> </LogoStyled>
                <ConeinerLinksStyled>
                <motion.div whileTap={{scale: 0.9}}><LinkStyled > <IconStyled> <BiSolidHome /> </IconStyled><a href="#">Inicio</a></LinkStyled></motion.div>
                <motion.div whileTap={{scale: 0.9}}><LinkStyled > <IconStyled> <AiTwotoneCar/> </IconStyled><a href="#">Vehiculos</a></LinkStyled></motion.div>
                <motion.div whileTap={{scale: 0.9}}><LinkStyled > <IconStyled> <BsFillInfoSquareFill/> </IconStyled> <a href="#">Informacion</a></LinkStyled></motion.div>
                <motion.div whileTap={{scale: 0.9}}> <LinkStyled> <IconStyled> <BiSolidUser/> </IconStyled><a href="#">Inicio de Seciòn</a></LinkStyled></motion.div>
                </ConeinerLinksStyled>
                <motion.div whileTap={{scale: 0.9}}>
                    <MenuContainerStyled> <LuMenuSquare/> </MenuContainerStyled>
                </motion.div>
            </NavbarContainerStyled>
        </HeaderContainerStyled>
    )
}
