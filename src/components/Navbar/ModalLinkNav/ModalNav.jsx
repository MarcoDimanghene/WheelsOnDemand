import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { ModalContainerStyled } from './ModalNavStyled';
import { useEffect } from 'react';
import { toggleMenuHidden } from '../../../redux/navmodal/modalnavlink';
import { IconStyled, NavLinkStyled } from '../NavbarStyles';
import {BiSolidHome} from "react-icons/bi"
import {AiTwotoneCar} from "react-icons/ai"
import { BsFillInfoSquareFill } from 'react-icons/bs';

const ModalUser = () => {
    const { hidden } = useSelector(state => state.modalnav);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!hidden) {
            dispatch(toggleMenuHidden());
        }
    }, [dispatch]);

    return (
        <AnimatePresence>
            {!hidden && (
                <ModalContainerStyled
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ duration: 0.5 }}
                    key='cart-user'
                    
                >
                    <NavLinkStyled to='/'> <IconStyled> <BiSolidHome /> </IconStyled>Inicio</NavLinkStyled>
                    <NavLinkStyled to='products'> <IconStyled> <AiTwotoneCar/> </IconStyled>Vehiculos</NavLinkStyled>
                    <NavLinkStyled to='info'> <IconStyled> <BsFillInfoSquareFill/> </IconStyled> Informacion</NavLinkStyled>   
                    <span
                        onClick={() => {
                            dispatch(toggleMenuHidden());
                        }}
                    >
                        Salir
                    </span>
                </ModalContainerStyled>
            )}
        </AnimatePresence>
    );
};

export default ModalUser;