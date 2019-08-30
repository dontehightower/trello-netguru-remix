import React from 'react';
import StyledButton from '../styles/Button';

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;
