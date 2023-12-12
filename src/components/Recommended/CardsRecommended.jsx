import CardRecomendacion from "./CardRecommended";
import { CardsContainer } from "./CardsRecommendedStyled";
import { carsdata } from "../Data/data";

const CardsRecomendacion = () => {
    return (
    <CardsContainer gridLength={carsdata.length}>
        {
            carsdata.map((carsdata) =>{
                return <CardRecomendacion {...carsdata} key={carsdata.id}/>
            })
            }

    </CardsContainer>
    );
};

export default CardsRecomendacion