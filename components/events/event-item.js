import React from "react";
import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";

const EventItem = (props) => {
  const { id, title, date, image, location } = props.event;
  const eventDate = new Date(date).toLocaleDateString();
  const exploreLink = `/events/${id}`;
  return (
    <li key={id} className={classes.item}>
      <img src={image} alt="Event image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{eventDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
