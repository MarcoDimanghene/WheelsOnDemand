import { motion } from "framer-motion";
import styled from "styled-components";

export const ContProfile = styled.div `
    margin:1.5rem;
    display:flex;
    justify-content:center;
    align-items: center;
    
`
export const ProfileConStyled = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    max-width:1000px;
    box-shadow: 0 0 25px #0ef;
    border: 0.5px solid #0ef;
    background: #081b29;
    height:90%;
    width: 100%;
    margin: auto;
    border-radius:25px;
    text-align: center;
`
export const TilteStyled=styled.div`
    width:100%;
    border-bottom:2px solid #0ef;
    height:80px;
`

export const PersonalDataStyled = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width: 50%;
    height:300px;
`
export const LblProfile = styled.input`
    font-weight:bold;
    color:black;
    font-size:1.2rem;
    outline: none;
    color: white;
    border-radius: 8px;
    height: 30px;
    padding:0.5rem 1rem;
    margin: 5px;
    width: 250px;
    &::placeholder {
        color: black;
    }
`
export const DataContStyled=styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    @media (max-width: 780px) {
        flex-direction:column;
    }
`
export const Userbtn = styled(motion.button) `    
    width:70%;
    height:auto;
    background: #000;
    border: 2px solid #fff;
    outline: none;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 600;
    transition: 0.8s;
    margin:1.2rem;
    padding:1rem;
    border-radius:10px;
    cursor: pointer;
    &:hover{
        background: #fff;
        color: #000;
    }
    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    } 
    @media (max-width: 780px) {
        width:auto;
        height:auto;
        font-size: 1rem;
    }
`
