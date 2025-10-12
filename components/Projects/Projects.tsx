import React from 'react';
import Heading from '../Heading';
import ProjectCard from './ProjectCard';

export type Project = {
  img: {
    url: string;
  };
  link: {
    url: string;
    github: string;
  };
  title: string;
};

const projects: Project[] = [
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/226bd317d601d3722fe4dc79fe9e4f4a0b01f3be-1487x961.png',
    },
    link: {
      url: 'https://lawgrid.vercel.app/',
      github: 'https://github.com/sickerman/Lawgrid',
    },
    title: 'Lawgrid Ng Marketing site',
  },
  {
    img: {
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    },
    link: {
      url: 'https://medium.com/@obrayecom',
      github: '',
    },
    title: 'Medium Blog - Accessibility & Tech',
  },
  {
    img: {
      url: 'https://personalweb-mocha.vercel.app/static/media/Project-dashboard.baa3dcb1f90c35bd8d89.png',
    },
    link: {
      url: 'https://dashboad-kohl.vercel.app/',
      github: 'https://github.com/bryan-temple/dashboad',
    },
    title: 'Dashboard UI Application',
  },
  {
    img: {
      url: 'https://personalweb-mocha.vercel.app/static/media/project55.4abec7c3bb7cc6079808.png',
    },
    link: {
      url: 'https://weezkitchen.vercel.app/',
      github: 'https://github.com/bryan-temple/weezkitchen',
    },
    title: 'WeezKitchen website',
  },
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/c505a86032cc0d6cba37f216b6827f6249dd3390-1316x977.png',
    },
    link: {
      url: 'https://personalweb-mocha.vercel.app/',
      github: 'https://github.com/sickerman/Projectxyz',
    },
    title: 'Portfolio V2',
  },
];

const Projects = () => {
  return (
    <div className='text-[#D0CFCF] mb-24'>
      <Heading title={'Projects'} level="h2" />
      <div className='text-center grid gap-8 sm:grid-cols-2 md:grid-cols-2 w-full mx-auto justify-center'>
        {projects.map((prj, idx) => (
          <ProjectCard key={idx} project={prj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
