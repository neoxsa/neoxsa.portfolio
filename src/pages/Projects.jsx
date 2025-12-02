import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { all_projects } from '#constants/constants'

function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All']
  const filteredProjects = filter === 'All' ? all_projects : all_projects.filter(p => p.category === filter)

  return (
    <section className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-transparent via-black to-green-900/5 px-6 lg:px-20 py-16 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">My Projects</h1>
          <div className="h-1 w-20 bg-green-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
           Here are some of the projects I've built. Each one highlights my skills in frontend development, UI/UX design, and turning ideas into functional, user-focused experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${filter === cat
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
              className="group bg-white/3 backdrop-blur-sm border border-green-400/30 rounded-lg hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition duration-300"
            >
               <span className="absolute -top-2 -left-2 w-5 h-5 border-t-4 border-l-4 border-emerald-500"></span>
            <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-4 border-r-4 border-emerald-500"></span>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800 rounded-t-lg">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300 "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech_stack.map(stack => (
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
          <p className="text-gray-300 mb-6">Check out my GitHub!</p>
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
