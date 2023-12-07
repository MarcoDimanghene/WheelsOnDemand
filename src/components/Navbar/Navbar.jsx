import { ConeinerLinksStyled,  HeaderContainerStyled,  IconStyled,  LogoStyled, MenuContainerStyled, NavbarContainerStyled, CarIconStyled,ResMenuConteinerStyled, NavLinkStyled} from "./NavbarStyles"
import LogoCar from "../Img/logoCar.png"
import {motion} from "framer-motion"
import {BiSolidHome} from "react-icons/bi"
import {AiTwotoneCar} from "react-icons/ai"
import {BsFillInfoSquareFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import {LuMenuSquare} from "react-icons/lu"
import {FiShoppingCart} from "react-icons/fi"
import { useState } from "react"
import { CartCardStyled, CartContainerStyled, ItemCardStyled, TitleCartStyled } from "./ModalCart/ModalCartStyles"


function Navbar() {
    const [show, setClickShow] = useState (false);
    const [showcart, setClickShowCart] = useState(false);
    
    const toggleShowMenu  = () =>{
        setClickShow(!show)
        setClickShowCart(false);
    };
    
    const toggleShowCart  = () =>{
    setClickShowCart(!showcart)
    };

    const closeMenu = () => {
        toggleShowMenu(false);
        
    };

    return (
        <HeaderContainerStyled>
            <NavbarContainerStyled>
                <LogoStyled> <img src={LogoCar} alt="logo" /> 
                
                </LogoStyled>
                <ConeinerLinksStyled show={show}>
                    <motion.div whileTap={{scale: 0.95}}>
                        <NavLinkStyled onClick={closeMenu} to='/'> <IconStyled> <BiSolidHome /> </IconStyled>Inicio</NavLinkStyled>
                    </motion.div>
                    <motion.div whileTap={{scale: 0.95}}>
                        <NavLinkStyled onClick={closeMenu} to='cars'> <IconStyled> <AiTwotoneCar/> </IconStyled>Vehiculos</NavLinkStyled>
                    </motion.div>
                    <motion.div whileTap={{scale: 0.95}}>
                        <NavLinkStyled onClick={closeMenu} to='info'> <IconStyled> <BsFillInfoSquareFill/> </IconStyled> Informacion</NavLinkStyled>
                    </motion.div>
                </ConeinerLinksStyled>
                <CartContainerStyled showcart={showcart}>
                    <CartCardStyled>
                        <TitleCartStyled>Su Elección</TitleCartStyled>
                        <ItemCardStyled></ItemCardStyled>
                    </CartCardStyled>
                </CartContainerStyled>
                <ResMenuConteinerStyled>
                    
                    <motion.div whileTap={{scale: 0.98}}> 
                        <NavLinkStyled to='login' onClick={() => {setClickShow(false); }}> <IconStyled> <BiSolidUser/> </IconStyled>Login</NavLinkStyled>
                    </motion.div>
                    <motion.div whileTap={{scale: 0.9}}>

                        <CarIconStyled onClick={() => { toggleShowCart(); setClickShow(false); }}><FiShoppingCart/> </CarIconStyled>
                    </motion.div>
                    <MenuContainerStyled onClick={() => toggleShowMenu() }> <motion.div whileTap={{scale: 0.9}}> <LuMenuSquare/> </motion.div> </MenuContainerStyled>
                </ResMenuConteinerStyled>
                
            </NavbarContainerStyled>
            
        </HeaderContainerStyled>
    )
}

export default Navbar;