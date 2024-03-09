import { motion } from "framer-motion";
import styled from "styled-components";

export const ProducContStyled = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1400px;
    width:80%;
    height:100%;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 25px;
    box-shadow: 0 0 25px #0ef;
    border: 2px solid #0ef;

`
export const TitleStyled = styled.h2 `
    color:#fff;
    text-align: center;
    font-size: 2rem;
`
export const TxtinfoStyled = styled.p `
    color:#fff;
    text-align: center;
    font-size: 1.2rem;
    margin:0;
`
export const ImgStyled = styled.img `
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    border-radius: 20px;
    padding: 15px;

`
export const ImgContStyled= styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const TxtContStyled= styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color:#fff;
    text-align: center;
    width: 80%;
    font-size: 1.5rem;
`
export const SubtitleStyled = styled.h3 `
    font-size: 1.5rem;
    font-weight: 200;
`


export const CatStyled = styled.span `
    font-size: 1rem;
    width:85%;
`
export const BtnDetailsStyled= styled(motion.button) `
    width: 40%;
    height: 30px;
    background: #000;
    cursor: pointer;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    border-radius: 25px;
    transition: opacity 0.3s, transform 0.3s;
    &:hover {
    opacity: 0.9; 
    transform: scale(1.1); /* Cambiado a transform: scale */
    }
`