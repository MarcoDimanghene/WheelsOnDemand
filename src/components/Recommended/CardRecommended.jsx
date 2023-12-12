import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
    Card,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
    
} from './CardsRecommendedStyled';

const CardRecomendacion = ({name, price, img1}) => {
    return (
    <Card>
        <CardImg
        src={img1}
        alt= {name}
        />
        <CardText>
            <CardTitle>{name}</CardTitle>
            
            <CardPrice>{formatPrice(price)}</CardPrice>
        </CardText>
        <Button onClick={e => e.preventDefault()}>Agregar</Button>
    </Card>
);
};

export default CardRecomendacion;

