import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstructionModal from "@/components/ConstructionModal";
import CookieBanner from "@/components/CookieBanner";

const PlusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sybella Sandoval Soto | Frontend Developer & UX/UI Designer",
    template: "%s | Sybella Sandoval Soto",
  },
  description: "Portafolio profesional y blog de Sybella Sandoval Soto, especializada en desarrollo frontend, React, TypeScript y diseño de interfaces.",
  metadataBase: new URL("https://sybellasandoval.cl"),
  authors: [{ name: "Sybella Sandoval Soto" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://sybellasandoval.cl",
    siteName: "Sybella Sandoval Soto Portafolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Datos estructurados
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sybella Sandoval Soto",
    jobTitle: "Frontend Developer & UX/UI Designer",
    url: "https://sybellasandoval.cl",
    knowsAbout: [
      "React",
      "TypeScript",
      "Python",
      "UX/UI Design",
      "Tailwind CSS",
      "Web Development",
      "Frontend"
    ],
    alumniOf: "INACAP",
    sameAs: [
      "https://www.linkedin.com/in/sybellasandoval",
      "https://github.com/bellybelly21"
    ]
  };

  return (
    <html lang="es" className={`${PlusJakarta.variable} h-full antialiased`}>
      <head>
      <meta name="google-site-verification" content="TU_CODIGO_AQUÍ" />
        {/* Inyección de Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-background">
        <div className="min-h-screen bg-hero-gradient">
          <Navbar />
          <main className="w-full">
            {children}
          </main>
        </div>
        <Footer />
        <ConstructionModal />
        <CookieBanner />
        <GoogleAnalytics gaId="G-0VT04NJ21G" />
      </body>
    </html>
  );
}