import { Card } from './ui/card';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function FeaturedWork() {
  const projects = [
    {
      title: 'Toy Factory Tycoon',
      category: '3D Mobile Game',
      description: 'Build and manage your own virtual toy factory in this addictive simulation game.',
      image: 'https://images.unsplash.com/photo-1641563817292-d2085b953e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHRveSUyMHJlbmRlcnxlbnwxfHx8fDE3NTk1ODMyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
    },
    {
      title: 'Puzzle Worlds',
      category: '3D Puzzle Game',
      description: 'Navigate through beautifully crafted 3D puzzle environments.',
      image: 'https://images.unsplash.com/photo-1640187128454-1d7c462ede26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vYmlsZSUyMGdhbWV8ZW58MXx8fHwxNzU5NTgzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
    },
    {
      title: 'Character Creator',
      category: 'Creative App',
      description: 'Design and customize your own 3D characters with endless possibilities.',
      image: 'https://images.unsplash.com/photo-1732613942657-61684c51eb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMGRlc2lnbnxlbnwxfHx8fDE3NTk1NTU1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
    },
    {
      title: 'Racing Rush',
      category: 'Action Game',
      description: 'Fast-paced mobile racing with stunning 3D graphics and intuitive controls.',
      image: 'https://images.unsplash.com/photo-1639996675962-59c2befdfbf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1pbmclMjBhcHB8ZW58MXx8fHwxNzU5NTgzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
    },
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl lg:text-6xl mb-4">Featured Work</h2>
            <p className="text-xl text-black/70 max-w-2xl">
              A selection of our favorite projects that showcase our passion for 3D design and mobile gaming.
            </p>
          </div>
          <button className="flex items-center gap-2 border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
            View All Projects
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-2 border-black hover:shadow-xl transition-all duration-300 ${
                project.featured && index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="text-sm mb-2 text-black/60">{project.category}</div>
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-black/70 mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Project
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
