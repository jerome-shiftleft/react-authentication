import { json, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

export default async function formAction({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (request.method.toLowerCase() === "patch") {
    const id = params.id;
    url = "http://localhost:8080/events/" + id;
  }

  const token = getAuthToken();
  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    // server validation errors
    return response;
  }

  if (!response.ok) {
    throw json(
      {
        message: "Could not save event.",
      },
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
}
