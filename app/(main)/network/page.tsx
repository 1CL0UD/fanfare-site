'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UserCircle } from 'lucide-react';
import Sidebar from '@/components/sidebar';

export default function CommunityShowcase() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(
    null
  );
  const [sortBy, setSortBy] = useState<'name' | 'projectCount'>('name');

  const filteredUsers = selectedOccupation
    ? users.filter((user) => user.occupation === selectedOccupation)
    : users;

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b.projects.length - a.projects.length;
    }
  });

  const occupations = Array.from(new Set(users.map((user) => user.occupation)));

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <Sidebar
        occupations={occupations}
        selectedOccupation={selectedOccupation}
        setSelectedOccupation={setSelectedOccupation}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <main className="flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
          Get To Know Them!
        </h1>
        <div className="space-y-6">
          {sortedUsers.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
}

interface Project {
  name: string;
  thumbnailUrl: string;
}

interface User {
  id: string;
  name: string;
  avatarUrl: string;
  occupation: string;
  projects: Project[];
}

function UserRow({ user }: { user: User }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>
              <UserCircle className="h-8 w-8" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.occupation}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {user.projects.slice(0, 3).map((project, index) => (
              <ProjectThumbnail key={index} project={project} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <div className="relative group">
      <img
        src={project.thumbnailUrl}
        alt={project.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Badge variant="secondary" className="text-xs">
          {project.name}
        </Badge>
      </div>
    </div>
  );
}

const initialUsers = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatarUrl: '/placeholder.svg?height=200&width=200',
    occupation: 'Full-stack Developer',
    projects: [
      {
        name: 'E-commerce Platform',
        thumbnailUrl: '/assets/gallery/gallery-6.jpeg',
      },
      {
        name: 'Task Management App',
        thumbnailUrl: '/assets/gallery/gallery-7.jpeg',
      },
      {
        name: 'Social Media Dashboard',
        thumbnailUrl: '/assets/gallery/gallery-8.jpeg',
      },
    ],
  },
  {
    id: '2',
    name: 'Bob Smith',
    avatarUrl: '/placeholder.svg?height=200&width=200',
    occupation: 'UI/UX Designer',
    projects: [
      {
        name: 'Travel App Design',
        thumbnailUrl: '/assets/gallery/gallery-9.jpeg',
      },
      {
        name: 'Fitness Tracker UI',
        thumbnailUrl: '/assets/gallery/gallery-10.jpeg',
      },
      {
        name: 'E-learning Platform',
        thumbnailUrl: '/assets/gallery/gallery-11.jpeg',
      },
    ],
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatarUrl: '/placeholder.svg?height=200&width=200',
    occupation: 'Machine Learning Engineer',
    projects: [
      {
        name: 'Sentiment Analysis Tool',
        thumbnailUrl: '/assets/gallery/gallery-12.jpeg',
      },
      {
        name: 'Chatbot Framework',
        thumbnailUrl: '/assets/gallery/gallery-13.jpeg',
      },
    ],
  },
  {
    id: '4',
    name: 'Diana Martinez',
    avatarUrl: '/placeholder.svg?height=200&width=200',
    occupation: 'Mobile App Developer',
    projects: [
      {
        name: 'Food Delivery App',
        thumbnailUrl: '/assets/gallery/gallery-14.jpeg',
      },
      {
        name: 'Meditation Timer',
        thumbnailUrl: '/assets/gallery/gallery-15.jpeg',
      },
      {
        name: 'Language Learning Game',
        thumbnailUrl: '/assets/gallery/gallery-16.jpeg',
      },
    ],
  },
  {
    id: '5',
    name: 'Ethan Williams',
    avatarUrl: '/placeholder.svg?height=200&width=200',
    occupation: 'Data Scientist',
    projects: [
      {
        name: 'Predictive Analytics Dashboard',
        thumbnailUrl: '/assets/gallery/gallery-17.jpeg',
      },
      {
        name: 'Customer Segmentation Model',
        thumbnailUrl: '/assets/gallery/gallery-18.jpeg',
      },
    ],
  },
  {
    id: '6',
    name: 'Fiona Chen',
    avatarUrl: '/placeholder.svg?height=200&width=200',
    occupation: 'Full-stack Developer',
    projects: [
      {
        name: 'Real-time Collaboration Tool',
        thumbnailUrl: '/assets/gallery/gallery-19.jpeg',
      },
      {
        name: 'Inventory Management System',
        thumbnailUrl: '/assets/gallery/gallery-20.jpeg',
      },
      {
        name: 'Online Booking Platform',
        thumbnailUrl: '/assets/gallery/gallery-21.jpeg',
      },
    ],
  },
];
