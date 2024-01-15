import styled from "styled-components";

export const LblLoginStyled = styled.label `
    font-size: 1rem;
    position: relative;
    `

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  background: #081b29;
  outline: none;
  border: ${({ isError }) => (isError ? '2px solid #0ef' : 'none')};
  border-bottom:2px solid #0ef;
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
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;

