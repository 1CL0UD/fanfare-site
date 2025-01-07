'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UserCircle } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import { Project } from '@prisma/client';
import { getUserWithProjects } from '@/lib/actions/user.actions';
import { UsersWithProjects } from '@/lib/types';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

export default function CommunityShowcase() {
  useEffect(() => {
    const fetch = async () => {
      const data = await getUserWithProjects();
      setUsers(data);
    };
    try {
      fetch();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);
  const [users, setUsers] = useState<UsersWithProjects[]>();
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(
    null
  );
  const [sortBy, setSortBy] = useState<'name' | 'projectCount'>('name');

  const filteredUsers = selectedOccupation
    ? users?.filter((user) => user.occupation === selectedOccupation) || []
    : users || [];

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b.projects.length - a.projects.length;
    }
  });

  const occupations = Array.from(
    new Set(users?.map((user) => user.occupation))
  );

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
          {!users ? (
            <>
              {[...Array(3)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Skeleton className="h-16 w-16 rounded-full" />
                      <div className="flex-grow">
                        <Skeleton className="h-6 w-48 mb-2" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Skeleton className="h-6 w-24 mb-2" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(3)].map((_, index) => (
                          <Skeleton
                            key={index}
                            className="h-36 w-full rounded"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          ) : (
            <>
              {sortedUsers.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function UserRow({ user }: { user: UsersWithProjects }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={user.avatarUrl ? user.avatarUrl : ''}
              alt={user.name}
            />
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
      <div className="relative w-full h-32">
        <Image
          src={project.thumbnailUrl || ''}
          alt={project.name}
          fill
          style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
          className="rounded-md"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Badge variant="secondary" className="text-xs">
          {project.name}
        </Badge>
      </div>
    </div>
  );
}
