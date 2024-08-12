
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import {
    HrStyled,
    LinkStyled,
    MenudivsStyled,
    ModalContainerStyled,
    UsernameStyled,
} from './ModelUserStyles';
import { setCurrentUser, toggleMenuUserHidden } from '../../../redux/user/userSlice';


const ModalUser = () => {
    const { currentUser, userhiddenMenu } = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    return (
    <AnimatePresence>
        {!userhiddenMenu && (
        <ModalContainerStyled
            initial={{ translateX: 800 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 800 }}
            transition={{ duration: 0.8 }}
            key='cart-user'
        >
            <UsernameStyled>{`Hola ${currentUser?.nombre}!!`}</UsernameStyled>
            
            <HrStyled />
            <MenudivsStyled>
                    <span onClick={() => dispatch(toggleMenuUserHidden())('/perfil')}>
                            <LinkStyled to='/perfil'>Perfil</LinkStyled>
                        </span>
                        <span onClick={() => dispatch(toggleMenuUserHidden())('/mis-ordenes')}>
                            <LinkStyled to='/mis-ordenes'>Mis Ordenes</LinkStyled>
                        </span>
            
                <span
                onClick={() => {
                dispatch(setCurrentUser(null))
                dispatch(toggleMenuUserHidden())
                }}
                >
                Cerrar Sesion
                </span>
            </MenudivsStyled>
        </ModalContainerStyled>
        )}
    </AnimatePresence>
    );
};

export default ModalUser;