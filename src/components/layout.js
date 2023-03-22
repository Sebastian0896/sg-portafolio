import Head from "next/head"
import Footer from "./footer"
import Header from "./header"


export default function Layout({title, children}){

    return(
        <>
            <Head>
                <title>{title} | Portafolio</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Sebastián González Rodríguez" />
                <meta name="keywords" content="portafolio, sebastián gonzález rodríguez, frontend, backend, tools, html5" />
                <meta name="author" content="Sebastián González Rodríguez" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/s-24.png" />
            </Head>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}