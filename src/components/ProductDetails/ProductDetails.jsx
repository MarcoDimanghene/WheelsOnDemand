  import { CatStyled, ImgContStyled, ImgStyled, ProducContStyled, SubtitleStyled, TitleStyled, TxtContStyled, TxtinfoStyled } from './ProductDetailsStyled'
import { useSelector } from 'react-redux';
import { FadeVariants, formatPrice } from '../../utils/index';
import { useParams } from 'react-router-dom';
import Button from '../UI/Button/Button';


const ProductDetails = () => {
  const { id } = useParams();
  const selctid = useSelector(state => state.products.selctid);
  const product = useSelector(state => state.products.products.find(p => p.id === selctid));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const { name, price, img1, img2, year, km, description, category } = product;

  return (
    <ProducContStyled
      variants={FadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <TitleStyled key={id}>
        {name}
      </TitleStyled>
      
      <TxtinfoStyled>
      {description}
      </TxtinfoStyled>
      <ImgContStyled>
        <ImgStyled src={img1} alt= {name}></ImgStyled>
        <ImgStyled src={img2} alt= {name}></ImgStyled>
      </ImgContStyled>
      <CatStyled>Tipo: {category} </CatStyled>
      <TxtContStyled>
        <SubtitleStyled>Precio: {formatPrice(price)}</SubtitleStyled>
        <SubtitleStyled>Año: {year}</SubtitleStyled>
        <SubtitleStyled>Kilometrage: {km}</SubtitleStyled>
        
      </TxtContStyled>
      
      <Button onClick={e => e.preventDefault()}>Agregar</Button>
    </ProducContStyled>
  );
};

export default ProductDetails;