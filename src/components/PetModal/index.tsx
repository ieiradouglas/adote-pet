//@ts-nocheck
import closeIcon from "../../assets/close-icon.svg"

export default function PetModal({
  foto,
  nome,
  idade,
  sexo,
  status,
  especie,
  raca,
  porte,
  descricao,
  vacinas,
  vermifugado,
  castrado,
  onClick,
}) {
  const petinfo = {
    id: 44,
    nome: "Milka", //
    especie: "gato",
    raca: "gato",
    porte: "pequeno",
    idade: 9, //
    sexo: "fêmea", //
    descricao: "Muito dócil",
    status: "adoção",
    vacinas: "Não sei",
    vermifugado: "Sim",
    castrado: "Não",
    necessidades_especiais: "Não sei",
    contato: "2299999-9999",
  }

  return (
    <div className="w-full min-h-full absolute flex justify-center items-center bg-[RGBA(0,0,0,0.7)]">
      <section className="flex flex-col items-center bg-[#FFBD59] p-5 w-full max-w-[600px]  border-solid border-[10px] rounded-md border-white my-5">
        <img
          className="relative top-0 left-60 font-bold max-w-[40px] hover:cursor-pointer hover:scale-110 duration-150"
          src={closeIcon}
          onClick={onClick}
        />
        <h2 className="font-black text-3xl mb-5">{nome}</h2>
        <div className="border-solid border-2 w-full max-w-[280px]">
          <img
            className="w-full max-h-[180px]"
            src={`https://mwwsnvgxqqjdzzbsnmtk.supabase.co/storage/v1/object/public/pets/${foto}`}
          />
        </div>
        <div className="flex flex-col w-3/4 gap-6 mb-6 text-lg">
          <div className="flex flex-col items-center gap-6 mt-6 w-full">
            <ul className="flex gap-8 w-full ">
              <li className="flex-1">
                <span className="font-semibold">Idade:</span> {idade}
              </li>
              <li className="flex flex-1 gap-1">
                <span className="font-semibold">Sexo:</span> {sexo}
              </li>
              <li className="flex flex-1 gap-1">
                <span className="font-semibold">Status:</span> {status}
              </li>
            </ul>
            <ul className="flex gap-8 w-full">
              <li className="flex flex-1 gap-1">
                <span className="font-semibold">Espécie:</span> {especie}
              </li>
              <li className="flex flex-1 gap-1">
                <p className="font-semibold">Raça:</p> {raca}
              </li>
              <li className=" flex flex-1 gap-1">
                <span className="font-semibold">Porte:</span> {porte}
              </li>
            </ul>
          </div>
          <div className="flex flex-col  w-full gap-1">
            <span className="font-semibold">Descrição:</span>
            <p className="bg-white h-20 p-2 overflow-y-scroll text-sm">
              {descricao}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 mt-6 w-full">
            <ul className="flex gap-8 justify-center w-full">
              <li className="flex-1 text-center">
                <span className="font-semibold">Vacinas:</span> {vacinas}
              </li>
            </ul>
            <ul className="flex gap-8 justify-between w-full">
              <li className="flex-1 text-center">
                <span className="font-semibold">Vermifugado:</span>{" "}
                {vermifugado}
              </li>
              <li className="flex-1 text-center">
                <span className="font-semibold">Castrado:</span> {castrado}
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <p>
              Gostou do amiguinho(a)?<br></br>Entre em contato para mais
              informações!
            </p>
            <p>{petinfo.contato}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
