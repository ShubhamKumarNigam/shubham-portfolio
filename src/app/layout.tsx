import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`} suppressHydrationWarning>
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
      <body className="min-h-full flex flex-col bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
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
