import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { IntakeForm } from "@/components/IntakeForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Process />
      <FAQ />
      <IntakeForm />
    </>
  );
}
