"use client";

import Link from 'next/link'
import { useState } from 'react';
import { FaRegCircleUser, FaCartShopping, FaMagnifyingGlass, FaAngleDown } from "react-icons/fa6";
import CatalogueMenu from './CatalogueMenu/CatalogueMenu';
import ProjectsMenu from './ProjectsMenu/ProjectsMenu';

function Header() {

  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <header className='min-w-screen z-2 p-6 bg-[#204733] text-white rounded-b-4xl fixed'>
      <nav className='flex flex-row justify-between items-center'>

        <Link href="/" className='uppercase font-bold text-2xl'>
          Locamatos
        </Link>

        <ul className='flex justify-between uppercase items-center'>

          <div
            className='mr-6 cursor-pointer flex items-center'
            onClick={() => {
              setIsCatalogueOpen(true)
              setIsProjectsOpen(false)
            }}
          >
            <p className='mr-2'>Catalogue</p>
            <FaAngleDown className={isCatalogueOpen ? "rotate-180" : ""} />
          </div>

          <div
            className='mr-6 cursor-pointer flex items-center'
            onClick={() => {
              setIsCatalogueOpen(false)
              setIsProjectsOpen(true)
            }}
          >
            <p className='mr-2'>Projet et services</p>
            <FaAngleDown className={isProjectsOpen ? "rotate-180" : ""} />
          </div>

          <div className='mr-6'>
            Contact
          </div>
          <button className='rounded-full p-2 border-1 cursor-pointer'>
            <FaMagnifyingGlass />
          </button>
        </ul>

        <div className='flex justify-between'>
          <Link className='rounded-full border-1 p-2 mr-3' href="/auth">
            <FaRegCircleUser />
          </Link>

          <Link className='rounded-full p-2 bg-amber-500' href="/cart">
            <FaCartShopping />
          </Link>
        </div>

      </nav>

      {isCatalogueOpen && <CatalogueMenu />}
      {isProjectsOpen && <ProjectsMenu />}

    </header>
  )
}

export default Header