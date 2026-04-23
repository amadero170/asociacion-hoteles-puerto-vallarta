import type { Metadata } from "next";
import BolsaContent from "@/components/bolsa/content";

export const metadata: Metadata = {
  title: "Bolsa de Trabajo | Asociación de Hoteles de Puerto Vallarta",
  description:
    "Encuentra oportunidades de empleo en los principales hoteles de Puerto Vallarta. Envía tu CV y te conectamos con los hoteles asociados.",
};

export default function BolsaPage() {
  return <BolsaContent />;
}
