import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun Suryawanshi",
  description: "Personal website",
  metadataBase: new URL("https://arjunsuryawanshi.org"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
