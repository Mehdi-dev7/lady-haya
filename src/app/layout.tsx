import type { Metadata } from "next";
import { Marcellus, Poppins, Cormorant_Garamond, Lora, Cinzel } from "next/font/google";
import "./globals.css";


const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"], variable: "--font-marcellus" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-cormorant" });
const lora = Lora({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-lora" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
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
        className={`${marcellus.variable} ${cormorant.variable} ${lora.variable} ${cinzel.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
