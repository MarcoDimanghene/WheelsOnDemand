import { HeaderContainerStyled,  IconStyled,  LogoStyled, MenuContainerStyled, 
    NavbarContainerStyled, ResMenuConteinerStyled, NavLinkStyled, ConteinerMenuLinks,
    UserdivStyled,
    UserNavLinkStyled} from "./NavbarStyles"
import LogoCar from "../Img/logo2.png"
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import {BiSolidHome} from "react-icons/bi"
import {AiTwotoneCar} from "react-icons/ai"
import {BsFillInfoSquareFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import {LuMenuSquare} from "react-icons/lu"
import { toggleMenuHidden } from '../../redux/navmodal/modalnavlink';
import ModalCart from './ModalCart/ModalCart';
import CartIcon from './CartIcon/CartIcon';
import { useNavigate } from "react-router-dom";
import { toggleMenuUserHidden } from "../../redux/user/userSlice";
import ModalMenu from "./ModalLinkNav/ModalNav";
import ModalUser from "./ModalUser/ModalUser";



function Navbar() {
    const currentUser = useSelector(state => state.user.currentUser);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                            <NavLinkStyled to='info'> <IconStyled> <BsFillInfoSquareFill/> </IconStyled> Contacto</NavLinkStyled>
                        </motion.div>
                    </ConteinerMenuLinks>
                <ModalCart/>
                <ModalMenu/>
                <ModalUser/>
                <ResMenuConteinerStyled>
                    <CartIcon/>
                    <MenuContainerStyled
                    onClick={() => dispatch(toggleMenuHidden())}
                    > <motion.div whileTap={{scale: 0.9}}> <LuMenuSquare/> </motion.div> </MenuContainerStyled>
                </ResMenuConteinerStyled>
                <UserdivStyled onClick={()=>{
                    currentUser
                    ? dispatch(toggleMenuUserHidden()) : navigate("/login")
                }}>
                    <motion.div whileTap={{scale: 0.98}}> 
                        <UserNavLinkStyled> 
                            {
                                currentUser ? `${currentUser.nombre}` : 'Iniciar Sesion'
                            }
                        </UserNavLinkStyled>
                    </motion.div>
                    <motion.div whileTap={{scale: 0.98}}> 
                        <UserNavLinkStyled> <BiSolidUser/> </UserNavLinkStyled>
                    </motion.div>

                </UserdivStyled>
            </NavbarContainerStyled>
            
        </HeaderContainerStyled>
    )
}

export default Navbar;