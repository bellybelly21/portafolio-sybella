import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://portafolio-sybella.vercel.app"),
  authors: [{ name: "Sybella Sandoval Soto" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://portafolio-sybella.vercel.app",
    siteName: "Sybella Sandoval Soto Portafolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${PlusJakarta.variable} h-full antialiased`}>
      <body className="bg-background">
        
        <div className="min-h-screen bg-hero-gradient">
          <Navbar />
          <main className="w-full">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}