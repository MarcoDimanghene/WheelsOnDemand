import { Hero } from '../../components/Hero/Hero';
import {
    CategoriasWrapper,
    HomeWrapper,
    ProductosWrapper,
    RecomendadosWrapper,
    } from './HomeStyles';

    function Home() {
        return (
            <HomeWrapper>
                {/* Hero Section */}
                <Hero/>

            {/* Recomendados Section */}
                <RecomendadosWrapper>
                    <h2>Hoy te recomendamos</h2>
                    {/* <CardsRecommended /> */}
                </RecomendadosWrapper>

            {/* Categorias Section */}
                <CategoriasWrapper>
                    <h2>Categorias</h2>
                    {/* <Categorias /> */}
                </CategoriasWrapper>

            {/* Populares Section*/}
                <ProductosWrapper>
                    <h2>Nuestros productos</h2>
                    {/* <CardsProductos /> */}
                </ProductosWrapper>
            </HomeWrapper>
        );
        }

    export default Home;