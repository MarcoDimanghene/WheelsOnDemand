import { HeaderContainerStyled,  IconStyled,  LogoStyled, MenuContainerStyled, 
    NavbarContainerStyled, ResMenuConteinerStyled, NavLinkStyled, ConteinerMenuLinks} from "./NavbarStyles"
import LogoCar from "../Img/logo2.png"
import {motion} from "framer-motion"
import { useDispatch } from 'react-redux';
import {BiSolidHome} from "react-icons/bi"
import {AiTwotoneCar} from "react-icons/ai"
import {BsFillInfoSquareFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import {LuMenuSquare} from "react-icons/lu"
import { toggleMenuHidden } from '../../redux/navmodal/modalnavlink';
import ModalCart from './ModalCart/ModalCart';
import CartIcon from './CartIcon/CartIcon';
import ModalUser from "./ModalLinkNav/ModalNav";


function Navbar() {
    const dispatch = useDispatch();

    return (
        <HeaderContainerStyled>
            <NavbarContainerStyled>
                <LogoStyled> <img src={LogoCar} alt="logo" />
                </LogoStyled>
                    <ConteinerMenuLinks>
                        <motion.div whileTap={{scale: 0.95}}>
                            <NavLinkStyled to='/'> <IconStyled> <BiSolidHome /> </IconStyled>Inicio</NavLinkStyled>
                        </motion.div>
                        <motion.div whileTap={{scale: 0.95}}>
                            <NavLinkStyled to='products'> <IconStyled> <AiTwotoneCar/> </IconStyled>Vehiculos</NavLinkStyled>
                        </motion.div>
                        <motion.div whileTap={{scale: 0.95}}>
                            <NavLinkStyled to='info'> <IconStyled> <BsFillInfoSquareFill/> </IconStyled> Informacion</NavLinkStyled>
                        </motion.div>
                    </ConteinerMenuLinks>
                <ModalCart/>
                <ModalUser/>
                <ResMenuConteinerStyled>
                    <motion.div whileTap={{scale: 0.98}}> 
                        <NavLinkStyled to='login'> <IconStyled> <BiSolidUser/> </IconStyled>Login</NavLinkStyled>
                    </motion.div>
                    <CartIcon/>
                    <MenuContainerStyled
                        onClick={() => dispatch(toggleMenuHidden())}
                    > <motion.div whileTap={{scale: 0.9}}> <LuMenuSquare/> </motion.div> </MenuContainerStyled>
                </ResMenuConteinerStyled>
                
            </NavbarContainerStyled>
            
        </HeaderContainerStyled>
    )
}

export default Navbar;