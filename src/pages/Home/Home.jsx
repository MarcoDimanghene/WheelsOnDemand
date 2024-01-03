import { Hero } from '../../components/Hero/Hero';
import Cardsrecommended from '../../components/Recommended/CardsRecommended';
import { FadeVariants } from '../../utils';
import {
    HomeWrapper,
    RecomendadosWrapper,
    } from './HomeStyles';
    

    function Home() {
        
        return (
            <HomeWrapper 
            variants={FadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            >
                {/* Hero Section */}
                <Hero/>

            {/* Recomendados Section */}
                <RecomendadosWrapper>
                    <h2>Hoy te recomendamos</h2>
                    <Cardsrecommended/>
                </RecomendadosWrapper>
            </HomeWrapper>
        );
        }

    export default Home;