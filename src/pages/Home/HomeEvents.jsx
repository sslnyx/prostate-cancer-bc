// import React from 'react'
import { useOutletContext } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import HomeEventCard from "./HomeEventCard";
import ArrowBtn from "../../components/bttons/ArrowBtn";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const HomeEvents = () => {
  const {
    events: { nodes },
  } = useOutletContext();

  const sortedEvents = [...nodes].slice(0, 3);

  return (
    <section>
      <div className="container">
        <SectionTitle
          p1="UPCOMING"
          p2="EVENTS CALENDAR"
          className="title-light mb-5"
        />
      </div>

      <div className="container mb-5">
        <div className="flex flex-col md:flex-row -mx-5">
          {sortedEvents.map((event) => (
            <HomeEventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <PrimaryBtn href="/get-involved/find-an-event" className="btn-main">
          See all events
        </PrimaryBtn>
      </div>
    </section>
  );
};

export default HomeEvents;
