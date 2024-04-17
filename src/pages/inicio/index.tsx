//@ts-nocheck

import { useState, useEffect } from "react"

import MenuBar from "../../components/MenuBar"

import supabase from "../../database/supabase"

import { MagnifyingGlass } from "react-loader-spinner"

import PetCard from "../../components/PetCard"
import PetModal from "../../components/PetModal"

interface PetInfo {
  nome: string
  especie: string
  raca: string
  porte: string
  idade: string
  sexo: string
  foto: string
  descricao: string
  status: string
  vacinas: string
  vermifugado: string
  castrado: string
  necessidades_especiais: string
  contato: string
}

export default function Inicio() {
  const [pets, setPets] = useState<PetInfo>({
    nome: "",
    especie: "",
    raca: "",
    porte: "",
    idade: "",
    sexo: "",
    foto: "",
    descricao: "",
    status: "",
    vacinas: "",
    vermifugado: "",
    castrado: "",
    necessidades_especiais: "",
    contato: "",
  })

  const [petModal, setPetModal] = useState({})
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  async function BuscaPet() {
    //@ts-ignore
    const { data, error } = await supabase.from("animal").select("*")
    //@ts-ignore
    setPets(data)
    setLoading(true)
  }

  async function BuscaPetModal(e) {
    //@ts-ignore
    const { data, error } = await supabase
      .from("animal")
      .select("*")
      .eq("id", e)
    //@ts-ignore

    setPetModal(data[0])
    setOpenModal(true)
  }

  useEffect(() => {
    BuscaPet()
  }, [])

  return (
    <>
      {openModal ? (
        <PetModal
          foto={petModal.foto}
          nome={petModal.nome}
          idade={petModal.idade}
          sexo={petModal.sexo}
          raca={petModal.raca}
          especie={petModal.especie}
          porte={petModal.porte}
          castrado={petModal.castrado}
          descricao={petModal.descricao}
          status={petModal.status}
          vacinas={petModal.vacinas}
          vermifugado={petModal.vermifugado}
          key={petModal.id}
          onClick={() => setOpenModal(false)}
        />
      ) : (
        console.log("false")
      )}

      <MenuBar>
        <main className="flex flex-col items-center">
          <section className="font-black text-5xl text-center mt-16 px-3">
            <h2>Todo animal merece um lar amoroso.</h2>
            <h2 className="mt-1">
              <span className="text-[#FFBD59]">Adote</span> um pet hoje!
            </h2>
            <h3 className="font-normal text-lg mt-3">
              Através do site você pode encontrar animais cadastrados e entrar
              em contato diretamente com a pessoa que<br></br> está responsável,
              tenho certeza que esta ação irá lhe trazer muita felicidade.
            </h3>
          </section>

          <section className="flex flex-col justify-between gap-2 mt-24 w-full max-w-3xl text-sm px-3">
            <div className="flex justify-between w-full max-w-2xl">
              <select
                defaultValue="Todos"
                name="select"
                className="w-full max-w-44 bg-[#E9E9E9] font-bold text-center p-4"
              >
                <option value="Todos">Todos</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
              </select>

              <input
                type="text"
                placeholder="Buscar pets..."
                className="w-full p-3 border"
              />

              <button
                onClick={() => {}}
                className="w-full max-w-24 p-3 bg-[#000] text-white rounded-lg ml-2"
              >
                Buscar
              </button>
            </div>

            <div className="font-light text-sm text-[#757575]">
              <p>Exemplo: Branco, Preto, Grande, Pequeno...</p>
            </div>
          </section>

          <section className="mt-10 p-6 flex flex-wrap justify-center gap-12 w-3/4">
            {loading ? (
              //@ts-ignore
              pets.map((pet) => {
                if (!pets) {
                  return <h2>Não foram encontrados resultados...</h2>
                } else {
                  return (
                    <PetCard
                      key={pet.id}
                      foto={pet.foto}
                      nome={pet.nome}
                      idade={pet.idade}
                      sexo={pet.sexo}
                      onClick={(e) => BuscaPetModal(pet.id)}
                    />
                  )
                }
              })
            ) : (
              <MagnifyingGlass
                visible={true}
                height="180"
                width="180"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#FFBD59"
              />
            )}
          </section>
        </main>
      </MenuBar>
    </>
  )
}
