import Categorias from "../../components/Categories/Categorias";
import CardsProducts from "../../components/Products/CardsProducts"
import { FadeVariants } from "../../utils";
import { ProducsContainer } from "./ProductsStyled"



    const Cars = () => {
        
        return (
            <ProducsContainer
            variants={FadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            >
                <h3>Categorias</h3>
                <Categorias/>
                <CardsProducts/> 
            </ProducsContainer>
        )
    }

    export default Cars;