import React from 'react'
import { ExternalLink, Github } from 'lucide-react'


export default function ProjectCard({
    image,
    title,
    description,
    tech_stack,
    liveLink,
    repoLink
}) {
    return (
        <section
            className="group bg-white/3 backdrop-blur-sm border border-green-400/30 rounded-lg hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition duration-300"
        >
            <span className="absolute -top-2 -left-2 w-5 h-5 border-t-4 border-l-4 border-emerald-500"></span>
            <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-4 border-r-4 border-emerald-500"></span>
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden bg-gray-800 rounded-t-lg">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300 "
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tech_stack.map(stack => (
                        <span
                            key={stack}
                            className="px-2 py-1 bg-green-400/10 text-green-300 text-xs rounded font-medium"
                        >
                            {stack}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 text-black font-semibold rounded hover:bg-green-300 transition"
                    >
                        <ExternalLink size={16} /> Live
                    </a>
                    {
                        repoLink !== null &&
                            <a
                                href={repoLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-green-400 text-green-400 font-semibold rounded hover:bg-green-400/10 transition"
                            >
                                <Github size={16} /> Code
                            </a>
                    }
                </div>
            </div>
        </section>
    )
}
