import { createGlobalStyle } from "styled-components";
import fondo from "../assets/fondo4.jpg"

export const GlobalStyles = createGlobalStyle `
    body {
        margin: 0;
        font-family: sans-serif;
        background-color: #FFFFFF;
        height: 100%;
        width: 100%;
        background-image: url(${fondo});
        
        background-position: center;
        background-repeat: no-repeat;
    }
    `
    