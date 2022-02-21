/*blueprint of a button that can be reused allover the project
*/
import React from 'react';
import './Button.css';

const buttonStyles = ['btn--default','btn--outline'];
const buttonSizes = ['btn--size--medium','btn--size--large'];

export const Button = (
   {
    children,
    type,
    onClick,
    ButtonStyle,
    ButtonSize
   }
) => {
    const checkButtonStyle = buttonStyles.includes(ButtonStyle)?ButtonStyle:buttonStyles[0];
    const checkButtonSize = buttonSizes.includes(ButtonSize)?ButtonSize:buttonSizes[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    );
};