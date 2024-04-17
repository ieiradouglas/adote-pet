import MenuBar from "../../components/MenuBar"
import adotePng from "../../assets/adote.jpg"

import { NavLink } from "react-router-dom"

export default function Sobre() {
  return (
    <MenuBar>
      <section className="flex flex-col justify-center items-center p-3">
        <h1 className="font-black text-4xl text-center mt-16 px-3">
          <span className="text-[#FFBD59]">Adote</span> um amigo peludo:
          <br></br> Encontre o amor incondicional que você procura!
        </h1>
        <p className="font-normal text-lg mt-3 text-center max-w-screen-lg">
          Abra seu coração e seu lar para um pet! A adoção é um ato de amor que
          transforma vidas. Encontre um companheiro fiel e cheio de carinho que
          te espera ansiosamente por um lar.
        </p>
        <p className="text-lg mt-3 text-center max-w-screen-lg font-semibold">
          Nossa missão é ajudar os animais, não lucrar com eles.
        </p>
        <NavLink
          className="bg-[#FFBD59] p-3 rounded-lg font-semibold mt-4 hover:cursor-pointer hover:scale-105 duration-150"
          to="/doacao"
        >
          <button>Clique aqui para doar!</button>
        </NavLink>
        <div className="max-w-screen-md">
          <img src={adotePng} />
        </div>
      </section>
    </MenuBar>
  )
}
