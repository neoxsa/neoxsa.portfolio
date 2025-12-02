import btnCyan from '../assets/btn/btn-cyan.svg'
import { LucideGithub, Sparkle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { all_projects } from '#constants/constants'


function ProjectCard() {

  return (
    <section
      className="flex flex-col items-center justify-center w-full bg-black/40  text-white relative overflow-hidden py-20">
      {/* Header */}
      <h2
        className="text-green-600 text-center text-4xl lg:text-5xl font-extrabold mb-16 tracking-wider">
        FEATURED PROJECTS &gt;&gt;
      </h2>

      {/* Card */}
      <div
        className="flex flex-col gap-20 px-10 md:px-20 w-full max-w-7xl  ">

        {all_projects.slice(0,2).map((project, i) => (
          <div
            key={i}
            className='relative'
          >
            <div className="flex items-center gap-2 px-4 py-3 rounded-t-lg bg-[#080808] border-b border-green-600  select-none text-sm text-gray-400">
              <div className="size-3.5 rounded-full bg-[#ff6157]"></div >
              <div className="size-3.5 rounded-full bg-[#ffc030] "></div>
              <div className="size-3.5 rounded-full bg-[#2acb42]"></div>
            </div>
            {/* Neon corners */}
            <span className="absolute -top-2 -left-2 w-5 h-5 border-t-4 border-l-4 border-emerald-500"></span>
            <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-4 border-r-4 border-emerald-500"></span>
            <div
              className="relative bg-[#0a0a0a] border-2 border-green-600 p-4 rounded-none duration-200  hover:shadow-[0_0_25px_#16a34a] lg:flex lg:gap-5 hover:brightness-100"

            >

              {/* Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  loading='lazy'
                  className="w-full h-78 object-cover object-left lg:object-fill lg:w-full lg:h-90 lg:object-fit border-2 border-emerald-600 transition-all duration-200 rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="mt-5 lg:w-1/2 ">
                <h3 className="text-green-500 text-2xl font-bold mb-2 uppercase tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-3">{
                    project.tech_stack.map((stack) => (
                      <span
                        key={stack}
                        className=" px-4 py-2 bg-green-400/10 border border-green-400 text-green-300 rounded-full text-sm font-medium">
                        {stack}
                      </span>
                    ))
                  }</div>
                </div>
                <div className=' flex flex-col lg:flex-row gap-5'>
                  <Link
                    to={project.repoLink}
                    target='_blank'
                    className="relative inline-block w-48 h-12 group cursor-pointer hover:scale-105"
                  >
                    <img
                      src={btnCyan}
                      alt="Button"
                      className="w-full h-full group-hover:brightness-125 transition-all duration-200"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-green-600 font-semibold text-md  gap-3 hover:text-gray-400 active:text-gray-400 transition-all duration-200">
                      View on <LucideGithub className='w-5' /> &gt;
                    </span>
                  </Link>
                  <Link
                    to={project.liveLink}
                    target='_blank'
                    className="relative inline-block w-48 h-12 group cursor-pointer hover:scale-105 "
                  >
                    <img
                      src={btnCyan}
                      alt="Button"
                      className="w-full h-full group-hover:brightness-125 transition-all duration-200"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-green-600 font-semibold text-md gap-3 hover:text-purple-400 transition-all duration-200">
                      Live <Sparkle className='w-5' /> &gt;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.08)_0%,transparent_70%)] pointer-events-none" />
    </section>
  )
}

export default ProjectCard
