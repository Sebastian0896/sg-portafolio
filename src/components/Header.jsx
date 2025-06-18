//import Image from "next/image";
'use client'
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "./NavBar";

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
        <header className="w-screen p-4 bg-black header relative shadow-sm shadow-gray-200">
            <div className="md:mx-auto w-full md:container flex justify-between items-center">
                <h1 className="text-3xl font-bold w-1/4 text-center text-gray-500"><Link href="/" className="text-emerald-500 font-semibold">SGR</Link></h1>
                <Navbar />
            </div>
        </header>
    )
}


export default Header;