import React from 'react';
import { Card } from './../../components/card/Card';
import './CardList.styles.scss';

export const CardList = props => (
    <div className='card-list'>
        {props.cards.map(card => (
            <Card key={card.id} card={card} />
        ))}
    </div>
);