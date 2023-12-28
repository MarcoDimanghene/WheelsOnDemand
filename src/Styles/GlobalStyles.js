import { createGlobalStyle } from "styled-components";
import '@fontsource-variable/onest'

export const GlobalStyles = createGlobalStyle `
    html{
    scroll-behavior: smooth;
    }

    body {
    margin: 0;
    padding: 0;
    background: #081b29;
    font-family: 'Onest Variable', sans-serif;
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
