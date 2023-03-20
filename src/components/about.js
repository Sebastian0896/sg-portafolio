import Image from "next/image";

const About = () => (
    <>
        <section className="about-section relative md:p-4">
            <h3 className="text-cyan-700">Acerca de mi</h3>
           <div className="rounded-md shadow-cyan-700 shadow-sm   p-8 my-4 bg-white about relative w-full xs:w-full md:w-2/3 lg:w-2/5 xl:w-2/4">
                <p className="text-justify text-lg">¡Hola! Mi nombre es <span className="font-bold text-cyan-700">Sebastián González R.</span> Soy un desarrollador web apasionado por la tecnología y la innovación. He estado trabajando en el campo de desarrollo web durante más de 3 años y disfruto creando experiencias de usuario únicas y atractivas.</p><br></br>
                <p className="text-justify text-lg">Mi enfoque principal es combinar habilidades técnicas y creativas para crear soluciones web efectivas y funcionales que satisfagan las necesidades de los clientes. Siempre estoy buscando aprender nuevas tecnologías y técnicas para mantenerme actualizado en el mundo en constante cambio de la tecnología web.</p>
           </div>
        </section>
    </>
)


export default About;