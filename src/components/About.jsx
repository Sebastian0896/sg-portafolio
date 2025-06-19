import Image from "next/image";
import Link from "next/link";

const About = () => {

    return (

    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 bg-black text-gray-900">
        {/* Imagen */}
        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border">
            <Image src="/images/heroImage.jpeg" width={1400} height={600} alt="Foto de Sebastián González Rodríguez" className="w-full h-full object-cover" />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-500">
            Sebastián González Rodríguez
            </h1>
            <p className="text-xl mb-6 text-white">
            Desarrollador Web Frontend apasionado por el diseño limpio y funcional.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
            <Link href="/proyectos" className="px-6 py-3 bg-emerald-500 text-black hover:text-emerald-500 rounded-xl hover:bg-black hover:border-white hover:border transition">
                Ver proyectos
            </Link>
            <Link href="/contacto" className="px-6 py-3 border border-white text-emerald-500 rounded-xl hover:border-emerald-500  transition">
                Contacto
            </Link>
             <Link href="/CV-Sebastian-Gonzalez.pdf" download target="_blank" title="Descargar CV"
                className="inline-flex items-center gap-1  text-emerald-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
            </Link>

            </div>
        </div>
        </section>
    )

        {/* <section className="about-section relative md:p-4">
            <h3 className="text-cyan-700">Acerca de mi</h3>
           <div className="rounded-md shadow-cyan-700 shadow-sm   p-8 my-4 bg-white about relative w-full xs:w-full sm:w-full md:w-1/3 lg:w-full xl:w-2/4">
                <p className="text-justify text-lg">¡Hola! Mi nombre es <span className="font-bold text-cyan-700">Sebastián González R.</span> Soy un desarrollador web apasionado por la tecnología y la innovación. He estado trabajando en el campo de desarrollo web durante más de 3 años y disfruto creando experiencias de usuario únicas y atractivas.</p><br></br>
                <p className="text-justify text-lg">Mi enfoque principal es combinar habilidades técnicas y creativas para crear soluciones web efectivas y funcionales que satisfagan las necesidades de los clientes. Siempre estoy buscando aprender nuevas tecnologías y técnicas para mantenerme actualizado en el mundo en constante cambio de la tecnología web.</p>
                <button className="bg-cyan-700 text-white text-sm rounded-sm hover:bg-cyan-600 transition-colors p-2 my-2"><Link href="/acerca">Saber más</Link></button>
           </div>
        </section> */}
    
}


export default About;