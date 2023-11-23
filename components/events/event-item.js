import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

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
            <DateIcon />
            <time>{eventDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            Explore event
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
