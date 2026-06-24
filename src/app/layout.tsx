import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dr. Shubham Kumar Nigam | Research Fellow – AI/ML",
  description:
    "Dr. Shubham Kumar Nigam is a Research Fellow at University of Birmingham Dubai advancing Responsible, Scalable, and Interpretable AI across Core Machine Learning, Law, and Healthcare. Explore publications, projects, and research.",
  keywords: [
    "Shubham Kumar Nigam",
    "AI",
    "Machine Learning",
    "Legal AI",
    "NLP",
    "Explainable AI",
    "Healthcare AI",
    "University of Birmingham Dubai",
    "Research Fellow",
    "LLMs",
    "Multilingual AI",
    "Distributed Training",
    "Test-Time Training",
    "AI Memory",
    "Reasoning",
    "Agents",
  ],
  authors: [{ name: "Dr. Shubham Kumar Nigam" }],
  openGraph: {
    title: "Dr. Shubham Kumar Nigam | Research Fellow",
    description: "Advancing Responsible, Scalable, and Interpretable AI across Core Machine Learning, Law, and Healthcare.",
    url: "https://shubhamkumarnigam.com",
    siteName: "Dr. Shubham Kumar Nigam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shubham Kumar Nigam | Research Fellow",
    description: "Advancing Responsible, Scalable, and Interpretable AI across Core Machine Learning, Law, and Healthcare.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://shubhamkumarnigam.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C3D5A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable} ${plexMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dr. Shubham Kumar Nigam",
              jobTitle: "Research Fellow",
              worksFor: {
                "@type": "Organization",
                name: "University of Birmingham Dubai",
              },
              url: "https://shubhamkumarnigam.com",
              sameAs: [
                "https://scholar.google.com/citations?hl=en&user=73t3-rQAAAAJ",
                "https://dblp.org/pid/256/7932",
                "https://orcid.org/0000-0003-2564-7866",
                "https://www.linkedin.com/in/dr-shubham-kumar-nigam-34670541",
                "https://github.com/ShubhamKumarNigam",
                "https://aclanthology.org/people/shubham-kumar-nigam/",
                "https://x.com/sknigam05",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper dark:bg-paper-dark text-ink dark:text-ink-dark font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
