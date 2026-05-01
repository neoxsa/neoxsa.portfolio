import { useState } from 'react'
import { all_projects, socialUrl } from '#constants/constants'
import { ProjectCard } from '#components'

function Projects() {
  const [filter, setFilter] = useState('Featured')

  const categories = ['All', 'Featured', 'Live Projects', 'Personal']
  const filteredProjects = filter === 'All' ? all_projects : all_projects.filter(p => p.category.includes(filter))

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
              className={`px-6 py-2 rounded-full font-semibold transition cursor-pointer ${filter === cat
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
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              tech_stack={project.tech_stack}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
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
            href={socialUrl.github}
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
