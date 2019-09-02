import React from 'react';
import './EventListItem.css';

const EventListItem = ({
    image,
    name,
    places,
    data,
    price,
    description
                       }) => (
    <li className="eventListItem__wrapper">
        <img src={image} className="eventListItem__image" alt={name}/>
        <div>
            <h2 className="eventListItem__name">{name}</h2>
            <div className="eventListItem__details">
                <h4 className="eventListItem__places">Miejsce: {places}</h4>
                <h4 className="eventListItem__date">Data: {data}</h4>
                <h4 className="eventListItem__price">Cena: {price}</h4>
            </div>
            <p className="eventListItem__description">{description}</p>
            <button className="eventListItem__button">kup bilet</button>
        </div>
    </li>
);

export default EventListItem;