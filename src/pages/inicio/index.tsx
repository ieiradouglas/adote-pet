import MenuBar from "../../components/MenuBar";

export default function Inicio() {
  interface Animals {
    Nome: string;
    Link: string;
  }

  const pets: Array<Animals> = [
    {
      Nome: "Bob",
      Link: "https://images.dog.ceo/breeds/kuvasz/n02104029_2582.jpg",
    },
    {
      Nome: "Mel",
      Link: "https://images.dog.ceo/breeds/puggle/IMG_071023.jpg",
    },
    {
      Nome: "Toby",
      Link: "https://images.dog.ceo/breeds/terrier-fox/n02095314_3054.jpg",
    },
    {
      Nome: "Luna",
      Link: "https://images.dog.ceo/breeds/terrier-fox/n02095314_3054.jpg",
    },
    {
      Nome: "Rex",
      Link: "https://images.dog.ceo/breeds/terrier-fox/n02095314_3054.jpg",
    },
    {
      Nome: "Bella",
      Link: "https://images.dog.ceo/breeds/poodle-medium/PXL_20210220_100624962.jpg",
    },
    {
      Nome: "Max",
      Link: "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_2989.jpg",
    },
  ];

  return (
    <MenuBar>
      <main className="flex flex-col items-center">
        <section className="font-black text-5xl text-center mt-16 px-3">
          <h2>Todo animal merece um lar amoroso.</h2>
          <h2 className="mt-1">
            <span className="text-[#FFBD59]">Adote</span> um pet hoje!
          </h2>
          <h3 className="font-normal text-lg mt-3">
            Através do site você pode encontrar animais cadastrados e entrar em
            contato diretamente com a pessoa que<br></br> está responsável,
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

            <button className="w-full max-w-24 p-3 bg-[#000] text-white rounded-lg ml-2">
              Buscar
            </button>
          </div>

          <div className="font-light text-sm text-[#757575]">
            <p>Exemplo: Cachorro, Gato, Branco, Preto, Grande, Pequeno...</p>
          </div>
        </section>

        <section className="mt-10 p-6 flex flex-wrap justify-center gap-12 w-3/4">
          {pets.map((pet) => {
            return (
              <figure
                key={pet.Nome}
                className="border border-collapse px-6 pt-6 pb-4 bg-[#FFBD59] text-black hover:cursor-pointer hover:scale-105 duration-150"
              >
                <img className="w-[210px] h-[210px]" src={pet.Link} />
                <figcaption className="flex flex-col mt-2 gap-2 text-center">
                  <h3 className="font-bold text-xl">{pet.Nome}</h3>
                  <h3>32 Anos</h3>
                </figcaption>
              </figure>
            );
          })}
        </section>
      </main>
    </MenuBar>
  );
}
