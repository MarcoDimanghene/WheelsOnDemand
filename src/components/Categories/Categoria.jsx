import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';
import { BorderDecoration, CardCategoria } from './CategoriasStyles';

// eslint-disable-next-line react/prop-types
export const Categoria = ({ title, category }) => {
    const selectedCategory = useSelector(
        state => state.categories.selectedCategory
    );
    const dispatch = useDispatch();

    const handleClick = () => {
        
        dispatch(selectCategory(category));
    };
    return (
        <CardCategoria selected={category === selectedCategory}
            onClick={handleClick}
            whileTap={{ scale: 0.95 }}
        >
        <h2>{title}</h2>
        <BorderDecoration></BorderDecoration>
        </CardCategoria>
    )
}

export default Categoria