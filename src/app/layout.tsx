import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { Marcellus, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";


const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"], variable: "--font-marcellus" });


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lady Haya - Boutique de vêtements féminins",
  description: "Découvrez la collection Lady-Haya : abayas, hijabs, robes et plus encore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${marcellus.variable} ${poppins.variable} ${playfair.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
