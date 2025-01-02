import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Art Generator',
    description: 'Create stunning artwork using advanced AI algorithms.',
    image: '/assets/projects/project-1.jpg',
    tags: ['AI', 'Art'],
  },
  {
    id: 2,
    title: 'Eco-Friendly Startup',
    description: 'Revolutionizing sustainable living with innovative products.',
    image: '/assets/projects/project-2.jpg',
    tags: ['Startup', 'Eco-Friendly'],
  },
  {
    id: 3,
    title: 'Virtual Reality Experience',
    description: 'Immersive VR worlds for education and entertainment.',
    image: '/assets/projects/project-3.jpg',
    tags: ['VR', 'Technology'],
  },
];

const ProjectCard = ({
  project,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
    <Image
      src={project.image}
      alt={project.title}
      width={400}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectShowcase = () => {
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
