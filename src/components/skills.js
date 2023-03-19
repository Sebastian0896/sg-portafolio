

const Skills = () => {

    const html5 = ["HTML", "CSS", "JAVASCRIPT"];
    const fronted = ["ReactJS", "NextJS", "Tailwindcss", "Bootstrap", "Bulma"];
    const backend = ["NodeJS", "ExpressJS", "MongoDB", "Mongoose"];
    const tools = ["Git and GitHub", "Git and GitHub", "Git and GitHub"];
    return(
        <section className="skills-section">
            <h3>Habilidades</h3>
            <div className="skills-container p-6 flex justify-around items-center w-full">
                <div className="bg-white w-1/4 rounded-md relative before:content-[''] before:border-2 before:border-red-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                    <div className="h-48">
                        <h4 className="card-header">HTML5</h4>
                        <ul className="px-8 list-disc marker:text-red-700">
                            {
                                html5.map( (elem, key) => (
                                    <li key={key}>{elem}<span className="bg-red-700">&#10003;</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col justify-between items-center second-column">
                    <div className="bg-white w-full h-auto my-8 rounded-md relative before:content-[''] before:border-2 before:border-cyan-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                        <h4 className="px-4 py-2 bg-black text-white rounded-tr-md rounded-tl-md card-header">Frontend</h4>
                        <div className="">
                            <ul className="px-8 list-disc marker:text-cyan-700">
                                {
                                    fronted.map( (elem, key) => (
                                        <li key={key}>{elem}<span className="bg-cyan-700">&#10003;</span></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white w-full  h-auto my-8 rounded-md relative before:content-[''] before:border-2 before:border-yellow-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                        <h4 className="card-header">Backend</h4>
                        <ul className="px-8 list-disc marker:text-yellow-700">
                            {
                                backend.map( (elem, key) => (
                                    <li key={key}>{elem}<span className="bg-yellow-700">&#10003;</span></li>
                                ))    
                            }
                        </ul>
                    </div>
                </div>
                <div className="bg-white rounded-md w-1/4">
                    <div className="h-48 bg-white rounded-md relative before:content-[''] before:border-2 before:border-blue-700 before:w-full before:rounded-tl-md before:rounded-tr-md before:absolute before:left-0 before:right-0 shadow-md">
                        <h4 className="card-header">Tools</h4>
                        <ul className="px-8 list-disc marker:text-blue-700">
                            {
                                tools.map( (elem, key) => (
                                    <li key={key}>{elem}<span className="bg-blue-700">&#10003;</span></li>
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