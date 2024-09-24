import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
      
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
      
    </div>
  );
};

export default Felicitaciones;
