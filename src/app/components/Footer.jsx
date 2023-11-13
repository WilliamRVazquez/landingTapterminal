import React from "react";
import Link from "next/link";
import Image from "next/image";

import pbip from "@/app/images/pbip.png";
import calidadAmbiental from "@/app/images/calidad_ambiental.jpg";
import industriaLimpia from "@/app/images/industria_limpia.png";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 text-white md:flex md:flex-row gap-5">
      <div className="md:w-1/3 px-5 md:px-20 px-5 py-5">
        <div>
          <h1 className="text-base md:text-2xl font-bold text-yellow-400">CLJ</h1>
          <span className="md:text-base text-xs">
            Trabajando para ser la mejor Terminal portuaria, proporcionando los
            servicios necesarios que nuestros clientes requieren.
          </span>
        </div>
        <div>
          <h1 className="text-base md:text-xl font-semibold text-yellow-400 mt-5">DIRECCIÓN</h1>
          <span className="md:text-base text-xs">
            Banda C, Tramo 9 Puerto Interior de San Pedrito S/N Colonia
            Burócrata C.P. 28250 Manzanillo, Colima
          </span>
        </div>
        <div>
          <h1 className="text-base md:text-xl font-semibold text-yellow-400 mt-5">TELEFONO</h1>
          <span className="md:text-base text-xs">(314)-180-0700 (30 Líneas Disponibles)</span>
        </div>
      </div>
      <div className="md:w-1/3 px-5 md:px-20 px-5 py-5">
        <div>
          <h1 className="text-base md:text-xl font-semibold text-yellow-400">OTROS LINKS</h1>
          <ul className="md:text-base text-xs">
            <li>
              <Link href="#" className="underline hover:no-underline">API Manzanillo</Link>
            </li>
            <li>
              <Link href="#" className="underline hover:no-underline">Turismo Manzanillo</Link>
            </li>
            <li>
              <Link href="#" className="underline hover:no-underline">Preguntas frecuentes</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-base md:text-xl font-semibold text-yellow-400 mt-5">Legales</h1>
          <ul className="md:text-base text-xs">
            <li>
              <Link href="#" className="underline hover:no-underline">Aviso de privacidad</Link>
            </li>
            <li>
              <Link href="#" className="underline hover:no-underline">Términos y Condiciones</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/3 px-5 md:px-20 px-5 py-5">
        <div className="md:text-base text-xs">
          <h4>© 2018 Comercializadora la junta.</h4>
          <span className="mt-5">
            Todos los derechos reservados Aviso de privacidad Desarrollado por{" "}
            <Link href="">CLJ</Link>
          </span>
        </div>
        <div className="flex md:flex-row justify-center gap-5 mt-5">
          <div>
            <Image
              className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] rounded-full"
              src={pbip}
              alt="Proteccion de bosques e instalaciones portuarias"
            />
          </div>
          <div>
            <Image
              className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] rounded-full"
              src={calidadAmbiental}
              alt="Calidad Ambiental"
            />
          </div>
          <div>
            <Image
              className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] rounded-full"
              src={industriaLimpia}
              alt="Industria Limpia"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
