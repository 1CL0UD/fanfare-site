import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
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
    },
    {
      name: 'Bob Williams',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'Mobile App Developer',
      bio: 'Specialized in creating native iOS and Android applications. I thrive on delivering seamless user experiences and pushing the boundaries of mobile technology.',
      location: 'New York, NY',
      socialLinks: {
        github: 'https://github.com/bobwilliams',
        twitter: 'https://twitter.com/bob_w',
        linkedin: 'https://linkedin.com/in/bobwilliams',
      },
      projects: [
        {
          name: 'Fitness Tracker App',
          description:
            'A mobile application that tracks fitness progress and provides personalized workout plans.',
          thumbnailUrl: '/assets/gallery/gallery-9.jpeg',
        },
        {
          name: 'Language Learning App',
          description:
            'An interactive language learning application with gamified lessons.',
          thumbnailUrl: '/assets/gallery/gallery-10.jpeg',
        },
        {
          name: 'Travel Guide App',
          description:
            'A mobile app offering curated travel guides and itinerary planning.',
          thumbnailUrl: '/assets/gallery/gallery-11.jpeg',
        },
      ],
    },
    {
      name: 'Charlie Brown',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'Data Scientist',
      bio: "Expert in data analysis, machine learning, and statistical modeling. I'm passionate about extracting insights from data and developing predictive models.",
      location: 'Seattle, WA',
      socialLinks: {
        github: 'https://github.com/charliebrown',
        twitter: 'https://twitter.com/charlie_b',
        linkedin: 'https://linkedin.com/in/charliebrown',
      },
      projects: [
        {
          name: 'Customer Churn Prediction',
          description:
            'A machine learning model to predict customer churn for a subscription service.',
          thumbnailUrl: '/assets/gallery/gallery-12.jpeg',
        },
        {
          name: 'Sentiment Analysis Tool',
          description:
            'A natural language processing tool to analyze the sentiment of social media posts.',
          thumbnailUrl: '/assets/gallery/gallery-13.jpeg',
        },
        {
          name: 'Sales Forecasting Model',
          description:
            'A time-series forecasting model to predict future sales based on historical data.',
          thumbnailUrl: '/assets/gallery/gallery-14.jpeg',
        },
      ],
    },
    {
      name: 'Diana Davis',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'UI/UX Designer',
      bio: "Focused on creating user-centered designs with a strong emphasis on usability and aesthetics. I'm passionate about crafting intuitive interfaces that enhance user experience.",
      location: 'Austin, TX',
      socialLinks: {
        github: 'https://github.com/dianadavis',
        twitter: 'https://twitter.com/diana_d',
        linkedin: 'https://linkedin.com/in/dianadavis',
      },
      projects: [
        {
          name: 'Redesigned Mobile Banking App',
          description:
            'A user interface overhaul for a mobile banking application, focusing on accessibility and ease of use.',
          thumbnailUrl: '/assets/gallery/gallery-1.jpeg',
        },
        {
          name: 'E-learning Platform UI',
          description:
            "A redesign of an e-learning platform's user interface with a focus on engaging learners.",
          thumbnailUrl: '/assets/gallery/gallery-2.jpeg',
        },
        {
          name: 'Personal Website Redesign',
          description:
            'A complete visual and functional revamp of a personal portfolio website.',
          thumbnailUrl: '/assets/gallery/gallery-3.jpeg',
        },
      ],
    },
    {
      name: 'Ethan Green',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'Front-end Developer',
      bio: 'Experienced in building responsive and interactive front-end interfaces using modern web technologies. I love translating design mockups into clean and efficient code.',
      location: 'Los Angeles, CA',
      socialLinks: {
        github: 'https://github.com/ethangreen',
        twitter: 'https://twitter.com/ethan_g',
        linkedin: 'https://linkedin.com/in/ethangreen',
      },
      projects: [
        {
          name: 'Portfolio Website',
          description:
            'A showcase of my projects using modern JavaScript frameworks.',
          thumbnailUrl: '/assets/gallery/gallery-4.jpeg',
        },
        {
          name: 'Interactive Data Visualization',
          description:
            'A dashboard with interactive charts to visualize data sets.',
          thumbnailUrl: '/assets/gallery/gallery-5.jpeg',
        },
        {
          name: 'Landing Page Redesign',
          description:
            'A visually appealing and responsive landing page for a SaaS product.',
          thumbnailUrl: '/assets/gallery/gallery-6.jpeg',
        },
      ],
    },
    {
      name: 'Fiona Hall',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'Back-end Developer',
      bio: "Specializing in creating robust and scalable back-end systems. I'm passionate about writing efficient server-side code and building secure APIs.",
      location: 'Chicago, IL',
      socialLinks: {
        github: 'https://github.com/fionahall',
        twitter: 'https://twitter.com/fiona_h',
        linkedin: 'https://linkedin.com/in/fionahall',
      },
      projects: [
        {
          name: 'REST API for a Blog',
          description:
            'A comprehensive RESTful API with user authentication and CRUD operations.',
          thumbnailUrl: '/assets/gallery/gallery-7.jpeg',
        },
        {
          name: 'Data Migration Tool',
          description:
            'A tool to efficiently migrate large datasets between databases.',
          thumbnailUrl: '/assets/gallery/gallery-8.jpeg',
        },
        {
          name: 'Real-time Chat Server',
          description: 'A WebSocket-based chat server for real-time messaging.',
          thumbnailUrl: '/assets/gallery/gallery-9.jpeg',
        },
      ],
    },
    {
      name: 'George Ito',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'DevOps Engineer',
      bio: 'Experienced in automating infrastructure and deployment processes. I focus on enhancing system reliability and optimizing performance using the latest tools and techniques.',
      location: 'Boston, MA',
      socialLinks: {
        github: 'https://github.com/georgeito',
        twitter: 'https://twitter.com/george_i',
        linkedin: 'https://linkedin.com/in/georgeito',
      },
      projects: [
        {
          name: 'CI/CD Pipeline Setup',
          description:
            'An automated CI/CD pipeline using Docker and Kubernetes for a microservices architecture.',
          thumbnailUrl: '/assets/gallery/gallery-10.jpeg',
        },
        {
          name: 'Infrastructure as Code',
          description:
            'Implementation of infrastructure as code using Terraform for multiple cloud providers.',
          thumbnailUrl: '/assets/gallery/gallery-11.jpeg',
        },
        {
          name: 'Monitoring and Logging System',
          description:
            'A centralized monitoring and logging system using Prometheus and Grafana.',
          thumbnailUrl: '/assets/gallery/gallery-12.jpeg',
        },
      ],
    },
    {
      name: 'Hannah Kim',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'Product Manager',
      bio: 'Experienced in guiding product vision and strategy from concept to launch. I am passionate about understanding user needs and translating them into product features.',
      location: 'Denver, CO',
      socialLinks: {
        github: 'https://github.com/hannahkim',
        twitter: 'https://twitter.com/hannah_k',
        linkedin: 'https://linkedin.com/in/hannahkim',
      },
      projects: [
        {
          name: 'Launched Mobile App Feature',
          description:
            'Led the product development and launch of a major new feature for a mobile application.',
          thumbnailUrl: '/assets/gallery/gallery-13.jpeg',
        },
        {
          name: 'Website Redesign Project',
          description:
            'Managed a complete website redesign project resulting in improved user engagement.',
          thumbnailUrl: '/assets/gallery/gallery-14.jpeg',
        },
        {
          name: 'New Product Strategy',
          description:
            'Developed the product strategy for a new SaaS platform, including market research and competitive analysis.',
          thumbnailUrl: '/assets/gallery/gallery-1.jpeg',
        },
      ],
    },
    {
      name: 'Ian Lee',
      avatarUrl: '/placeholder.svg?height=200&width=200',
      occupation: 'Software Architect',
      bio: 'Experienced in designing and developing large-scale software systems. I focus on creating robust, scalable, and maintainable architectures that meet business requirements.',
      location: 'Miami, FL',
      socialLinks: {
        github: 'https://github.com/ianlee',
        twitter: 'https://twitter.com/ian_l',
        linkedin: 'https://linkedin.com/in/ianlee',
      },
      projects: [
        {
          name: 'Microservices Architecture Design',
          description:
            'Designed a microservices architecture for a large-scale e-commerce platform.',
          thumbnailUrl: '/assets/gallery/gallery-2.jpeg',
        },
        {
          name: 'Database Migration Strategy',
          description:
            'Developed a strategy for migrating a monolithic database to a distributed system.',
          thumbnailUrl: '/assets/gallery/gallery-3.jpeg',
        },
        {
          name: 'System Performance Optimization',
          description:
            'Led a team to optimize the performance of a high-traffic web application.',
          thumbnailUrl: '/assets/gallery/gallery-4.jpeg',
        },
      ],
    },
  ];

  for (const userData of users) {
    const { projects, ...user } = userData;

    await prisma.user.create({
      data: {
        ...user,
        socialLinks: user.socialLinks,
        projects: {
          create: projects.map((project) => ({
            ...project,
          })),
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
