import CardRecomendacion from "./CardRecommended";
import { CardsContainer } from "./CardsRecommendedStyled";
import { useSelector } from "react-redux";

const CardsRecomendacion = () => {
    
    const recommended = useSelector(state => state.recommended.recommended);

    return (
    <CardsContainer gridLength={recommended.length}>
        {recommended.map((recommended) => (
        <CardRecomendacion key={recommended.id} {...recommended} />
        ))}

    </CardsContainer>
    );
};

export default CardsRecomendacion