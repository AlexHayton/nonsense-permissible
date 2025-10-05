import { Lightbulb, Smartphone, Palette, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Creative Vision',
      description: 'Transforming imaginative ideas into tangible interactive experiences.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Optimized for iOS and Android with seamless performance.',
    },
    {
      icon: Palette,
      title: '3D Artistry',
      description: 'Stunning three-dimensional visuals that captivate and engage.',
    },
    {
      icon: Zap,
      title: 'Engaging Gameplay',
      description: 'Intuitive mechanics that keep players coming back for more.',
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
            At Nonsense Permissible, we believe in breaking boundaries and creating mobile experiences that challenge conventions. Our small team specializes in crafting whimsical 3D toys and games that bring smiles to users worldwide.
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
