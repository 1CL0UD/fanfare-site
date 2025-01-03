import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin } from 'lucide-react';

const userData = {
  id: '1',
  name: 'Alice Johnson',
  avatarUrl: '/placeholder.svg?height=200&width=200',
  occupation: 'Full-stack Developer',
  bio: 'Passionate about creating intuitive and scalable web applications. With 5+ years of experience in both front-end and back-end development, I love tackling complex problems and turning ideas into reality.',
  location: 'San Francisco, CA',
  socialLinks: {
    github: 'https://github.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://linkedin.com/in/',
  },
  projects: [
    {
      name: 'E-commerce Platform',
      description:
        'A fully responsive online store with real-time inventory management.',
      thumbnailUrl: '/assets/gallery/gallery-6.jpeg',
    },
    {
      name: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates.',
      thumbnailUrl: '/assets/gallery/gallery-7.jpeg',
    },
    {
      name: 'Social Media Dashboard',
      description:
        'Centralized dashboard for managing multiple social media accounts.',
      thumbnailUrl: '/assets/gallery/gallery-8.jpeg',
    },
  ],
};

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <Avatar className="mx-auto mb-4 h-32 w-32 border-4 border-white shadow-lg">
            <AvatarImage src={userData.avatarUrl} alt={userData.name} />
            <AvatarFallback>
              {userData.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
            {userData.name}
          </h1>
          <p className="mb-2 text-xl text-gray-600 dark:text-gray-300">
            {userData.occupation}
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            {userData.location}
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href={userData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href={userData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </header>

        {/* Bio Section */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{userData.bio}</p>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {userData.projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
