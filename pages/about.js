import React from "react";

const AboutPage = () => {
  return (
    <div className="center">
      <p>A small project to view events made as part of nextjs course.</p>
      <p className="left">
        Endpoints:
        <br />
        / - Home page showing featured events.
        <br />
        /events - Page showing all events.
        <br />
        /events/eventId - View details about an event.
        <br />
        /events/{"{year}/{month}"} - View events in given year and month.
        <br />
      </p>
    </div>
  );
};

export default AboutPage;
