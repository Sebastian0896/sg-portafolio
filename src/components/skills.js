import Image from "next/image";


const Skills = () => {

    const html5 = ["HTML", "CSS", "JAVASCRIPT"];
    const fronted = ["ReactJS", "NextJS", "Tailwindcss", "Bootstrap", "Bulma"];
    const backend = ["NodeJS", "ExpressJS", "MongoDB", "Mongoose"];
    const tools = ["Git and GitHub", "Wordpress"];

    //html icons
    const html5Icons = ["html-48", "css3-48", "javascript-48"]
    //Fronted icons
    const frontendIcons = ["react-50", "next.js-48", "tailwindcss-48", "bootstrap-24", "bootstrap-25"]
    //Backend icons
    const backendIcons = ["node-js-48", "express-js-48", "mongodb-48", "mongoose-48"]
    //tools icons
    const toolsIcons = ["git-48", "wordpress-48", "git-48"]


    return(
        <section className="skills-section ">
            <h3>Habilidades</h3>
            <div className="skills-container p-6 flex justify-around items-center w-full xs:block sm:block md:flex">
                <div className="bg-white md:w-1/4 sm:w-full  rounded-md relative before:content-[''] before:border-2 before:border-red-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                    <div className="h-48">
                        <h4 className="card-header">HTML5</h4>
                        <ul className="px-8 list-disc marker:text-red-700">
                            {
                                html5.map( (elem, key) => (
                                    <li key={key}>{elem}<span className=""><Image src={`/images/${html5Icons[key]}.png`} width={50} height={50} alt="icon" /></span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/4 flex flex-col justify-between items-center second-column sm:w-full xs:my-1 sm:my-1">
                    <div className="bg-white w-full h-auto md:my-8 xs:my-1 sm:my-1 rounded-md relative before:content-[''] before:border-2 before:border-cyan-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                        <h4 className="px-4 py-2 text-white rounded-tr-md rounded-tl-md card-header">Frontend</h4>
                        <div className="">
                            <ul className="px-8 list-disc marker:text-cyan-700">
                                {
                                    
                                    fronted.map( (elem, key) => (
                                        <li key={key}>{elem}<span className=""><Image src={`/images/${frontendIcons[key]}.png`} width={50} height={50} alt="icon" /></span></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white w-full h-auto md:my-8 xs:my-1 sm:my-1 rounded-md relative before:content-[''] before:border-2 before:border-green-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                        <h4 className="card-header">Backend</h4>
                        <ul className="px-8 list-disc marker:text-green-700">
                            {
                                backend.map( (elem, key) => (
                                    <li key={key}>{elem}<span className=""><Image src={`/images/${backendIcons[key]}.png`} width={50} height={50} alt="icon" /></span></li>
                                ))    
                            }
                        </ul>
                    </div>
                </div>
                <div className="bg-white rounded-md md:w-1/4 sm:w-full xs:my-1 sm:my-1 ">
                    <div className="h-48 bg-white rounded-md relative before:content-[''] before:border-2 before:border-blue-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                        <h4 className="card-header">Tools</h4>
                        <ul className="px-8 list-disc marker:text-blue-700">
                            {
                                tools.map( (elem, key) => (
                                    <li key={key}>{elem}<span className=""><Image src={`/images/${toolsIcons[key]}.png`} width={50} height={50} alt="icon" /></span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}


export default Skills;