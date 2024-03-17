import petLogo from "../../assets/pet-logo.svg";
import { NavLink } from "react-router-dom";

export default function MenuBar({ children }: any) {
  return (
    <>
      <header className="flex flex-row justify-between items-center mx-14 h-16 border-solid border-black border-b-[1px]">
        <NavLink to="/teste">
          <div className="flex flex-row items-center gap-3">
            <img src={petLogo} />
            <h2 className="font-bold text-lg uppercase">Pet</h2>
          </div>
        </NavLink>
        <nav className="font-semibold text-lg flex flex-row gap-5 text-[#494949]">
          <NavLink
            to="/"
            className="hover:scale-110 duration-150 cursor-pointer"
          >
            <a>Início</a>
          </NavLink>
          <NavLink
            to="/sobre"
            className="hover:scale-110 duration-150 cursor-pointer"
          >
            <a>Sobre</a>
          </NavLink>
          <NavLink
            to="/doacao"
            className="hover:scale-110 duration-150 cursor-pointer"
          >
            <a>Doação</a>
          </NavLink>
          <NavLink
            to="/contato"
            className="hover:scale-110 duration-150 cursor-pointer"
          >
            <a>Contato</a>
          </NavLink>
        </nav>
        <div>
          <button className="border rounded-lg px-7 py-3 font-bold hover:scale-110 duration-150">
            Entrar
          </button>
        </div>
      </header>
        {children}
    </>
  );
}
