import { Link } from "react-router-dom";

import ProportionalImage from "../../utils/proporcional-image";

export default function Home() {
  return (
    <>
      <section className="bg-[#000000d0] py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="col-span-1 md:col-span-2 order-2 md:order-1">
              <ProportionalImage
                src={"/assets/imgs/perfil.jpeg"}
                alt={"Foto de Lucas Robbi"}
                height="100%"
                className="rounded-full border-4 border-[#8e42fe]"
              />
            </div>
            <div className="col-span-1 md:col-span-3 order-1 md:order-2">
              <div className="h-full flex flex-col flex-wrap justify-between items-center md:items-end gap-5">
                <div className="flex flex-col justify-start items-end gap-5">
                  <img
                    src="/assets/imgs/logo/1.svg"
                    alt="Logotipo Lucas Robbi"
                    className="w-auto h-[150px] object-cover"
                  />
                  <ul className="bg-[#8e42fe] text-white font-semibold flex flex-wrap md:flex-nowrap justify-end items-center gap-5 px-5 py-2 rounded-full">
                    <li>
                      <Link to={"/"} className="hover:text-black">
                        Início
                      </Link>
                    </li>
                    <li>
                      <Link to={"/#sobre"} className="hover:text-black">
                        Sobre
                      </Link>
                    </li>
                    <li>
                      <Link to={"/#tecnologias"} className="hover:text-black">
                        Tecnologias
                      </Link>
                    </li>
                    <li>
                      <Link to={"/#projetos"} className="hover:text-black">
                        Projetos
                      </Link>
                    </li>
                    <li>
                      <Link to={"/#contato"} className="hover:text-black">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-start items-end gap-5">
                  <p className="text-white text-center md:text-end">
                    Eu sou um desenvolvedor front-end que transforma designs em
                    sites bonitos, rápidos e que funcionam de verdade. Vamos
                    construir algo juntos que irá te encantar?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className="bg-[#00000088] py-10">
        <div className="container"></div>
      </section>
      <section id="tecnologias" className="bg-[#000000d0] py-10">
        <div className="container"></div>
      </section>
      <section id="projetos" className="bg-[#00000088] py-10">
        <div className="container"></div>
      </section>
      <section id="contato" className="bg-[#000000d0] py-10">
        <div className="container"></div>
      </section>
      <section className="bg-[#000000ee] py-10">
        <div className="container">
          <div className="text-white flex flex-wrap justify-center items-center">
            <p>Desenvolvido por <span className="font-semibold text-[#8e42fe]">Lucas Robbi</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
