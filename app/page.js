import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Team from '@/components/Team';
import News from '@/components/News';
import Publications from '@/components/Publications';
import Impact from '@/components/Impact';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Team />
        <News />
        <Publications />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
