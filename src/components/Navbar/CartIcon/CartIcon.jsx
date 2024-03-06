
import { useDispatch, useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';

import { toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { LinkContainerStyled, SpamStyled } from '../NavbarStyles';

const CartIcon = () => {
    const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
    );

    const dispatch = useDispatch();

    return (
    <LinkContainerStyled
        onClick={() => dispatch(toggleHiddenCart())}
    >
        <FaShoppingCart />
        <SpamStyled>{totalCartItems}</SpamStyled>
        </LinkContainerStyled>
    );
};

export default CartIcon;