import Image from "next/image";

const About = () => (
    <>
        <section className="bg-black about-section relative">
            <h3>Acerca de mi</h3>
           <div className="w-2/3 rounded-md shadow-md p-8 my-4 bg-white about relative">
                <p className="text-justify">¡Hola! Mi nombre es <span className="font-bold text-[#112049]">Sebastián González R.</span> Soy un desarrollador web apasionado por la tecnología y la innovación. He estado trabajando en el campo de desarrollo web durante más de 5 años y disfruto creando experiencias de usuario únicas y atractivas.</p><br></br>
                <p className="text-justify">Mi enfoque principal es combinar habilidades técnicas y creativas para crear soluciones web efectivas y funcionales que satisfagan las necesidades de los clientes. Siempre estoy buscando aprender nuevas tecnologías y técnicas para mantenerme actualizado en el mundo en constante cambio de la tecnología web.</p>
           </div>
        </section>
    </>
)


export default About;