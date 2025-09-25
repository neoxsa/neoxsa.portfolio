import nguyen_p1 from '/projectImages/nguyen_p1.png'
import ud_p2 from '/projectImages/ud_p2.png'
import notion_landing_page from '/projectImages/notion_landing_page.webp'


const all_projects = [
  {
    id: 1,
    title: 'Nguyen E-Commerce App',
    description: 'A sleek e-commerce project featuring user login, cart management, and a fully responsive design.',
    image: nguyen_p1,
    tech_stack: ['React', 'Tailwind CSS', 'React Router', 'Redux Toolkit', 'React Form Hook', 'AppWrite'],
    category: 'Frontend',
    liveLink: 'https://ecommerce-web-app1.vercel.app/',
    repoLink: 'https://github.com/neoxsa/ecommerce-Web-App1'
  },
  {
    id: 2,
    title: 'User Dashboard',
    description: 'A dynamic User dashboard interface with CRUD features, modals, and Redux Toolkit — built with Vite for speed.',
    image: ud_p2,
    tech_stack: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Vite'],
    category: 'Frontend',
    liveLink: 'https://user-dashboard1-mauve.vercel.app/',
    repoLink: 'https://github.com/neoxsa/user-dashboard1'
  },
  {
    id: 3,
    title: 'Notion Landing Page (Clone)',
    description: 'This project is a frontend practice clone of the Notion landing page, built using HTML, CSS, and JavaScript.',
    image: notion_landing_page,
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    liveLink: 'https://landing-page-practice-notion.vercel.app/',
    repoLink: 'https://github.com/neoxsa/landing-page-clone-notion'
  },
  // {
  //   id: 4,
  //   title: 'Social Media App',
  //   description: 'A social networking platform with real-time messaging, user profiles, and feed functionality.',
  //   image: 'https://via.placeholder.com/400x250?text=Social+Media',
  //   tech_stack: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
  //   category: 'Full-Stack',
  //   liveLink: 'https://example-social.com',
  //   repoLink: 'https://github.com/neoxsa/social-app'
  // },
  // {
  //   id: 5,
  //   title: 'AI Chat Bot',
  //   description: 'An intelligent chatbot powered by machine learning, with natural language processing and context awareness.',
  //   image: 'https://via.placeholder.com/400x250?text=AI+ChatBot',
  //   tech_stack: ['Python', 'React', 'TensorFlow', 'Node.js'],
  //   category: 'Full-Stack',
  //   liveLink: 'https://example-chatbot.com',
  //   repoLink: 'https://github.com/neoxsa/chatbot'
  // },
  // {
  //   id: 6,
  //   title: 'Portfolio Website',
  //   description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience.',
  //   image: 'https://via.placeholder.com/400x250?text=Portfolio',
  //   tech_stack: ['React', 'Tailwind CSS', 'Vite'],
  //   category: 'Frontend',
  //   liveLink: 'https://example-portfolio.com',
  //   repoLink: 'https://github.com/neoxsa/portfolio'
  // }
]

export { all_projects };

