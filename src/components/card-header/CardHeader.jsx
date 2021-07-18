import React from 'react';
import icon from './../../assets/images/boltIcon.svg'

import './CardHeader.styles.scss';

const CardHeader = ({header}) => {
    return <div className={`card-header + ${header === 'automated' ? 'automated' : 'manual'}`}>
        {header === 'automated' ? <img className="icon" src={`${icon}`} alt = "icon"></img>:''}
    {header.charAt(0).toUpperCase() + header.slice(1) + ' Origin' }
    </div>;
}

export default CardHeader;