import React from 'react';

import './Button.styles.scss';

const Button = ({name}) => {
    return <div className={`button-custom + ${name === 'View' ?'view':'remove'}`}>{name}</div>;
}

export default Button;