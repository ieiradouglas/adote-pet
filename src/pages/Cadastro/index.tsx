import { useState, useEffect } from "react"
import supabase from "../../database/supabase"
import { useNavigate, NavLink } from "react-router-dom"
import "../Login/style.css"
import { toast } from "react-hot-toast"

export default function Cadastro() {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    nome: "",
    sobrenome: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    email: "",
    senha: "",
  })

  const handleChange = (e: any) => {
    // cria um objeto com o nome do campo "INPUT" com o valor do INPUT.
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  async function getUser() {
    //@ts-ignore
    const { data, error } = await supabase.auth.getUser()
    if (data.user != null) {
      navigate("/inicio")
      toast(
        "Você já está logado.\n\nSaia da sua conta, para depois acessar a página de cadastro!",
        {
          duration: 6000,
        }
      )
    }
  }

  async function registrarUsuario() {
    try {
      if (userData.nome == "") {
        throw new Error("Campo 'Nome' deve ser preenchido.")
      } else if (userData.sobrenome == "") {
        throw new Error("Campo 'Sobrenome' deve ser preenchido.")
      } else if (userData.endereco == "") {
        throw new Error("Campo 'Endereço' deve ser preenchido.")
      } else if (userData.bairro == "") {
        throw new Error("Campo 'Bairro' deve ser preenchido.")
      } else if (userData.cidade == "") {
        throw new Error("Campo 'Cidade' deve ser preenchido.")
      } else if (userData.estado == "") {
        throw new Error("Campo 'Estado' deve ser preenchido.")
      } else if (userData.email == "") {
        throw new Error("Campo 'E-mail' deve ser preenchido.")
      } else if (userData.senha == "") {
        throw new Error("Campo 'Senha' deve ser preenchido.")
      } else {
        //@ts-ignore
        const { data, error } = await supabase.auth.signUp({
          //@ts-ignore
          email: userData.email,
          //@ts-ignore
          password: userData.senha,
          //@ts-ignore
          options: {
            data: {
              //@ts-ignore
              first_name: userData.nome,
              //@ts-ignore
              last_name: userData.sobrenome,
              //@ts-ignore
              endereco: userData.endereco,
              //@ts-ignore
              bairro: userData.bairro,
              //@ts-ignore
              cidade: userData.cidade,
              //@ts-ignore
              estado: userData.estado,
            },
          },
        })

        if (error != null) {
          if (
            error.message == "Unable to validate email address: invalid format"
          ) {
            throw new Error(
              `E-mail precisa estar em um formato válido: nome@gmail.com...`
            )
          } else if (error.message == "User already registered") {
            throw new Error(`Usuário já cadastrado...`)
          } else if (
            error.message == "Password should be at least 6 characters."
          ) {
            throw new Error(`Senha deve ter no mínimo 6 caracteres... `)
          }
        }
        if (error == null) {
          navigate("/inicio")
        }
      }
    } catch (error: any) {
      toast.error(`${error.message}`)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main>
      <section className="h-screen flex justify-center items-center">
        <form className="flex flex-col justify-center items-center gap-6 p-11 glassmorf text-center">
          <h2 className="font-extrabold text-4xl">
            <span className="text-[#FFBD59]">Adote</span> Pet
          </h2>
          <h3 className="font-semibold border-solid border-b-2 pb-2">
            Preencha os campos para se cadastrar
          </h3>
          <input
            id="email"
            name="email"
            type="email"
            pattern=".+@example\.com"
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
          <div className="text-center">
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome"
              className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
              onChange={(e) => handleChange(e)}
            />
            <input
              id="sobrenome"
              name="sobrenome"
              type="text"
              placeholder="Sobrenome"
              className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="text-center">
            <input
              id="endereco"
              name="endereco"
              type="text"
              placeholder="Endereço"
              className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
              onChange={(e) => handleChange(e)}
            />
            <input
              id="bairro"
              name="bairro"
              type="text"
              placeholder="Bairro"
              className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="text-center">
            <input
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
              onChange={(e) => handleChange(e)}
            />
            <input
              id="estado"
              name="estado"
              type="text"
              placeholder="Estado"
              className="border-solid border-2 border-black rounded-sm p-2 duration-150 m-2"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-row gap-2">
            <button
              className="border rounded-lg p-3 font-bold hover:scale-110 duration-150 min-w-32 bg-[#FFBD59] max-w-28"
              onClick={(e) => {
                e.preventDefault()
                registrarUsuario()
              }}
            >
              Cadastrar
            </button>
            <input
              value="Limpar"
              type="reset"
              className="border rounded-lg p-3 font-bold hover:scale-110 duration-150 min-w-32 bg-black text-white"
            />
          </div>
          <NavLink to="/login" className="w-full">
            <button className="border rounded-lg p-3 font-bold hover:scale-110 duration-150 min-w-32">
              Voltar
            </button>
          </NavLink>
        </form>
      </section>
    </main>
  )
}
