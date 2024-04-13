import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import eventsLoader from "./loaders/eventsLoader";
import EventDetailPage from "./pages/EventDetail";
import eventDetailLoader from "./loaders/eventDetailLoader";
import deleteEventAction from "./actions/deleteEventAction";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import formAction from "./actions/formAction";
import EventsRoot from "./pages/EventsRoot";
import NewsletterPage from "./pages/Newsletter";
import newsletterAction from "./actions/newsletterAction";
import AuthenticationPage from "./pages/Authentication";
import { authAction } from "./actions/authAction";
import { logoutAction } from "./actions/LogoutAction";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage />, action: formAction },
            ],
          },

          { path: "new", element: <NewEventPage />, action: formAction },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
