import React from "react";
import './customButton.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    // <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} { ...otherProps }>
    //     {children}
    // </button>
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} { ...otherProps }>
        {children}
    </button>
);

export default CustomButton;