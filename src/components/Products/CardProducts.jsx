import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';


import {
    Card,
    CardContImg,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
    InfoCard
} from './CardProductsStyled';

const CardProducts = ({name, price, img1, img2}) => {
    return (
    <Card>
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