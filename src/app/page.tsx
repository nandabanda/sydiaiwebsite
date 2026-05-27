import { Hero } from "@/components/sections/Hero";
import { OrchestrationLoop } from "@/components/sections/OrchestrationLoop";
import { EnterprisePlatforms } from "@/components/sections/EnterprisePlatforms";
import { AIGenAI } from "@/components/sections/AIGenAI";
import { Industries } from "@/components/sections/Industries";
import { Technology } from "@/components/sections/Technology";
import { Insights } from "@/components/sections/Insights";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <OrchestrationLoop />
      <EnterprisePlatforms />
      <AIGenAI />
      <Industries />
      <Technology />
      <Insights />
      <About />
      <ContactCTA />
    </>
  );
}
