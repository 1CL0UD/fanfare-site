/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { PrismaClient } from '@prisma/client';

export const getUserWithProjects = async () => {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.user.findMany({
      include: { projects: true },
    });

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
