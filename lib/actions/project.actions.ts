/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { PrismaClient } from '@prisma/client';

export const getFeaturedProjects = async () => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.project.findMany({ take: 3 });

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
