import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import banner from "@/app/images/slide.jpg";
import trabajadores from "@/app/images/trabajadores.jpg";
import mapaPuerto from "@/app/images/mapa_puerto.png";

import { AiOutlineUser } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { IoExpandSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
        <div className="flex relative text-center">
          <Image
            className="w-full h-[500px] md:h-[700px] object-cover"
            src={banner}
            alt="banner"
          />
          <div className="bg-black bg-opacity-60 w-full h-full absolute pr-5 pl-5 flex items-center justify-center">
            <h1 className="text-white text-2xl md:text-5xl font-bold">
              Trabajando para ser la mejor Terminal portuaria, proporcionando
              los servicios necesarios que nuestros clientes requieren.
            </h1>
          </div>
        </div>
      </header>
      <div className="container w-full md:flex md:flex-col px-2 mx-auto">
        <div className="flex flex-col-reverse md:flex-row my-10">
          <div className="w-full">
            <h2 className="text-3xl font-semibold mb-5">Historia</h2>
            <p className="mb-4">
              Líder en el Puerto de Manzanillo en el manejo de carga general,
              Comercializadora La Junta, y Maniobrista La Junta forman parte de
              Tap Logística Portuaria, una empresa 100% mexicana que ofrece
              servicios integrales de carga, descarga, almacenaje y transporte a
              destino final.
            </p>
            <p className="mb-4">
              Tap Logística Portuaria fue fundada en el año 2006 con inversión
              100% mexicana y está enfocada en las cadenas logísticas que
              conectan al Puerto de Manzanillo con el norte y centro de México.
              Estamos ubicados en Manzanillo, el principal punto de encuentro
              con el mercado asiático y americano.
            </p>
            <p>
              Somos prestadores de servicios secundarios en el puerto más
              importante de México: Manzanillo (Colima). En TAP estamos
              comprometidos a brindar soluciones a nuestros clientes, a través
              de servicios de calidad y esquemas operativos eficientes en
              materia de comercio exterior.
            </p>
          </div>
          <div className="w-1/3 md:ml-auto">
            <Image
              className="rounded-md"
              src={trabajadores}
              alt="Trabajadores"
            />
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-3xl font-semibold mb-5">Valores</h2>
          <div className="md:flex md:flex-row justify-center gap-5">
            <div className="w-full text-center border rounded-md shadow-md py-5 px-3">
              <div className="flex justify-center">
                <h3 className="text-8xl text-yellow-300">
                  <AiOutlineUser />
                </h3>
              </div>
              <div>
                <h4 className="font-semibold my-5">SATISFACCIÓN</h4>
              </div>
              <div>
                <p>
                  Buscamos siempre la satisfacción total de nuestros clientes y
                  nuestro equipo.
                </p>
              </div>
            </div>
            <div className="w-full text-center border rounded-md shadow-md py-5 px-3">
              <div className="flex justify-center">
                <h3 className="text-8xl text-yellow-300">
                  <BsFillHouseFill />
                </h3>
              </div>
              <div className="font-semibold my-5">
                <h4>CAPACIDAD</h4>
              </div>
              <div>
                <p>
                  Contamos con más de 35,000 M² de superficie con capacidad para
                  realizar maniobras portuarias y almacenaje de 1,200 TEUS.
                </p>
              </div>
            </div>
            <div className="w-full text-center border rounded-md shadow-md py-5 px-3">
              <div className="flex justify-center">
                <h3 className="text-8xl text-yellow-300">
                  <IoExpandSharp />
                </h3>
              </div>
              <div className="font-semibold my-5">
                <h4>FLEXIBILIDAD</h4>
              </div>
              <div>
                <p>
                  Tenemos la flexibilidad de adaptarnos a nuestros clientes para
                  ser competitivos y eficientes.
                </p>
              </div>
            </div>
            <div className="w-full text-center border rounded-md shadow-md py-5 px-3">
              <div className="flex justify-center">
                <h3 className="text-8xl text-yellow-300">
                  <FaHandshake />
                </h3>
              </div>
              <div className="font-semibold my-5">
                <h4>COMPROMISO</h4>
              </div>
              <div>
                <p>
                  Tenemos compromiso con la calidad de nuestro servicio y la
                  mejora continua de nuestros procesos a través de un modelo de
                  gestión GEMBA basado en el "Toyota Way" que nos permite
                  agregar valor a las operaciones de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-5">Mapa del puerto</h2>
          <div>
            <Image
              className="w-full h-auto"
              src={mapaPuerto}
              alt="Mapa del puerto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
