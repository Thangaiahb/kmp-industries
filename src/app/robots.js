export default function robots() {
    const baseUrl = "https://kmpindustries.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap: `${baseUrl}/sitemap.xml`,
    };
}