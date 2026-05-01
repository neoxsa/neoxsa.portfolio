import profile_pic from '/profilePic/profile_pic.webp'
import nguyen_p1 from '/projectImages/nguyen_p1.webp'
import ud_p2 from '/projectImages/ud_p2.webp'
import lume_p3 from '/projectImages/lume_p3.webp'
import bjmm_p0 from '/projectImages/bjmm_p0.webp'
import notion_landing_page from '/projectImages/notion_landing_page.webp'


const profile = {
  name: "Sadab Anwar",
  picture: profile_pic,
  role: "Frontend Developer"
}

const contact = {
  email: "sadabanwar@outlook.com",
  address: "New Delhi, India"
}
const socialUrl = {
  github: "https://github.com/neoxsa",
  linkedIn: "https://linkedin.com/in/neoxsa",

}

const skills = {
  frontend: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'],
  tools: ['Git', 'GitHub', 'VS Code', 'Canva', 'Inkscape']
}


const all_projects = [
  {
    id: 1,
    category: ["Featured", "Live Projects"],
    title: "BJMM Official Website (AIIMS New Delhi)",
    description: "A modern web platform for Bihar Jharkhand Mitra Mandal to showcase events, gallery and videos with a responsive and SEO-optimized interface.",
    image: bjmm_p0,
    tech_stack: ["React", "Vite", "Tailwind CSS", "React Router"],
    type: "Frontend",
    liveLink: "https://bjmmofficial.in",
    repoLink: null,
    note: "Private codebase"
  },
  {
    id: 2,
    category: "Featured",
    title: "Nguyen E-Commerce App",
    description: "A sleek e-commerce project featuring user login, cart management, and a fully responsive design.",
    image: nguyen_p1,
    tech_stack: ["React", "Tailwind CSS", "React Router", "Redux Toolkit", "React Form Hook", "AppWrite"],
    type: "Frontend",
    liveLink: "https://ecommerce-web-app1.vercel.app/",
    repoLink: "https://github.com/neoxsa/ecommerce-Web-App1"
  },
  {
    id: 3,
    category: "Featured",
    title: "User Dashboard",
    description: "A dynamic User dashboard interface with CRUD features, modals, and Redux Toolkit — built with Vite for speed.",
    image: ud_p2,
    tech_stack: ["React", "Tailwind CSS", "Redux Toolkit", "Vite"],
    type: "Frontend",
    liveLink: "https://user-dashboard1-mauve.vercel.app/",
    repoLink: "https://github.com/neoxsa/user-dashboard1"
  },
  {
    id: 4,
    category: "Personal",
    title: "LUME — Movie Platform",
    description: "A movie discovery and browsing platform built with React, Vite, Tailwind CSS, and Redux Toolkit.",
    image: lume_p3,
    tech_stack: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "React Router", "Swiper", "Lucide React"],
    type: "Frontend",
    liveLink: "https://lume-movie-str.vercel.app/",
    repoLink: "https://github.com/neoxsa/LUME-Movie-Str"
  },
  {
    id: 5,
    category: "Personal",
    title: "Notion Landing Page (Clone)",
    description: "This project is a frontend practice clone of the Notion landing page, built using HTML, CSS, and JavaScript.",
    image: notion_landing_page,
    tech_stack: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    liveLink: "https://landing-page-practice-notion.vercel.app/",
    repoLink: "https://github.com/neoxsa/landing-page-clone-notion"
  },
]

const intro = {
  heroIntro: "I create modern web interfaces with React. I like keeping things simple, clear, and user-friendly.Every project is about improving the experience.",
  aboutIntro: "I'm a passionate frontend developer focused on building clean, responsive, and user-friendly web applications. With hands-on experience in React, I love turning ideas into functional interfaces."
}

const aboutPara = {
  p1: "I'm an aspiring developer currently building projects to sharpen my skills and explore modern web technologies. I enjoy crafting smooth, responsive UI and improving with every project.",
  p2: "I believe in continuous learning and pushing myself to understand the “why” behind the code.",
  p3: "Always open to new opportunities and collaborations—feel free to reach out so we can build something meaningful together."
}

export { profile, contact, socialUrl, skills, all_projects, intro, aboutPara };

