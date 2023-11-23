import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import React from "react";

const EventsHomePage = () => {
  return <EventList eventlist={getAllEvents()} />;
};

export default EventsHomePage;
