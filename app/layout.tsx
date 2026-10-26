import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Mohamed Latif — Mobile Application Developer",
  description:
    "Mohamed Latif is a Cairo-based mobile application developer with 10+ years of experience building React Native, Ionic/Angular and Node.js apps from concept to store launch.",
  openGraph: {
    title: "Mohamed Latif — Mobile Application Developer",
    description: "10+ years building cross-platform Android & iOS apps with React Native, TypeScript and Node.js.",
    images: ["/img/portrait.jpg"],
  },
};

// Applies the saved theme before first paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
