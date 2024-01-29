import { BtnDetailsStyled, CatStyled, ImgContStyled, ImgStyled, ProducContStyled, SubtitleStyled, TitleStyled, TxtContStyled, TxtinfoStyled } from './ProductDetailsStyled'
import { useDispatch, useSelector } from 'react-redux';
import { FadeVariants, formatPrice } from '../../utils/index';
import { StrongeStyled } from '../UI/Textformat/TxtStyled';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cartSlice';

const ProductDetails = () => {
  const dispatch = useDispatch()
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
        <SubtitleStyled><StrongeStyled>Precio: </StrongeStyled>{formatPrice(price)}</SubtitleStyled>
        <SubtitleStyled><StrongeStyled>Año: </StrongeStyled> {year}</SubtitleStyled>
        <SubtitleStyled><StrongeStyled>Kilometrage: </StrongeStyled>{km}</SubtitleStyled>
        
      </TxtContStyled>
      <TxtContStyled>
        <BtnDetailsStyled  onClick={() => dispatch(addToCart({id, name, price, img1}))}>Agregar</BtnDetailsStyled>
      </TxtContStyled>
    </ProducContStyled>
  );
};

export default ProductDetails;