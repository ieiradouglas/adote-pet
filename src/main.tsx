import React, { Suspense } from "react"
import * as ReactDOM from "react-dom/client"
import "./index.css"

import { Toaster } from "react-hot-toast"

import { Bars } from "react-loader-spinner"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Inicio from "./pages/inicio"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Sobre from "./pages/Sobre"
import Doacao from "./pages/Doacao"
import ErrorPage from "./pages/ErrorPage"
import CadastroPet from "./pages/CadastroPet"

const Loading = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="rgb(99 102 241)"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inicio",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
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
    path: "/cadastro-pet",
    element: <CadastroPet />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" gutter={20} />
    </Suspense>
  </React.StrictMode>
)
