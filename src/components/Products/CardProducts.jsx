import { formatPrice } from '../../utils/index';
import Button from '../UI/Button/Button';


import {
    Card,
    CardContImg,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
} from './CardProductsStyled';

// eslint-disable-next-line react/prop-types, no-unused-vars
const CardProducts = ({ id, name, price, img1, img2, year, km, description }) => {
    

    return (
    <Card >
        
        <CardTitle>{name}</CardTitle>
        <CardContImg>
            <CardImg
            src={img1}
            alt= {name}
            />
            <CardImg
            src={img2}
            alt= {name}
            />
        </CardContImg>
        <CardText>
            <CardPrice>{formatPrice(price)}</CardPrice>
        </CardText>
        <Button onClick={e => e.preventDefault()}>Agregar</Button>
    </Card>
);
};

export default CardProducts;