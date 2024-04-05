import { json } from "react-router-dom";

export default async function eventDetailLoader({ request, params }) {
  //console.log("event detail request: ", request);
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      {
        message: "Could not fetch event detail.",
      },
      {
        status: 500,
      }
    );
  } else {
    //console.log("response: ", response);
    return response;
  }
}
