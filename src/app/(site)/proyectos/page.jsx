import {DiWordpress} from "react-icons/di"
import { RiNextjsLine } from "react-icons/ri";
export default function Proyectos(){
    const projects = ["Sevaviajar","Autoridad Portuaria Dominicana", "UCADE", "CPP", "RD VIAL", "Dent Billing Sopro"]
    const projectURL = ["https://sevaviajar.com", "https://portuaria.gob.do", "https://ucade.edu.do", "https://cpp.gob.do", "https://rdvial.gob.do", "https://dentbillingsopro.com"]
    const projectsIcon = [<RiNextjsLine className="text-white text-4xl" />, <DiWordpress className="text-white text-4xl" />, <DiWordpress className="text-white text-4xl" />, <DiWordpress className="text-white text-4xl" />, <DiWordpress className="text-white text-4xl" />, <DiWordpress className="text-white text-4xl" />]
    return(
    <section className="proyectos bg-black">
        <h3 className="text-center">Proyectos</h3>
        <div className="projects-container xl:p-12 lg:p-12 xs:p-0 sm:p-2 2xl:w-10/12 mx-auto rounded-md sm:h-screen 2xl:h-screen">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                projects.map((p, key) => (
                    <li key={key} className="my-2 p-4 flex flex-col justify-center items-center shadow-sm shadow-emerald-500 m-2 text-gray-500 xs:w-full sm:w-full  sm:h-[200px] md:h-[200px] rounded-md bg-gray-900 hover:bg-emerald-500 hover:text-white transition-colors"><a href={projectURL[key]} target="_blank" rel="noopener nofollow" className="text-2xl text-center">{projects[key]}</a><p className="">{projectsIcon[key]}</p></li>
                ))
            }
        </ul>
        </div>
    </section>
    )
}
