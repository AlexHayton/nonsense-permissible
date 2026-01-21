import { Card } from './ui/card';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCallback } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  featured: boolean;
}

export default function FeaturedWork() {
  const projects: Project[] = [
    {
      title: 'ValleyDAO Phlo',
      category: 'AI Agent Development',
      description:
        'Connect with other researchers and founders in Climate Tech. Take a research idea, get funded, and turn it into a business.',
      image: '/phlo/phlo.jpg',
      link: 'https://phlo.valleydao.bio',
      featured: true,
    },
    {
      title: 'Quest Alarm Clock',
      category: 'XR utility app',
      description:
        'Always getting lost in your quest? Quest Alarm Clock is here to help.',
      image: '/quest-alarm-clock/quest-alarm-clock.png',
      link: '#',
      featured: false,
    },
    {
      title: 'Video Dice',
      category: 'Fun',
      description:
        'Navigate through beautifully crafted 3D puzzle environments.',
      image: '/video-dice/square.png',
      link: '#',
      featured: false,
    },
    {
      title: 'Emopuz',
      category: 'Web/Mobile App',
      description:
        'Emopuz is officially live!\n\nCrack the code and guess the hidden phrase in this new logic word game.\n\n🥑 + 🏏 = ? Decode the daily message',
      image: '/emopuz/feature.png',
      link: 'https://play.google.com/store/apps/details?id=com.alexnonsensepermissible.emojisolver',
      featured: false,
    },
  ];

  const navigateToProject = useCallback((project: Project) => {
    window.open(project.link, '_blank');
  }, []);

  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl lg:text-6xl mb-4">Featured Work</h2>
            <p className="text-xl text-black/70 max-w-2xl">
              A selection of our favourite projects
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${
                project.featured && index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <Card className="group overflow-hidden border-2 border-black hover:shadow-xl transition-all duration-300 h-full">
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? 'aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="text-sm mb-2 text-black/60">
                    {project.category}
                  </div>
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-black/70 mb-4">{project.description}</p>
                  <div className="inline-flex items-center gap-2 group-hover:gap-3 transition-all text-black font-medium">
                    View Project
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
