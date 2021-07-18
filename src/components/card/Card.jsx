import React from 'react';
import ButtonGroup from '../button-group/ButtonGroup';
import CardBody from '../card-body/CardBody';
import CardFooter from '../card-footer/CardFooter';
import CardHeader from '../card-header/CardHeader';

import './Card.styles.scss';

export const Card = props => (
    <div className="card-container" >
        <CardHeader  header = {props.card.originType} />
        <CardBody name={props.card.name} intents={props.card.intents}/>
        <ButtonGroup  />
        <CardFooter dateUpdated={props.card.dateUpdated}  />
    </div>
)