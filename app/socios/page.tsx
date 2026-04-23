import type { Metadata } from "next";
import SociosPage from "@/components/socios/socios-page";

export const metadata: Metadata = {
  title: "Hoteles Socios | Asociación de Hoteles de Puerto Vallarta",
  description:
    "Conoce los más de 37 hoteles asociados de Puerto Vallarta y Bahía de Banderas, desde boutiques hasta grandes cadenas internacionales.",
};

export default function Page() {
  return <SociosPage />;
}
