import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";


export default function Proyectos(){
    const projects = ["Autoridad Portuaria Dominicana", "RDVIAL", "UCADE"]
    const projectURL = ["https://portuaria.gob.do", "https://pwebrdvial.azurewebsites.net", "https://ucade.edu.do"]
    const projectsIcon = ["wordpress-30", "wordpress-30", "wordpress-30"]
    return(
        <Layout>
            <section className="proyectos">
                <h3 className="text-white text-center">Proyectos</h3>
                <div className="projects-container xl:p-12 lg:p-12 xs:p-0 sm:p-2 2xl:w-10/12 mx-auto rounded-md sm:h-screen 2xl:h-screen">
                <ul className="md:flex flex-wrap justify-center">
                    {
                        projects.map((p, key) => (
                            <li key={key} className="my-2 p-4 flex flex-col justify-center items-center shadow-sm shadow-cyan-700 m-2 text-gray-500 xs:w-full sm:w-full md:w-1/6  xs:h-[200px] sm:h-[200px] md:h-[200px] rounded-md bg-gray-900 hover:bg-cyan-700 hover:text-white transition-colors"><Link href={projectURL[key]} target="_blank" rel="noopener nofollow" className="text-2xl text-center">{projects[key]}</Link><p className=""><Image src={`/images/${projectsIcon[key]}.png`} width={30} height={30} alt="icon" /></p></li>
                        ))
                    }
                </ul>
                </div>
            </section>
        </Layout>
    )
}
