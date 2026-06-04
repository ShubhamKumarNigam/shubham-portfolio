import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shubhamkumarnigam.com";
  const routes = [
    "/",
    "/about/",
    "/research/",
    "/publications/",
    "/projects/",
    "/working-projects/",
    "/datasets-models/",
    "/talks/",
    "/achievements/",
    "/teaching/",
    "/contact/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
