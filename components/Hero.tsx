import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCallback } from "react";

export default function Hero() {
  const navigateToAbout = useCallback(() => {
    window.location.href = "#about";
  }, []);
  const navigateToWork = useCallback(() => {
    window.location.href = "#work";
  }, []);
  
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <img
                src="/nonsense.png"
                alt="Nonsense Permissible"
                className="w-40"
              />
              <div className="inline-block px-4 py-2 bg-black text-white text-sm">
                Video . 3D . AI . WebRTC . Mobile . Web
              </div>
              <h1 className="text-5xl lg:text-7xl tracking-tight">
                Crafting Experiences That Spark Joy
              </h1>
              <p className="text-xl text-black/70 max-w-xl">
                At Nonsense Permissible, we create web, mobile and XR
                experiences that challenge conventions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/80 gap-2"
                onClick={navigateToWork}
              >
                View Our Work
                <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white"
                onClick={navigateToAbout}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1712173486904-5f149ee40dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMDNkJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU5NTgzMjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="3D Abstract Art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
