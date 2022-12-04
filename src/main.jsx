import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";

import Contact, {
  loader as contactLoader,
} from "./routes/contact";

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import EditContact, {
  action as editAction,
} from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";


import Index from "./routes/index";
import ErrorPage from "./pages/ErrorPage/error-page";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";

const router = createBrowserRouter([
  {
    path: "/abdelghany/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,

    children: [
      { index: true, element: <Index /> },
      {
        path: "/abdelghany/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,

      }, {
        path: "/abdelghany/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,

      },

    ],

  }, {
    path: "/abdelghany/about",
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
