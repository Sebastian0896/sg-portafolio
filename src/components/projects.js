import Link from "next/link";
import Image from "next/image";


const Projects = () => {
    const projects = ["Autoridad Portuaria Dominicana", "Kateley Shop", "UCADE"]
    const projectURL = ["https://portuaria.gob.do", "https://kateleyshop.com", "https://ucade.edu.do"]
    const projectsIcon = ["wordpress-30", "shopify-32", "wordpress-30"]
    return(
        <section className="projects-section bg-gray-700">
            <h3 className="text-white text-center">Proyectos</h3>
            <div className="projects-container xl:p-12 lg:p-12 md:p-12 xs:p-0 sm:p-2">
               <ul className="md:flex flex-wrap justify-center">
                {
                    projects.map((p, key) => (
                        <li key={key} className="my-2 p-4 flex flex-col justify-center items-center shadow-sm shadow-cyan-700 m-2 text-gray-500 xs:w-full sm:w-full md:w-1/6 xs:h-[200px] sm:h-[200px] md:h-[200px] rounded-md bg-gray-900 hover:bg-cyan-700 hover:text-white transition-colors"><Link href={projectURL[key]} target="_blank" rel="noopener nofollow" className="text-2xl text-center">{projects[key]}</Link><p className=""><Image src={`/images/${projectsIcon[key]}.png`} width={30} height={30} alt="icon" /></p></li>
                    ))
                }
               </ul>
              <div className="flex justify-center">
                <button className="rounded-md bg-gray-900 w-[6rem] p-2 hover:bg-cyan-700 transition-colors"><Link href="/proyectos" className="text-cyan-700 hover:text-white">Todos</Link></button>
              </div>
            </div>

        </section>
    )
}

export default Projects;
