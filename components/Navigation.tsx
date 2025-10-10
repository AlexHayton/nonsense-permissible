import { Menu, X } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Button } from './ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigateToContact = useCallback(() => {
    window.location.href = '#contact';
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img
              src={'/nonsense.png'}
              alt="Nonsense Permissible"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-black/60 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-black text-white hover:bg-black/80"
              onClick={navigateToContact}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/10">
            <div className="flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-black/60 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-black text-white hover:bg-black/80 w-full">
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
