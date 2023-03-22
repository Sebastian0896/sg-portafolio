

const Footer = () => {
    return(
        
        <footer className="footer p-4 w-full bg-gray-900 absolue bottom-0">
            <div className="container flex justify-around items-center mx-auto xs:block sm:block md:flex">
                <div className="w-1/2 xs:w-full sm:w-full">
                    <ul className="medias flex justify-start xs:p-0 sm:p-0 md:p-2">
                        {/* <li className="mx-2"><a href="https://www.facebook.com/profile.php?id=100006629958355" target="_blank"><Image className="" src='/images/facebook-30.png' width={24} height={24} alt="facebook"/></a></li>
                        <li className="mx-2"><a href="#" target="_blank"><Image className="" src='/images/instagram-30.png' width={24} height={24} alt="instagram"/></a></li>
                        <li className="mx-2"><a href="https://web.whatsapp.com/" target="_blank"><Image className="" src='/images/whatsapp-30.png' width={24} height={24} alt="whatsapp"/></a></li> */}
                        <li><a href="mailto:sebagonazalez10@outlook.es" target="_blank" className="text-gray-500">sebagonzalez10@outlook.es</a></li>
                    </ul>
                </div>
                <div className="flex justify-end w-1/2 xs:w-full xs:justify-start sm:justify-start md:justify-end">
                    <small className="text-gray-500 text-sm font-bold xs:text-xs sm:text-sm">&copy; {new Date().getFullYear()} - Sebastián González R.</small>
                </div>
            </div>
        </footer>
    )
}



export default Footer;