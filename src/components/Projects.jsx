import Link from "next/link";
import {DiWordpress} from "react-icons/di"
import { RiNextjsLine } from "react-icons/ri";
const Projects = () => {
    const projects = ["Sevaviajar", "Autoridad Portuaria Dominicana", "UCADE"]
    const projectURL = ["https://sevaviajar.com", "https://portuaria.gob.do", "https://ucade.edu.do"]
    const projectsIcon = [<RiNextjsLine className="text-white text-4xl" />, <DiWordpress className="text-white text-4xl" />, <DiWordpress className="text-white text-4xl" />]
    return(
        <section className="projects-section bg-black">
            <h3 className="text-center">Proyectos</h3>
            <div className="projects-container xl:p-12 lg:p-12 md:p-12 xs:p-0 sm:p-2">
               <ul className="md:flex flex-wrap justify-center">
                {
                    projects.map((p, key) => (
                        <li key={key} className="my-2 p-4 flex flex-col justify-center items-center shadow-sm shadow-emerald-500 m-2 text-gray-500 xs:w-full sm:w-full md:w-1/4 xs:h-[200px] sm:h-[200px] md:h-[200px] rounded-md bg-gray-900 hover:bg-emerald-500 hover:text-white transition-colors"><a href={projectURL[key]} target="_blank" rel="noopener nofollow" className="text-2xl text-center">{projects[key]}</a><p className="">{/* <Image src={`/images/${projectsIcon[key]}.png`} width={30} height={30} alt="icon" /> */}{projectsIcon[key]}</p>
                            
                        </li>
                    ))
                }
               </ul>
              <div className="flex justify-center">
                <button className="rounded-md bg-gray-900 w-[6rem] p-2 hover:bg-black transition-colors"><Link href="/proyectos" className="text-emerald-500">Todos</Link></button>
              </div>
            </div>

        </section>
    )
}

export default Projects;
