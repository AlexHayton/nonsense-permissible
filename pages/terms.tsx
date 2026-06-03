import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose max-w-none space-y-6 text-black/80">
            <p>[Placeholder for Terms of Service content]</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
