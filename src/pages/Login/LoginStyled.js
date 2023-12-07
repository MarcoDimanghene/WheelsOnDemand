import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperLoginStyled = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 80vh;
    background: #081b29;
    
`
export const LogginConteinerStyled = styled.div `
    width:80%;
    height:70%;
    min-height:400px;
    max-width: 800px;
    background: transparent;
    border: 2px solid #0ef;
    display: flex;
    border-radius: 15px;
    overflow:hidden;
    box-shadow: 0 0 25px #0ef;
`
export const LoggintFormStyled = styled.form `
    width:50%;
    height:100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
`




export const LinkTxtStyled = styled(Link) `
    font-size:1rem;
    font-weight: normal;
    color: darkcyan;
    cursor: pointer;
    margin-left: 1em;
    margin-bottom: 15px;
    `
export const IconSpanStyled = styled.span`
    margin-right: 5px;
    color: #fff;
    `


export const InfotextContStyled = styled.div `
    width:50%;
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(45deg, #081b29, #0ef);
    border-left: 3px solid #081b29;
`

export const TitleStyled = styled.h2`
    text-align: right;
    padding: 0 40px 0 50px;
`
