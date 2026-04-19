import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { DemoSection } from "@/components/DemoSection";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyCortecs } from "@/components/WhyCortecs";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <DemoSection />
      <Services />
      <Process />
      <WhyCortecs />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
