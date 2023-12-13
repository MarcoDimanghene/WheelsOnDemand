import { carsdata } from "../Data/data"
import CardProducts from "./CardProducts"
import { CardsContainer } from "./CardProductsStyled"


const CardsProducts = () =>{
    return(
        <CardsContainer>
            {
            carsdata.map((carsdata) =>{
                return <CardProducts {...carsdata} key={carsdata.id}/>
            })
            }

        </CardsContainer>
    )

}

export default CardsProducts