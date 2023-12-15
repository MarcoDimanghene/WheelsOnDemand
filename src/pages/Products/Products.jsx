
    import { useState } from "react";
    import CardsProducts from "../../components/Products/CardsProducts"
    import { ProductsFilterCat, ProducsContainer, CategoriesStyled,  } from "./ProductsStyled"
import { CarsContainer } from "../../components/Products/CardProductsStyled";


    const Cars = () => {
        const [selectedCategory, setSelectedCategory] = useState(null);
        const [selectedCard, setSelectedCard] = useState(null);

        const handleCategoryClick = (category) => {
        setSelectedCategory(category); 
        };

        const handleCardClick = (cardInfo) => {
            setSelectedCard(cardInfo);
        }
        return (
            
            <ProducsContainer>
                <ProductsFilterCat>
                    <CategoriesStyled
                        isActive={selectedCategory === 'TODOS'}
                        onClick={() => handleCategoryClick('TODOS')}
                        >
                        TODOS
                    </CategoriesStyled> 
                    <CategoriesStyled
                        isActive={selectedCategory === 'SEDAN'}
                        onClick={() => handleCategoryClick('SEDAN')}
                        >
                        SEDAN
                    </CategoriesStyled>
                    <CategoriesStyled
                        isActive={selectedCategory === 'COMPACTO'}
                        onClick={() => handleCategoryClick('COMPACTO')}
                        >
                        COMPACTO
                    </CategoriesStyled>
                    <CategoriesStyled
                        isActive={selectedCategory === 'SUV'}
                        onClick={() => handleCategoryClick('SUV')}
                        >
                        SUV
                    </CategoriesStyled>
                    <CategoriesStyled
                        isActive={selectedCategory === 'CAMIONETA'}
                        onClick={() => handleCategoryClick('CAMIONETA')}
                        >
                        CAMIONETA
                    </CategoriesStyled>
                </ProductsFilterCat>
                
                <CarsContainer onCardClick={handleCardClick} />
            {selectedCard && (
                <div>
                    <h2>{selectedCard.name}</h2>
                    <p>Precio: {selectedCard.price}</p>
                    {/* Agrega el resto de la información aquí */}
                    <img src={selectedCard.img1} alt={selectedCard.name} />
                    <img src={selectedCard.img2} alt={selectedCard.name} />
                </div>
            )}
                
                <CardsProducts/> 
            </ProducsContainer>
        )
    }

    export default Cars;