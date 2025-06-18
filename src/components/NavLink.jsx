import React from 'react'
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';


export default function NavLink ({links, isOpen, setIsOpen}) {

    const toggleMenu = () => setIsOpen(!isOpen);
    const pathName = usePathname();
  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* Toggle Button for Mobile */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Fullscreen Menu */}
        <div
          className={`md:w-full fixed inset-0 bg-black text-white transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:translate-x-0 md:flex md:items-end`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="md:w-full flex flex-col items-center justify-center h-full md:flex-row md:gap-2">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                  >
                   <span className={clsx("text-white  font-medium text-md cursor-pointer hover:border-b-2 hover:border-solid hover:border-emerald-500 pb-1", {
                    "text-[#024383] border-b-2 border-solid border-emerald-500" : pathName === link.href
                   })}
                  onClick={() => setIsOpen(false)}>
                    {link.name}
                   </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  )
}
