import type { Metadata } from "next";
import ActividadesContent from "@/components/actividades/content";

export const metadata: Metadata = {
  title: "Actividades | Asociación de Hoteles de Puerto Vallarta",
  description:
    "Conoce las actividades, eventos y programas de la Asociación de Hoteles de Puerto Vallarta.",
};

export default function ActividadesPage() {
  return <ActividadesContent />;
}
