
import { useState } from "react";
import CardsProducts from "../../components/Products/CardsProducts"
import { ProductsFilterCat, ProducsContainer, CategoriesStyled,  } from "./ProductsStyled"


const Cars = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
    };
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
            <CardsProducts/> 
        </ProducsContainer>
    )
}

export default Cars;