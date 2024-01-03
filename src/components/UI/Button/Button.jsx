
import {  ButtonStyled } from './ButtonStyled';

const Button = ({
    children,
    radius = '32',
    secondary,
    disabled = false,
    onClick = e => e.preventDefault(),
  }) => {
    return (
      <ButtonStyled
        disabled={disabled}
        onClick={onClick}
        secondary={secondary}
        radius={radius}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </ButtonStyled>
    );
  };

  export default Button


