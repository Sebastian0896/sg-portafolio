//import Image from "next/image";

import Link from "next/link";
import Image from "next/image";import { useRef } from "react";
;



const Header = () => {

    const navRef = useRef(null);


    const showNav = (e) => {
       navRef.current.classList.toggle("xs:hidden")
       navRef.current.classList.toggle("sm:hidden")
    }

    const hiddenNav = (e) => {
        navRef.current.classList.add("xs:hidden");
        navRef.current.classList.add("sm:hidden");
    } 

    return(
        <header className="w-screen p-4 bg-gray-900 header relative">
            <div className="mx-auto w-full container flex justify-between items-center">
                <h1 className="text-3xl font-bold w-1/4 text-center text-gray-500"><Link href="/" className="text-cyan-700 font-semibold">SGR</Link></h1>
                <nav className="flex justify-center items-center xs:hidden sm:hidden md:flex nav" ref={navRef}>
                    <ul className="xs:flex xs:flex-col xs:items-center xs:w-1/2 sm:flex sm:flex-col sm:items-center sm:w-1/2 md:flex md:justify-end md:flex-row">
                        <li>
                            <Link onClick={hiddenNav} className="mx-2 text-gray-500 font-semibold" href="/acerca">Acerca</Link>
                        </li>
                        <li>
                            <Link onClick={hiddenNav} className="mx-2 text-gray-500 font-semibold" href="/proyectos">Proyectos</Link>
                        </li>
                        <li>
                            <Link onClick={hiddenNav} className="mx-2 text-gray-500 font-semibold" href="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <butto className="right-0 top-0  mt-2 mr-6 cursor-pointer md:hidden absolute z-20" onClick={showNav}><Image src="/images/menu-squared-50.png" width={50} height={50} alt="btn-menu" className="" /></butto>
        </header>
    )
}


export default Header;