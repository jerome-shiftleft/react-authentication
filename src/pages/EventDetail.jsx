//import { useParams } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  //const params = useParams();
  const data = useRouteLoaderData('event-detail');
  const event = data.event;
  //console.log("event detail data: ", event);
  return (
    <>
      {/* <h1>EventDetailPage</h1>
      <p>Event ID: {params.id}</p> */}

      <EventItem event={event} />
    </>
  );
}
