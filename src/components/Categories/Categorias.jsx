import { useSelector } from "react-redux";
import { CategoriasContainer } from "./CategoriasStyles";
import Categoria from "./Categoria";


const Categorias = () => {
    const categories = useSelector(state => state.categories.categories);
    
    return (
        <CategoriasContainer>
            {categories.map(category =>(
                <Categoria key={category.id} {...category}/>
            ))}
        </CategoriasContainer>
    )
}

export default Categorias;