import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { Navigate } from 'react-router-dom'; 
import { IconModalStyled, MenuModalOverlayStyled, ModalContainerStyled, ModalLinkStyled } from '../ModalLinkNav/ModalNavStyled';
import { toggleMenuUserHidden, logout } from '../../../redux/user/userSlice'; 

import { HiOutlineLogout } from "react-icons/hi";
import { FaUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';

const ModalUser = () => {
    const { userhiddenMenu } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout()); // Despacha la acción de logout
        Navigate('/login'); // Redirige al usuario a la página de login
    };
    


    return (
        <>
        {!userhiddenMenu && (
                <MenuModalOverlayStyled
                onClick={() => dispatch(toggleMenuUserHidden())}
                isHidden={userhiddenMenu}
            />
            )}
            <AnimatePresence>
                {!userhiddenMenu  && (
                    <ModalContainerStyled
                        initial={{ translateX: 700 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 800 }}
                        transition={{ duration: 0.6 }}
                        key="modal-menu"
                    >

                    <ModalLinkStyled  to='perfil' onClick={() => {dispatch(toggleMenuUserHidden());}}> 
                            <IconModalStyled whileTap={{scale: 0.95}}> <FaUserCircle />  </IconModalStyled>
                            Perfil
                    </ModalLinkStyled>
                    <ModalLinkStyled to='mis-ordenes' onClick={() => {dispatch(toggleMenuUserHidden());}}>
                        <IconModalStyled whileTap={{scale: 0.95}}> <FaShoppingCart/> </IconModalStyled>
                        Ordenes
                    </ModalLinkStyled>
                    <ModalLinkStyled to='changepass' onClick={() => {dispatch(toggleMenuUserHidden());}}>
                        <IconModalStyled whileTap={{scale: 0.95}}> <FiLock/> </IconModalStyled> 
                        Cambiar Contraseña 
                    </ModalLinkStyled>
                    <ModalLinkStyled onClick={handleLogout}> {/* Llama a handleLogout al hacer clic */}
                        <IconModalStyled whileTap={{scale: 0.95}} >
                        <HiOutlineLogout />
                        </IconModalStyled>
                        Cerrar Sesión
                    </ModalLinkStyled>
                    
                </ModalContainerStyled>
            )}
        </AnimatePresence>
        </>
    );
};

export default ModalUser;
