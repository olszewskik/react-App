import React from 'react';
import EventListItem from "./EventListItem/EventListItem";
import "./EventListWrapper.css";
import { Events } from "../../data/Events";

const EventListWrapper = () => (
    <ul className="eventListWrapper__wrapper">
        {Events.map(item => (
            <EventListItem key={item.name} {...item}
            />
            ))}
    </ul>
)

export default EventListWrapper;