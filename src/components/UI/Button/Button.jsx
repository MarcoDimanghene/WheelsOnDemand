import React from 'react';
import { BtnStyled } from './ButtonStyled';

const Button =  ({
    children,
    radius = '32',
    secondary,
    disabled = false,
    onClick = e => e.preventDefault(),
    }) => {
    return (
    <BtnStyled
    disabled={disabled}
    onClick={onClick}
    secondary={secondary}
    radius={radius}
    whileTap={{ scale: 0.95 }}
    >
    {children}
    </BtnStyled>
    );
};

export default Button;