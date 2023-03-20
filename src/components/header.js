//import Image from "next/image";

import Link from "next/link";



const Header = () => {
    return(
        <header className="w-screen p-4 header">
            <div className="mx-auto w-full container flex justify-between items-center">
                <h1 className="text-3xl font-bold w-1/4 text-center text-white">SGR</h1>
                <nav className="w-2/3 flex justify-center items-center">
                    <ul>
                        <li>
                            <Link className="mx-2 text-white" href="#">Project</Link>
                            <Link className="mx-2 text-white" href="#">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;