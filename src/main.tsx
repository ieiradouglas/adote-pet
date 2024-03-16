import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Inicio from "./pages/inicio";
import Sobre from "./pages/Sobre";
import Doacao from "./pages/Doacao";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/doacao",
    element: <Doacao />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contato",
    element: <Sobre />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
