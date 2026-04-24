import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import VoiceflowChat from "@/components/VoiceflowChat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/logo.png", apple: "/logo.png" },
  title: "Asociación de Hoteles de Puerto Vallarta y Bahía de Banderas",
  description:
    "Representamos a los principales hoteles de Puerto Vallarta y Bahía de Banderas. Promovemos el destino y defendemos los intereses de nuestros asociados.",
  keywords: [
    "hoteles Puerto Vallarta",
    "asociación hotelera",
    "Bahía de Banderas",
    "turismo Puerto Vallarta",
  ],
  openGraph: {
    title: "Asociación de Hoteles de Puerto Vallarta y Bahía de Banderas",
    description:
      "Representamos a los principales hoteles de Puerto Vallarta y Bahía de Banderas.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <VoiceflowChat />
      </body>
    </html>
  );
}
