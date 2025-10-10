import { Lightbulb, Smartphone, Video, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Lightbulb,
      title: "Creative Vision",
      description:
        "Transforming imaginative ideas into tangible interactive experiences.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Optimized for iOS and Android with seamless performance.",
    },
    {
      icon: Video,
      title: "Video and WebRTC",
      description:
        "Years of expertise in video and WebRTC. Make your app more engaging with videos and WebRTC.",
    },
    {
      icon: Zap,
      title: "Engaging Gameplay",
      description:
        "Intuitive mechanics that keep players coming back for more.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-6xl mb-6">
            Making the impossible, permissible.
          </h2>
          <p className="text-xl text-white/70">
            At Nonsense Permissible, we believe in breaking boundaries and
            creating experiences that challenge conventions.
          </p>
          <p className="text-xl text-white/70">
            Our small team specializes in video and webRTC tech, 3D game
            development and AI agent development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
