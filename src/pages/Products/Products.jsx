import Categorias from "../../components/Categories/Categorias";
import CardsProducts from "../../components/Products/CardsProducts"
import { ProducsContainer } from "./ProductsStyled"



    const Cars = () => {
        
        return (
            <ProducsContainer>
                <h3>Categorias</h3>
                <Categorias/>
                <CardsProducts/> 
            </ProducsContainer>
        )
    }

    export default Cars;