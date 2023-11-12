"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";

import logo from "@/app/images/logoTap.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:flex md:flex-row md:items-center md:justify-between md:px-5 fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            className="mx-4 w-[140px] h-[80px] inline"
            src={logo}
            alt="logotipo"
          />
        </Link>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </span>
      </div>
      <div>
        <ul
          className={`z-[-1] md:z-auto md:flex md:flex-row md:static absolute bg-white w-full md:w-auto md:opacity-100 ${
            isMenuOpen ? "opacity-100 top-full" : "opacity-0 top-[-400px]"
          } transition-all ease-in duration-300`}
        >
          <li className="py-2 px-3">
            <Link
              className="md:px-5 md:py-3 hover:text-yellow-400 md:hover:text-black md:hover:bg-yellow-300 font-semibold rounded-full duration-300"
              href="#"
            >
              Inicio
            </Link>
          </li>
          <li  className="py-2 px-3">
            <Link
              className="md:px-5 md:py-3 hover:text-yellow-400 md:hover:text-black md:hover:bg-yellow-300 font-semibold rounded-full duration-300"
              href="#"
            >
              Atencion a clientes
            </Link>
          </li>
          <li  className="py-2 px-3">
            <Link
              className="md:px-5 md:py-3 hover:text-yellow-400 md:hover:text-black md:hover:bg-yellow-300 font-semibold rounded-full duration-300"
              href="#"
            >
              Infraestructura y equipamiento
            </Link>
          </li>
          <li  className="py-2 px-3">
            <Link
              className="md:px-5 md:py-3 hover:text-yellow-400 md:hover:text-black md:hover:bg-yellow-300 font-semibold rounded-full duration-300"
              href="#"
            >
              Noticias
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
