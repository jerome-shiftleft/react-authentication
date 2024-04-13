import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  //console.log("data state: ", navigation.state);
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    // Force Logout after 1 hour    
    const timeout = 60 * 60 * 1000; // 1 hour in milliseconds

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, timeout);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
