import React from 'react';
import Button from '../button/Button';

import './ButtonGroup.styles.scss';

const ButtonGroup = () => {
    return <div className="button-group">
        <Button name="View" />
        <Button name="Remove" />
    </div>;
}


export default ButtonGroup;