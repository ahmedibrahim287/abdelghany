import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";




import ErrorPage from "./pages/ErrorPage/error-page";
import Home, {

} from "./pages/HomePage/Home";

import About from "./pages/AboutPage/About";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/newAbd-Elghany/",
    element: <Home />,
    errorElement: <ErrorPage />,


    children: [
      { index: true, element: <Index /> },
      {
        path: "/newAbd-Elghany/portfolio",
        element: <Index />,
      }, {
        path: "/newAbd-Elghany/about",
        element: <About />,
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
