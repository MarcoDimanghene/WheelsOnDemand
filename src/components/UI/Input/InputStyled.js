import styled from "styled-components";

export const LblLoginStyled = styled.div `
    font-size: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    `

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

`;

export const InputLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputStyled = styled.input`
  background: #081b29;
  outline: none;
  /* border: ${({ isError }) => (isError ? '2px solid #0ef' : 'none')}; */
  border: none;
  border-bottom:${({ isError }) => (isError ? '2px solid red' : '2px solid #0ef')};
  border-radius: 8px;
  height: 30px;
  padding:0.5rem 1rem;
  margin-top: 2px;
  width: 250px;
    font-size: 1rem;
  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: white;
  -webkit-background-clip: text;

`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  
  color: #fb103d;
  font-size: 14px;
`;

