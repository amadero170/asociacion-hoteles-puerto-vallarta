import type { Metadata } from "next";
import ContactContent from "@/components/contacto/content";

export const metadata: Metadata = {
  title: "Contacto | Asociación de Hoteles de Puerto Vallarta",
  description:
    "Contáctanos para más información sobre la asociación, afiliaciones o servicios.",
};

export default function ContactoPage() {
  return <ContactContent />;
}
