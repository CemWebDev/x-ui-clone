import { createBrowserRouter } from "react-router-dom";
import Notifications from "../pages/Notifications";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Root from "../layout/Root";
import NotFound from "../pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
]);
