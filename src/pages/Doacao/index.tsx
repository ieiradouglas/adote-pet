import MenuBar from "../../components/MenuBar"

import qrCode from "../../assets/qr_code_example.svg"

export default function Doacao(){
  return (
    <MenuBar>
      <section className="">
        <figure className="flex flex-col items-center border-black border-8 mt-10 font-medium text-sm">
          <figcaption className="max-w-[550px] text-center mb-3 pb-3 border-solid border-b-4 border-[#FFBD59]">
          <span className="font-bold text-lg">Doe pelo Pix e ajude a transformar a vida de um pet!</span><br></br>Envie sua doação e, se quiser, deixe uma mensagem de carinho para nossos peludinhos.
          </figcaption>
          <img className="max-w-[350px]" src={qrCode} />
        </figure>
      </section>
    </MenuBar>
  )
}