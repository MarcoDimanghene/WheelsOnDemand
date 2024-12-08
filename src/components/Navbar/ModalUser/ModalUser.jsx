import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { toggleMenuHidden } from '../../../redux/navmodal/modalnavlink';
import {BiSolidHome} from "react-icons/bi"
import {AiTwotoneCar} from "react-icons/ai"
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { GiExitDoor } from "react-icons/gi";
import { IconModalStyled, MenuModalOverlayStyled, ModalContainerStyled, ModalLinkStyled } from '../ModalLinkNav/ModalNavStyled';


const ModalMenu = () => {
    const { hidden } = useSelector(state => state.modalnav);
    const dispatch = useDispatch();

    
    useEffect(() => {
        if (!hidden) {
            console.log("Menú abierto");
        } else {
            console.log("Menú cerrado");
        }
    }, [hidden]);

    return (
        <>
        {!hidden && (
                <MenuModalOverlayStyled
                    onClick={() => dispatch(toggleMenuHidden())}
                    isHidden={hidden}
                />
            )}
            <AnimatePresence>
                {!hidden && (
                    <ModalContainerStyled
                        initial={{ translateX: 700 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 700 }}
                        transition={{ duration: 0.6 }}
                        key="modal-menu"
                    >

                    <ModalLinkStyled  to='/' onClick={() => {dispatch(toggleMenuHidden());}}> 
                            <IconModalStyled whileTap={{scale: 0.95}}> <BiSolidHome />  </IconModalStyled>
                            Inicio
                    </ModalLinkStyled>
                    <ModalLinkStyled to='products' onClick={() => {dispatch(toggleMenuHidden());}}>
                        <IconModalStyled whileTap={{scale: 0.95}}> <AiTwotoneCar/> </IconModalStyled>
                        Vehiculos
                    </ModalLinkStyled>
                    <ModalLinkStyled to='info' onClick={() => {dispatch(toggleMenuHidden());}}>
                        <IconModalStyled whileTap={{scale: 0.95}}> <BsFillInfoSquareFill/> </IconModalStyled> 
                        Info y Contacto 
                    </ModalLinkStyled>
                    <ModalLinkStyled onClick={() => {dispatch(toggleMenuHidden());}}>
                        <IconModalStyled whileTap={{scale: 0.95}} >
                        <GiExitDoor />
                        </IconModalStyled>
                        Salir
                    </ModalLinkStyled>
                    
                </ModalContainerStyled>
            )}
        </AnimatePresence>
        </>
    );
};

export default ModalMenu;
