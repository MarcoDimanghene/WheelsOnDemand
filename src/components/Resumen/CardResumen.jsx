import { formatPrice } from '../../utils';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
  ImgResumenStyled,
  TitleResumStyled,
} from './CardResumenStyles';

const CardResumen = ({ name, quantity, img1, price }) => {

  
  return (
    <ProductStyled>
      
      <ProductLeftStyled>
        
        <ImgResumenStyled src={img1} alt={name} />
        
          <TitleResumStyled>{name}</TitleResumStyled>
        
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}U</p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
