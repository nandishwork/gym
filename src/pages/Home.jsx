import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Stats from '../components/Stats';
import Trainers from '../components/Trainers';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Stats />
      <Trainers />
      <Testimonials />
      <CTASection />
    </main>
  );
}
