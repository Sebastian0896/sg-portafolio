import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const siteUrl = "https://portafoliosgr.com";
const title = "Sebastián González Rodríguez — Desarrollador Web Frontend";
const description = "Portafolio de Sebastián González Rodríguez, desarrollador web frontend especializado en Next.js, React y Tailwind CSS. Proyectos reales y demos de sitios web modernos para distintos mercados.";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: title,
        template: "%s | Sebastián González R.",
    },
    description,
    keywords: ["desarrollador web", "desarrollador frontend", "Next.js", "React", "Tailwind CSS", "Sebastián González Rodríguez", "República Dominicana"],
    authors: [{ name: "Sebastián González Rodríguez" }],
    openGraph: {
        type: "website",
        locale: "es_DO",
        url: siteUrl,
        siteName: "Sebastián González R. — Portafolio",
        title,
        description,
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
}

export default function Layout({ children }){

    return(
    <html lang="es">
        <body>
            <Header />
            <main className="overflow-hidden">
                { children }
            </main>
            <Footer />
        </body>
    </html>
    )
}