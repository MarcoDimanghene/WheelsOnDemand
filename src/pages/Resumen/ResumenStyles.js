import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
  max-width: 1400px;
  @media (max-width: 500px) {

        padding:1rem;
        margin:auto;
        }
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const H1TitleStyled= styled.h1`
  
  @media (max-width: 500px) {
    font-size:1.2rem;
}
`

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
    
    color: transparent;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
  width:100%;
  margin:auto;
`;

export const HrStyled = styled.hr`
  margin: 4rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    display:block;
    padding:1rem;
    margin:auto;
}
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;
