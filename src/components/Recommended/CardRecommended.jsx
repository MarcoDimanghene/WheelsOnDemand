import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
    Card,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
    
} from './CardsRecommendedStyled';

// eslint-disable-next-line react/prop-types
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
            <Button onClick={e => e.preventDefault()}>
                Agregar
            </Button>
        </CardText>
        
    </Card>
);
};

export default CardRecomendacion;

