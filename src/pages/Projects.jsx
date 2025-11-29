import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

function Projects() {
    const [filter, setFilter] = useState('All')

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce application with product listings, shopping cart, and secure payment integration.',
            image: 'https://via.placeholder.com/400x250?text=E-Commerce+App',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Full-Stack',
            liveLink: 'https://example-ecommerce.com',
            repoLink: 'https://github.com/neoxsa/ecommerce'
        },
        {
            id: 2,
            title: 'Task Management Dashboard',
            description: 'A responsive dashboard for managing tasks with real-time updates, user authentication, and data visualization.',
            image: 'https://via.placeholder.com/400x250?text=Task+Dashboard',
            tags: ['React', 'Tailwind CSS', 'Firebase', 'Chart.js'],
            category: 'Frontend',
            liveLink: 'https://example-dashboard.com',
            repoLink: 'https://github.com/neoxsa/dashboard'
        },
        {
            id: 3,
            title: 'Social Media App',
            description: 'A social networking platform with real-time messaging, user profiles, and feed functionality.',
            image: 'https://via.placeholder.com/400x250?text=Social+Media',
            tags: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
            category: 'Full-Stack',
            liveLink: 'https://example-social.com',
            repoLink: 'https://github.com/neoxsa/social-app'
        },
        {
            id: 4,
            title: 'Weather App',
            description: 'A real-time weather application with location-based forecasts, beautiful UI, and weather alerts.',
            image: 'https://via.placeholder.com/400x250?text=Weather+App',
            tags: ['React', 'OpenWeather API', 'Tailwind CSS'],
            category: 'Frontend',
            liveLink: 'https://example-weather.com',
            repoLink: 'https://github.com/neoxsa/weather-app'
        },
        {
            id: 5,
            title: 'AI Chat Bot',
            description: 'An intelligent chatbot powered by machine learning, with natural language processing and context awareness.',
            image: 'https://via.placeholder.com/400x250?text=AI+ChatBot',
            tags: ['Python', 'React', 'TensorFlow', 'Node.js'],
            category: 'Full-Stack',
            liveLink: 'https://example-chatbot.com',
            repoLink: 'https://github.com/neoxsa/chatbot'
        },
        {
            id: 6,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience.',
            image: 'https://via.placeholder.com/400x250?text=Portfolio',
            tags: ['React', 'Tailwind CSS', 'Vite'],
            category: 'Frontend',
            liveLink: 'https://example-portfolio.com',
            repoLink: 'https://github.com/neoxsa/portfolio'
        }
    ]

    const categories = ['All', 'Frontend', 'Full-Stack']
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

    return (
        <section className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-black via-black to-green-900/5 px-6 lg:px-20 py-16 lg:py-28">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">My Projects</h1>
                    <div className="h-1 w-20 bg-green-400 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project showcases my skills in full-stack development, 
                        UI/UX design, and problem-solving.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition ${
                                filter === cat
                                    ? 'bg-green-400 text-black'
                                    : 'border border-green-400 text-green-400 hover:bg-green-400/10'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="group bg-white/3 backdrop-blur-sm border border-green-400/30 rounded-lg overflow-hidden hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-green-400/10 text-green-300 text-xs rounded font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 text-black font-semibold rounded hover:bg-green-300 transition"
                                    >
                                        <ExternalLink size={16} /> Live
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-green-400 text-green-400 font-semibold rounded hover:bg-green-400/10 transition"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <p className="text-gray-300 mb-6">Want to see more? Check out my GitHub!</p>
                    <a
                        href="https://github.com/neoxsa"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-8 py-3 bg-green-400 text-black font-bold rounded hover:bg-green-300 transition"
                    >
                        Visit My GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
