import Hero from '@/components/Hero';
import About from '@/components/About';
import Conditions from '@/components/Conditions';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      <Conditions />
      <Services />
      <Achievements />
      <Contact />
    </main>
  );
}
