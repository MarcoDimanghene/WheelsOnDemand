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
import { useNavigate } from 'react-router-dom';

const ModalUser = () => {
    const { currentUser, userhiddenMenu } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                        <LinkStyled to='/perfil' onClick={() => dispatch(toggleMenuUserHidden())}>
                            Perfil
                        </LinkStyled>
                        <LinkStyled to='/mis-ordenes' onClick={() => dispatch(toggleMenuUserHidden())}>
                            Mis Ordenes
                        </LinkStyled>
                        <span
                            onClick={() => {
                                dispatch(setCurrentUser(null));
                                dispatch(toggleMenuUserHidden());
                                navigate('/');
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
