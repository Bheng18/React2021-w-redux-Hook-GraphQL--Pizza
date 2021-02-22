import React from "react";
import { CustomButtonContainer } from "./customButton.styles";
// import './customButton.style.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer { ...otherProps }>{children}</CustomButtonContainer>
);

export default CustomButton;