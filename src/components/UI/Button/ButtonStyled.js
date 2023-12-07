import styled from "styled-components";

export const LogginBtnStyled = styled.button `
    position: relative;
    width: 80%;
    height: 45px;
    background: linear-gradient(#081b29, #0ef, #081b29 );
    border: 2px solid #0ef;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    transition: 0.8s;
    overflow: hidden;
    &:hover{
        scale: 1.1;
    }
`