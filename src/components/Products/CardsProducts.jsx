import { useSelector } from "react-redux"
import CardProducts from "./CardProducts"
import {  ButtonContainerStyled, CardsContainer } from "./CardProductsStyled"
import Button from "../UI/Button/Button";


const CardsProducts = () => {
    
    const products = useSelector(state => state.products.products);


    return(
        <>
            <CardsContainer gridLength="3">
                {Object.entries(products).map(([productId, cars]) => (
                    <CardProducts key={productId} {...cars} />
                ))}
            
            </CardsContainer>
            <ButtonContainerStyled>
                <Button>Ver Menos</Button>
                <Button>Ver Mas</Button>
            </ButtonContainerStyled>
            
        </>
    );
}

export default CardsProducts