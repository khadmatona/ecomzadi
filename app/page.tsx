import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
      <Work />
    </>
  );
}
