// 1
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

// 2
const prisma = new PrismaClient().$extends(withAccelerate());

// 3
async function main() {
  const aliceJohnsonData = {
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
    projects: {
      createMany: {
        data: [
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
      },
    },
  };

  try {
    // Insert Alice Johnson's data into the database
    const user = await prisma.user.create({
      data: aliceJohnsonData,
    });

    console.log('User created successfully:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// 4
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    // 5
    await prisma.$disconnect();
    process.exit(1);
  });
