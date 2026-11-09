import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${SITE.name}`,
  description:
    "Get in touch with Ecomzadi, a digital marketing agency in Marrakech. Tell us about your project and we'll get back to you.",
};

export default function ContactPage() {
  return <Contact />;
}
