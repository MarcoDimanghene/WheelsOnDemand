import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  border-radius: 15px;
  padding: 1.5rem 1rem;
  width: 90%;
  max-width: 620px;
  margin: auto;
  box-shadow: 0 0 25px #0ef;
  @media (max-width: 500px) {
        width:300px;
        display: block;
        justify-content: space-between;
        }
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  align-items: center;

`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TitleResumStyled = styled.h3 `
  text-align: center;
  font-size: 1.5rem;
  width: 40%;
  margin: auto;
  @media (max-width: 500px) {
          font-size: 1rem;
        }
`

export const ImgResumenStyled = styled.img`
  width:40%;
  border-radius:15px;
`

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  color: white;
  @media (max-width: 500px) {
          font-size: 1rem;
        }
`;
