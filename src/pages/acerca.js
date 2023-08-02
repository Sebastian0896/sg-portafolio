import Layout from "@/components/layout";
import Link from "next/link";
export default function Acerca(){

    return(
        <Layout title="Acerca">
            <section className="acerca ">
                <h3 className="text-cyan-700">Acerca de mi</h3>
                <div className="rounded-md shadow-cyan-700 shadow-sm relative p-8 my-4 bg-white xs:w-full  sm:w-full md:w-1/2 lg:w-1/2 xl:w-full 2xl:w-1/2">
                    <p className="text-justify text-lg">¡Hola! Mi nombre es <span className="font-bold text-cyan-700">Sebastián González R.</span> Soy un desarrollador web apasionado por la tecnología y la innovación. He estado trabajando en el campo de desarrollo web durante más de 3 años y disfruto creando experiencias de usuario únicas y atractivas.</p><br></br>
                    <p className="text-justify text-lg">Mi enfoque principal es combinar habilidades técnicas y creativas para crear soluciones web efectivas y funcionales que satisfagan las necesidades de los clientes. Siempre estoy buscando aprender nuevas tecnologías y técnicas para mantenerme actualizado en el mundo en constante cambio de la tecnología web.</p><br />
                    <p className="text-justify text-lg">Durante mi carrera profesional, he trabajado en varios proyectos interesantes y desafiantes, incluyendo aplicaciones web personalizadas y soluciones de gestión de contenido. Me enorgullece haber sido parte del desarrollo de sitios web instituciones públicas como: <a href="https://portuaria.gob.do" target="_blank" className="text-cyan-700">Autoridad Portuaria Dominicana (APORDOM)</a>, <a href="https://cpp.gob.do/" target="_blank" className="text-cyan-700">Comisión Presidencial para la Modernización y Seguridad Portuaria (CPMSP)</a>.</p><br />
                    <p className="text-justify text-lg">Mi educación incluye una Ingeniería en Sistemas Computacionales de la Universidad Dominicana O&M, certificado de Inglés por el programa (Ingles por Inmersión) y me he certificado en Desarrollo de Aplicaciones Web Full Stack y Diseño Web.</p><br />
                    <p className="text-justify text-lg">Si está buscando un desarrollador web apasionado y con experiencia para su próximo proyecto, no dude en ponerse en contacto conmigo. Estoy seguro de que podemos crear algo increíble juntos.</p>
                </div>
            </section>
        </Layout>
    )
}
