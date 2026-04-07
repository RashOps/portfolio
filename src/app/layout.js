import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rayhan Touboui — Data & AI Portfolio",
  description: "Étudiant en Data Science & Intelligence Artificielle. Double cursus Tech (PSTB) et Business (Excelia). Portfolio de projets, compétences et parcours.",
  openGraph: {
    title: "Rayhan Touboui — Data & AI Portfolio",
    description: "Hybrid Profile: Data Science, Architecture & Business Strategy. Discover my missions and capabilities.",
    url: "https://rayhan-portfolio.vercel.app", // Ideally should be replaced by actual domain if custom domain is used
    siteName: "Rayhan Touboui Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayhan Touboui — Data & AI Portfolio",
    description: "Hybrid Profile: Data Science, Architecture & Business Strategy.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-surface font-body text-on-surface overflow-x-hidden">
        <AppLayout>
          {children}
        </AppLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
