import React from 'react';

import './CardBody.styles.scss';

const CardBody = ({name,intents}) => {
    return <div className="card-body">
        <h2 className = "card-name">{name}</h2>
        <p className = "card-intents">{intents+' intents'}</p>
    </div>
}


export default CardBody;