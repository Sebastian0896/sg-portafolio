const siteUrl = "https://portafoliosgr.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/demos/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
