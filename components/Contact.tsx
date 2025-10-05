import { Mail, Twitter, Dribbble, Github } from 'lucide-react';
import { Button } from './ui/button';

export default function Contact() {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Dribbble, label: 'Dribbble', href: '#' },
    { icon: Github, label: 'Github', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl mb-6">
                Let's create something extraordinary together.
              </h2>
              <p className="text-xl text-white/70">
                Have a project in mind? We'd love to hear about it. Whether it's a whimsical toy app or an engaging 3D game, let's make it happen.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 gap-2 w-full sm:w-auto"
              >
                <Mail size={20} />
                hello@nonsensepermissible.com
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-5xl lg:text-7xl">50+</div>
              <div className="text-white/70">Apps Launched</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-7xl">2M+</div>
              <div className="text-white/70">Downloads</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-7xl">4.8</div>
              <div className="text-white/70">Avg Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-7xl">12</div>
              <div className="text-white/70">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
