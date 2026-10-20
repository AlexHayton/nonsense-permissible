import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AVDriftDetector() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8">AV Drift Detector</h1>

          <div className="prose max-w-none space-y-6 text-black/80">
            <p className="text-xl font-semibold">
              Measure audio/video sync to a fraction of a millisecond, frame by
              frame.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              What it does
            </h2>
            <p>
              av-drift-detector generates test videos whose every frame, and
              every frame's worth of audio, carries its own frame number. Play
              one through whatever you want to test: an encoder, a streaming
              pipeline, a TV, a video call. Record the result, and av-drift
              analyze tells you how far the sound has drifted from the picture
              at every frame.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
