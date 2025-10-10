import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedWork from '../components/FeaturedWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Analytics />
      <SpeedInsights />
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
