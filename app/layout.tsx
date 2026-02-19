import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-Service Carpentry & Remodeling in Aruba | Custom Homes & Renovations | AGA Construction Group",
  description: "AGA Construction Group is a trusted full-service carpentry, remodeling, and construction company in Aruba. We specialize in custom homes, renovations, kitchens, bathrooms, and investment property builds for local residents, U.S. clients, and Dutch investors building in Aruba.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AGA Construction Group",
  "image": "https://www.agaconstructionaruba.com/logo.png", // Placeholder, ideally should be real URL
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Oranjestad",
    "addressRegion": "Aruba",
    "addressCountry": "AW"
  },
  "description": "Full-service carpentry and remodeling company in Aruba specializing in custom home construction, kitchen and bathroom renovations, and investment property remodeling.",
  "url": "https://www.agaconstructionaruba.com", // Placeholder
  "telephone": "+2975555555", // Placeholder
  "priceRange": "$$"
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
