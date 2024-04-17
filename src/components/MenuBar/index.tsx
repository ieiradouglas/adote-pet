import { useState, useEffect } from "react"
import supabase from "../../database/supabase"

import petLogo from "../../assets/pet-logo.svg"

import { NavLink } from "react-router-dom"

export default function MenuBar({ children }: any) {
  const [user, setUser]: any = useState({})

  const [openModalPerfil, setOpenModalPerfil] = useState(false)

  async function getUser() {
    //@ts-ignore
    const { data, error } = await supabase.auth.getUser()
    //@ts-ignore
    setUser(data?.user)
  }

  async function userSignOut() {
    //@ts-ignore
    const { data, error } = await supabase.auth.signOut()
    setUser(data)
  }

  const ModalPerfil = () => {
    return (
      <div className="absolute top-20 right-14 p-4 rounded-md  max-w-96 flex flex-col gap-3 bg-white glassmorf">
        <h3 className="font-bold text-lg text-center my-3">
          {`${user.user_metadata.first_name} ${user.user_metadata.last_name}`}
        </h3>
        <h3>
          <span className="font-semibold">E-mail:</span> {user.email}
        </h3>
        <div className="flex flex-col my-3 gap-3">
          <button
            className="border rounded-lg px-7 py-3 font-bold hover:scale-110 duration-150"
            onClick={() => {
              setOpenModalPerfil(!openModalPerfil)
            }}
          >
            Minhas adoções
          </button>
          <button
            className="border rounded-lg px-7 py-3 font-bold hover:scale-110 duration-150"
            onClick={() => {
              setOpenModalPerfil(!openModalPerfil)
              userSignOut()
            }}
          >
            Sair
          </button>
        </div>
      </div>
    )
  }

  useEffect(() => {
    getUser()
  }, [children])

  return (
    <>
      {openModalPerfil ? <ModalPerfil /> : false}
      <header className="flex flex-row justify-between items-center mx-14 h-16 border-solid border-black border-b-[1px]">
        <NavLink className=" w-[33%]" to="/inicio">
          <div className="flex flex-row items-center gap-3">
            <img src={petLogo} />
            <h2 className="font-bold text-lg uppercase">Pet</h2>
          </div>
        </NavLink>
        <nav className="font-semibold text-lg flex flex-1 flex-row justify-center gap-5 text-[#494949] w-[33%]">
          <NavLink
            to="/inicio"
            className="hover:scale-110 duration-150 cursor-pointer"
          >
            <button>Início</button>
          </NavLink>
          <NavLink
            to="/sobre"
            className="hover:scale-110 duration-150 cursor-pointer"
          >
            <button>Sobre</button>
          </NavLink>
        </nav>
        <div className="w-[33%] flex justify-end">
          {user ? (
            //@ts-ignore
            <div className="flex justify-center items-center gap-2">
              <NavLink
                to="/cadastro-pet"
                className="border rounded-lg px-7 py-3 font-bold  bg-[#38b000] text-white"
              >
                <button className="">Cadastrar Pet</button>
              </NavLink>
              <button
                className="border rounded-lg px-7 py-3 font-bold hover:scale-110 duration-150"
                onClick={() => {
                  setOpenModalPerfil(!openModalPerfil)
                }}
              >
                Perfil
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="border rounded-lg px-7 py-3 font-bold hover:scale-110 duration-150">
                Entrar
              </button>
            </NavLink>
          )}
        </div>
      </header>
      {children}
    </>
  )
}
