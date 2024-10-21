
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const ModalCartCard = ({ img1, name,  price, id, quantity}) => {
  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img1} alt={name} />
      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='#242424'
          onClick={() => dispatch(removeFromCart(id))}
        >
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={() =>
            dispatch(addToCart({ img1, name, price, id }))
          }
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;