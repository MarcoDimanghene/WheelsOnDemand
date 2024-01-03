import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/index';
import Button from '../UI/Button/Button';
import {
    ButtonContainerStyled,
    Card,
    CardContImg,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
} from './CardProductsStyled';
import { Link } from 'react-router-dom';
import { selectProductById } from '../../redux/products/productsSlice';

// eslint-disable-next-line react/prop-types, no-unused-vars
const CardProducts = ({ id, name, price, img1, img2, year, km, description, category  }) => {
    const dispatch = useDispatch();
    const viewProduc = () => {
        console.log(`Clic en la ID: ${id}`);
        dispatch(selectProductById(id));
    }


    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    if (selectedCategory && selectedCategory !== 'Todos' && category !== selectedCategory)
        {return null;}
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
        <ButtonContainerStyled>

            <Button onClick={e => e.preventDefault()}>Agregar</Button>
            <Button> <Link to={`/product/${id}`} onClick={viewProduc}>
                Ver Más
            </Link> </Button>
        </ButtonContainerStyled>
    </Card>
);
};

export default CardProducts;