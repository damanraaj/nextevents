import React from "react";
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  return <div>EventPage: {router.query.eventId}</div>;
};

export default EventPage;
