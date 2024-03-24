// useProyectos.js
import { useState } from 'react';


import teslaimg from '../../public/teslaimg.avif'
import gastosimg from '../../public/gastos.avif'
import reservas from '../../public/reservas.avif'
import udemy from '../../public/udemy.avif'
import spotify from '../../public/spotifyimg.avif'
import nike from '../../public/nike.avif'
import mindscape from '../../public/mindscape.avif'

import reactsvg from '../../public/react.svg'
import tailwindsvg from '../../public/tailwind.svg'
import nextsvg from '../../public/next.svg'
import strapisvg from '../../public/strapi.svg'
import astrosvg from '../../public/astro.svg'
import githubsvg from '../../public/github.svg'
import prismasvg from '../../public/prisma.svg'
import vitesvg from '../../public/vite.svg'
import bootstrapsvg from '../../public/bootstrap.svg'
import sasssvg from '../../public/sass.svg'
import csssvg from '../../public/css.svg'
import typescriptsvg from '../../public/typescript.svg'

const useProyectos = () => {
  const [proyectos, setProyectos] = useState([
    {
      title: 'Web reservas TMS-EATS',
      link: 'https://reservas-tms.netlify.app/',
      githubLink: 'https://github.com/Tomass97/reservastms',
      image: reservas,
      technologies: [reactsvg, vitesvg, tailwindsvg],
      shadowColor: 'shadow-green-600',
      buttonColor: 'bg-green-600',
      titleColor:   'text-green-600'
    },
    {
      title: 'MindScapeIA landing page',
      link: 'https://mindscape-ia.netlify.app/',
      githubLink: 'https://github.com/Tomass97/Mindscape-ia',
      image: mindscape,
      technologies: [csssvg, tailwindsvg],
      shadowColor: 'shadow-violet-500',
      buttonColor: 'bg-violet-500',
      titleColor:   'text-violet-500'
    },
    {
      title: 'Spotify Clon',
      link: 'https://spotify-clon-gamma.vercel.app/',
      githubLink: 'https://github.com/Tomass97/spotify-clon',
      image: spotify,
      technologies: [astrosvg, tailwindsvg, reactsvg, typescriptsvg],
      shadowColor: 'shadow-green-600',
      buttonColor: 'bg-green-600',
      titleColor:   'text-green-600'
    },
    {
      title: 'Tesla landing page',
      link: 'https://tesla-landing-tomas.netlify.app',
      githubLink: 'https://github.com/Tomass97/Tesla-Principal',
      image: teslaimg,
      technologies: [csssvg, astrosvg, tailwindsvg],
      shadowColor: 'shadow-slate-900',
      buttonColor: 'bg-slate-900',
      titleColor:   'text-slate-900'
    },
    {
      title: 'Controlador de gastos',
      link: 'https://control-gastos-rt.netlify.app/',
      githubLink: 'https://github.com/Tomass97/Control-Gastos-React',
      image: gastosimg,
      technologies: [reactsvg, csssvg, vitesvg],
      shadowColor: 'shadow-blue-500',
      buttonColor: 'bg-blue-500',
      titleColor:   'text-blue-500'
    },
    {
      title: 'Nike landing page',
      link: 'https://nike-store-es.netlify.app/',
      githubLink: 'https://github.com/Tomass97/Maquetacion-Nike',
      image: nike,
      technologies: [csssvg, tailwindsvg],
      shadowColor: 'shadow-slate-500',
      buttonColor: 'bg-slate-900',
      titleColor:   'text-slate-900'
    },
    {
      title: 'Udemy landing page',
      link: 'https://udemy-tms.netlify.app/',
      githubLink: 'https://github.com/Tomass97/landing-udemy',
      image: udemy,
      technologies: [csssvg, bootstrapsvg, sasssvg],
      shadowColor: 'shadow-purple-500',
      buttonColor: 'bg-purple-500',
      titleColor:   'text-purple-500'
    },
  ]);


  return proyectos
};

export default useProyectos;
