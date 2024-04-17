//@ts-ignore
export default function PetCard({ key, onClick, foto, nome, idade, sexo }) {
  return (
    <figure
      key={key}
      className="border-solid border p-3 bg-[#FFBD59] text-black hover:cursor-pointer duration-150 flex-1 max-w-[300px]"
      onClick={onClick}
    >
      <div className=" max-w-[280px] max-h-[180px] flex justify-center">
        <img
          className="w-full"
          src={`https://mwwsnvgxqqjdzzbsnmtk.supabase.co/storage/v1/object/public/pets/${foto}`}
        />
      </div>
      <figcaption className="flex flex-col items-center gap-3 mt-3">
        <h3 className="font-bold text-xl">{nome}</h3>
        <div className="flex justify-center gap-6">
          <h3 className="bg-white p-2 text-sm font-semibold rounded-lg flex flex-row gap-1">
            <p>{idade}</p> <p>anos</p>
          </h3>
          <h3 className="bg-white p-2 text-sm font-semibold rounded-lg">
            {sexo}
          </h3>
        </div>
      </figcaption>
    </figure>
  )
}
