import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';


import {
    Card,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
    InfoCard
} from './CardProductsStyled';

const CardProducts = ({name, price, img1, img2, category, description,}) => {
    return (
    <Card>
        <CardTitle>{name}</CardTitle>
        <CardImg
        src={img1}
        alt= {name}
        />
        <CardImg
        src={img2}
        alt= {name}
        />
        <CardText>
            
            
            <InfoCard>{description} </InfoCard>
            <CardPrice>{formatPrice(price)}</CardPrice>
            <InfoCard>{category} </InfoCard>
            
        </CardText>
        <Button onClick={e => e.preventDefault()}>Agregar</Button>
    </Card>
);
};

export default CardProducts;