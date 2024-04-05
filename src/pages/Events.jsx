import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export default function EventsPage() {
  const data = useLoaderData();

  const events = data.events;
  //console.log("data: ", data);

  return (
    <>
      <EventsList events={events} />
      {/* <EventsList /> */}
    </>
  );
}
