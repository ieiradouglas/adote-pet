import { useState, useEffect } from "react"
import supabase from "../../database/supabase"
import { useNavigate, NavLink } from "react-router-dom"
import "./style.css"

import toast from "react-hot-toast"

export default function Login() {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({})

  const handleChange = (e: any) => {
    // cria um objeto com o nome do campo "INPUT" com o valor do INPUT.
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  async function Login() {
    //@ts-ignore
    const { data, error } = await supabase.auth.signInWithPassword({
      //@ts-ignore
      email: userData.usuario,
      //@ts-ignore
      password: userData.senha,
    })
    if (!error) {
      navigate("/inicio")
    }
    if (error) {
      if (error.message == "Invalid login credentials")
        toast.error(`Usuário ou senha inválido...`)
      else toast.error(`Erro: ${error.message}`)
    }
  }

  async function getUser() {
    //@ts-ignore
    const { data, error } = await supabase.auth.getUser()
    if (data.user != null) navigate("/inicio")
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main>
      <section className="h-screen flex justify-center items-center">
        <form className="flex flex-col justify-center items-center gap-6 p-11 glassmorf">
          <h2 className="font-extrabold text-4xl">
            <span className="text-[#FFBD59]">Adote</span> Pet
          </h2>
          <input
            id="usuario"
            name="usuario"
            type="email"
            placeholder="Digite seu e-mail..."
            className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
            onChange={(e) => handleChange(e)}
          />

          <input
            id="senha"
            name="senha"
            type="password"
            placeholder="Digite sua senha..."
            className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
            onChange={(e) => handleChange(e)}
          />

          <button
            className="border rounded-lg px-7 py-3 font-bold hover:scale-110 duration-150 w-full bg-[#FFBD59]"
            onClick={(e) => {
              e.preventDefault()
              Login()
            }}
          >
            Entrar
          </button>
          <span className="font-extrabold">OU</span>
          <NavLink to="/cadastro" className="w-full">
            <button className="border rounded-lg px-7 py-3 font-bold hover:scale-110 duration-150 w-full">
              Criar uma conta
            </button>
          </NavLink>
        </form>
      </section>
    </main>
  )
}
