import Image from "next/image";

export default function Contacto(){

    return(
    <section className="bg-black h-screen w-screen flex flex-col justify-center items-center">
        <h3>Email</h3>
        <p><a href="mailto:sebagonzalez10@outlook.es" target="_blank" className="text-white text-2xl hover:text-gray-400">sebagonzalez10@outlook.es</a></p>
        <div className="w-1/2 xs:w-full sm:w-full flex justify-center items-center">
            <ul className="medias flex justify-start xs:p-0 sm:p-0 md:p-2">
                <li className="mx-2"><a href="https://www.facebook.com/profile.php?id=100006629958355" target="_blank"><Image className="" src='/images/facebook-30.png' width={24} height={24} alt="facebook"/></a></li>
                <li className="mx-2"><a href="https://www.instagram.com/sebagr08/" target="_blank"><Image className="" src='/images/instagram-30.png' width={24} height={24} alt="instagram"/></a></li>
                {/* <li className="mx-2"><a href="https://web.whatsapp.com/" target="_blank"><Image className="" src='/images/whatsapp-30.png' width={24} height={24} alt="whatsapp"/></a></li> */}
            </ul>
        </div>
    </section>
    )
}