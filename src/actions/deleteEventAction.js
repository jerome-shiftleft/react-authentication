import { json, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

export default async function deleteEventAction({ params, request }) {
  const id = params.id;
  const token = getAuthToken();
  console.log("token: ", token);
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
    headers: {
      "Authorization": "Bearer " + token,
    },
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
