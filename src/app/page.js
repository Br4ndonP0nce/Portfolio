import { About } from "@/Components/About/About";
import Hero from "@/Components/Hero/Hero";
import Image from "next/image";
import Tech from "@/Components/Tech/Tech";
import Contact from "@/Components/Contact/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tech />
      <Contact />
    </main>
  );
}
