import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const featuredEvents = props.eventlist;
  return (
    <ul className={classes.list}>
      {featuredEvents.map((e) => (
        <EventItem event={e} key={e.id} />
      ))}
    </ul>
  );
};

export default EventList;
