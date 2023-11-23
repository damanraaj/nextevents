import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import React from "react";

const EventsHomePage = () => {
  return (
    <>
      <EventsSearch />
      <EventList eventlist={getAllEvents()} />;
    </>
  );
};

export default EventsHomePage;
