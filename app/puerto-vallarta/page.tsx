import type { Metadata } from "next";
import PVHero from "@/components/puerto-vallarta/hero";
import PVSections from "@/components/puerto-vallarta/sections";

export const metadata: Metadata = {
  title: "Puerto Vallarta | Asociación de Hoteles",
  description:
    "Descubre Puerto Vallarta: 42 km de playas, gastronomía de primer nivel, cultura, y un clima cálido tropical todo el año.",
};

export default function PuertoVallartaPage() {
  return (
    <>
      <PVHero />
      <PVSections />
    </>
  );
}
