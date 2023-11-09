import { createGlobalStyle } from "styled-components";
//import fondo from "../assets/fondo4.jpg"

export const GlobalStyles = createGlobalStyle `
    html{
    scroll-behavior: smooth;
    }

    body {
    margin: 0;
    padding: 0;
    background: #ffff;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;  
