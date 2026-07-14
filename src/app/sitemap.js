const siteUrl = "https://portafoliosgr.com";

export default function sitemap() {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/acerca`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/proyectos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/demos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
