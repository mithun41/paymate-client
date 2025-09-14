import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
