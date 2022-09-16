import { Outlet, useOutletContext } from "react-router-dom";

const EventsArchiveOutlet = () => {
  const events = useOutletContext();
  return <Outlet context={events} />;
};

export default EventsArchiveOutlet;
