//import Head from "next/head"
import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"


export default function Layout({title, children}){

    return(
    <html>
        <body  cz-shortcut-listen="true">
            
            {/* <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Sebastián González Rodríguez" />
                <meta name="keywords" content="portafolio, sebastián gonzález rodríguez, frontend, backend, tools, html5" />
                <meta name="author" content="Sebastián González Rodríguez" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/s-24.png" />
            </Head> */}
            <Header />
            <main className="overflow-hidden">
                { children }
            </main>
            <Footer />
        </body>
    </html>
    )
}