import { json, redirect } from "react-router-dom";

export default async function deleteEventAction({ params, request }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      {
        message: "Could not delete event.",
      },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
}
