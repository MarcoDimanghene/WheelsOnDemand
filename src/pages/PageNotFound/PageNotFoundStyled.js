
import styled from "styled-components";

import imgerror from "./error.png";

export const WrapperErrorStyled =styled.div `
    max-width:1400px;
    height: 720px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
`;

export const ImgDivStyled = styled.div `
    
    background-image: url(${imgerror});
    max-width:1400px;
    width:100%;
    height: 90%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    
`

