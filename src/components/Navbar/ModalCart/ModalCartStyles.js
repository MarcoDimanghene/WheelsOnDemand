import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 450px;
    height: calc(100vh-4rem);
    padding: 2rem;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 0 0 0 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    @media (max-width: 500px) {
        width:300px;
        
        }
`;

export const CloseButtonContainerStyled = styled.div`
    height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    outline: none;
    border: none;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    cursor: pointer;
`;

export const TitleStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 2rem 0;

    & h1 {
        margin-top: 0;
        font-size: 1.2rem;
    }
`;

export const MainContainerStyled = styled.div`
    height: 80%;
    
`;

export const ProductsWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    padding: 1rem;
    padding-left: 0;
    overflow: scroll;

    &::-webkit-scrollbar {
        background: grey;
        width: 5px;
    }

    &::-webkit-scrollbar:horizontal {
        display: none;
    }

    @media (max-height: 800px) {
        height: 235px;
    }
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    width: 380px;
    border: 2px solid #0ef;
    background: #081B29;
    box-shadow: 0 0 25px #0ef;
    padding: 1rem;
    border-radius: 15px;

    & img {
        width: 80px;
        height: 80px;
        border-radius: 16px;
        object-fit: cover;
    }
    @media (max-width: 500px) {
        width:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        
        }
`;

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 190px;
`;

export const CardTitleStyled = styled.h3`
    margin: 0;
    margin-bottom: 2px;
    font-weight: 500;
`;

export const TextStyled = styled.p`
    margin: 0;
    color: #fff;
    font-size: 1rem;
`;

export const PriceStyled = styled.span`
    font-weight: 800;
    font-size: 1.2rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
`;

export const PriceContainerStyled = styled.div`
    z-index: 1000;
    
    & p {
        text-align: center;
        margin-bottom: 0;
    }
`;

export const SubtotalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
`;
export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
    justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
    display: flex;
    align-items: center;
`;
