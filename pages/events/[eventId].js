import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";

const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const eventData = getEventById(eventId);
  if (!eventData) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary title={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt={eventData.title}
      />
      <EventContent>{eventData.description}</EventContent>
    </>
  );
};

export default EventPage;
