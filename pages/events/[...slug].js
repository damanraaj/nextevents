import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import ResultsTitle from "@/components/ui/results-title";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventFilterPage = () => {
  const router = useRouter();
  const date = router.query.slug;
  if (!date || date.length !== 2) {
    return <p className>Loading</p>;
  }
  const year = +date[0];
  const month = +date[1] - 1;
  if (isNaN(year) || isNaN(month)) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid path.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All events</Button>
        </div>
      </>
    );
  }
  const events = getFilteredEvents({ year: year, month: month });
  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for chosen period.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All events</Button>
        </div>
      </>
    );
  }
  return (
    <div>
      <ResultsTitle date={new Date(year, month)} />
      <EventList eventlist={events} />;
    </div>
  );
};

export default EventFilterPage;
