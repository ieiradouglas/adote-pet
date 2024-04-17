import { useRouteError } from "react-router-dom"

import notFound from "../../assets/error-404.jpg"

export default function ErrorPage() {
  const error: any = useRouteError()
  console.log(error)
  return (
    <div className="max-h-screen flex flex-col items-center gap-5 mt-9">
      <img className="w-1/3" src={notFound} />
      <p className="text-3xl m-3 text-center font-semibold">
        Não foi possível encontrar essa página!
      </p>
      <p>
        <span className="font-bold">Erro: </span>
        {error.statusText}
      </p>
    </div>
  )
}
