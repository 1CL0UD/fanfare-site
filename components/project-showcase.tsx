import { normalizeTags } from '@/lib/utils';
import { Project } from '@prisma/client';
import Image from 'next/image';

interface Props {
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const tags = project.tags;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
      <Image
        src={project.thumbnailUrl ? project.thumbnailUrl : ''}
        alt={project.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded capitalize"
            >
              {normalizeTags(tag)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = ({ projects }: Props) => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
