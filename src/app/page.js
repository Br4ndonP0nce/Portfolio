import { About } from "@/Components/About/About";
import Hero from "@/Components/Hero/Hero";
import Image from "next/image";
import Tech from "@/Components/Tech/Tech";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tech />
    </main>
  );
}
