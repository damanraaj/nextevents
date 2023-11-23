import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventFilterPage = () => {
  const router = useRouter();
  const date = router.query.slug;
  if (!date || date.length !== 2) {
    return <p className="center">Loading</p>;
  }
  const year = +date[0];
  const month = +date[1];
  if (isNaN(year) || isNaN(month)) {
    return <p>Invalid path.</p>;
  }
  const events = getFilteredEvents({ year: year, month: month });
  if (!events || events.length === 0) {
    return <p>No events found for chosen period.</p>;
  }
  return (
    <div>
      <EventList eventlist={events} />;
    </div>
  );
};

export default EventFilterPage;
