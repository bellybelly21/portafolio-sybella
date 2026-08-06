import {Metadata} from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata= {
  title: "¿Hablamos de tu próximo proyecto?",
  description: "¿Buscas una diseñadora integral o desarrolladora fullstack para tu equipo o proyecto? Contáctame y conversemos."
}

export default function ContactPage() {
  return <ContactClient />;
}