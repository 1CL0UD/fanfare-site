import { User, Project } from '@prisma/client';

interface ServerMetadata {
  onboarded: boolean;
}

type UsersWithProjects = User & { projects: Project[] };
