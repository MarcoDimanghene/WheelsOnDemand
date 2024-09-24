import { useSelector } from "react-redux"
import CardProducts from "./CardProducts"
import { CardsContainer } from "./CardProductsStyled";




const CardsProducts = () => {
    
    const products = useSelector(state => state.products.products);


    return(
        <>
            <CardsContainer gridLength="3">
                {Object.entries(products).map(([productId, cars]) => (
                    <CardProducts key={productId} {...cars} />
                ))}
            
            </CardsContainer>
            
        </>
    );
}

export default CardsProducts