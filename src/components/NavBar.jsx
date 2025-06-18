import { useState } from 'react';
import NavLink from './NavLink';


 const links = [
    { name: 'Acerca', href: '/acerca' },
    { name: 'Proyectos', href: '/proyectos'},
    { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="md:w-1/2 z-50">
      <NavLink links={links} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </nav>
  );
}
