import { useOutletContext } from "react-router-dom";
import EventCard from "./EventCard";

// import React from 'react'

const EventContainer = () => {
  const events = useOutletContext();

  return (
    <div className="flex flex-row flex-wrap -mx-3">
      {events.map((event) => (
        <EventCard key={event.id} props={event} />
      ))}
    </div>
  );
};

export default EventContainer;
