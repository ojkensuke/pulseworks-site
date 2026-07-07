import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { WhyApproach } from "@/components/WhyApproach";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "var(--paper)" }}>
      <Header />
      <Hero />
      <Problems />
      <Services />
      <WhyApproach />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
