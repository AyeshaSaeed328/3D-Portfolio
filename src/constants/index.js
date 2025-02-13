import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    hudukaan,
    sharetrack,
    foodordering,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Management",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
 
 
  
  const projects = [
    {
      name: "HU Dukaan",
      description:
      "Developed an e-commerce platform supporting product listing, ordering, and payment processing, with backend functionality for authentication, product management, and order processing",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MERN",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hudukaan,
      source_code_link: "https://github.com/AyeshaSaeed328/HUDukaan",
    },
    {
      name: "ShareTrack",
      description:
      "Currently developing ShareTrack, a mobile app for peer-to-peer (P2P) lending, item rentals, and expense tracking. ",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "PostgresQL",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: sharetrack,
      source_code_link: "https://github.com/",
    },
    {
      name: "Food Ordering App",
      description:
      "Designed a front-end application for a food ordering service, with features for browsing restaurants, viewing menus, and placing orders.",	
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: foodordering,
      source_code_link: "https://github.com/AyeshaSaeed328/FoodOrderingApp-React",
    },
  ];
  
  export { services, technologies, projects };