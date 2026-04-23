import type { Metadata } from "next";
import NosotrosHero from "@/components/nosotros/hero";
import MissionSection from "@/components/nosotros/mission";
import TeamSection from "@/components/nosotros/team";

export const metadata: Metadata = {
  title: "Nosotros | Asociación de Hoteles de Puerto Vallarta",
  description:
    "Conoce la misión, visión y equipo de la Asociación de Hoteles de Puerto Vallarta y Bahía de Banderas.",
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <MissionSection />
      <TeamSection />
    </>
  );
}
