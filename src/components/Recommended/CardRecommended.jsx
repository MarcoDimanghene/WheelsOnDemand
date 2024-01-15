import { useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
    Card,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
    
} from './CardsRecommendedStyled';
import { addToCart } from '../../redux/cart/cartSlice';

// eslint-disable-next-line react/prop-types
const CardRecomendacion = ({name, price, img1, id}) => {
    const dispatch = useDispatch()
    return (
    <Card>
        <CardImg
        src={img1}
        alt= {name}
        />
        <CardText>
            <CardTitle>{name}</CardTitle>
            
            <CardPrice>{formatPrice(price)}</CardPrice>
            <Button onClick={() => dispatch(addToCart({id, name, price, img1}))}>
                Agregar
            </Button>
        </CardText>
        
    </Card>
);
};

export default CardRecomendacion;

