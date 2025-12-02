import profile_pic from '/profilePic/profile_pic.webp'
import { Link } from 'react-router-dom'
import { LucideGithub } from 'lucide-react'
import cy_2077_border from '../assets/btn/cy_2077_border.svg';


function HeroCard() {
  return (

    <>
      <section className="relative w-full flex flex-col gap-10 lg:flex-row items-center justify-center px-6 lg:px-20 py-28 lg:pt-60 bg-black/50 overflow-hidden">
        {/* Background neon aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.07)_0%,transparent_70%)] pointer-events-none"></div>
        <div
          className="absolute inset-0 bg-[linear-gradient(transparent_90%,rgba(22,163,74,0.12)_100%)]"
          style={{ mixBlendMode: 'overlay' }}
        ></div>

        {/* Image Section */}
        <div className="relative lg:absolute lg:right-20 lg:top-10 w-4/5 sm:w-3/4 md:w-1/3 flex justify-center z-40 mb-10 md:mb-0 group ">
          <div className="relative max-w-[340px]" style={{ filter: 'drop-shadow(0 0 8px #16a34a)' }}>
            {/* Outer frame */}
            <div
              className="absolute inset-0 border-4 border-green-600 pointer-events-none"
              style={{
                clipPath:
                  'polygon(30px 0,100% 0,100% calc(100% - 30px),calc(100% - 30px) 100%,0 100%,0 30px)',
              }}
            ></div>

            {/* Neon corners */}
            <span className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-4 border-l-4 border-green-400"></span>
            <span className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b-4 border-r-4 border-green-400"></span>

            {/* Image */}
            <img
              src={profile_pic}
              alt="Profile"
              loading="lazy"
              className="relative h-64 sm:h-72  md:h-80 w-full object-cover border-2 border-green-400 transform transition-transform duration-500 ease-in-out group-hover:scale-105 grayscale-75 hover:grayscale-0"
              style={{
                clipPath:
                  'polygon(30px 0,100% 0,100% calc(100% - 30px),calc(100% - 30px) 100%,0 100%,0 30px)',
              }}
            />

            {/* Inner glowing line */}
            <div
              className="absolute inset-1.5 border border-emerald-400/40 pointer-events-none"
              style={{
                clipPath:
                  'polygon(26px 0,100% 0,100% calc(100% - 26px),calc(100% - 26px) 100%,0 100%,0 26px)',
              }}
            ></div>
          </div>
        </div>

        {/* Text Section */}
        <div
          className="relative text-white bg-[#0c0c0c]/80 w-full md:w-4/6 p-8 sm:p-10 md:p-16 leading-relaxed z-10"
          style={{
            clipPath:
              'polygon(25px 0,100% 0,100% calc(100% - 25px),calc(100% - 25px) 100%,0 100%,0 25px)',
            boxShadow: 'inset 0 0 0 2px #16a34a, 0 0 15px rgba(22,163,74,0.7)',
          }}
        >
          {/* Frame inner layering */}

          <div
            className="absolute inset-1.5 border border-green-600/40 pointer-events-none"
            style={{
              clipPath:
                'polygon(21px 0,100% 0,100% calc(100% - 21px),calc(100% - 21px) 100%,0 100%,0 21px)',
            }}
          ></div>

          <h1 className="text-green-500 text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6 relative z-20 text-center md:text-left">
            Sadab Anwar
          </h1>

          {/*Animated Frontend Developer tag */}
          <div className="relative z-20 mb-6 text-center md:text-left">
            <span className="text-cyan-600 font-semibold uppercase tracking-widest text-base sm:text-lg border-l-4 border-green-500 pl-3 animate-pulse">
              Frontend Developer &gt;&gt;&gt;
            </span>
          </div>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 relative z-20 text-center md:text-left">
            I create modern web interfaces with React.
            I like keeping things simple, clear, and user-friendly.
            Every project is about improving the experience.
          </p>

          {/* Button Section */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">

            <Link
              to="https://github.com/neoxsa"
              target="_blank"
              className="inline-flex gap-2 text-green-400 border-2 border-green-400 px-8 py-3 font-semibold uppercase tracking-widest bg-green-500/10 hover:bg-green-600 active:bg-green-600 hover:text-black active:text-black transition-all duration-300 relative z-20"
              style={{
                clipPath:
                  'polygon(30px 0,100% 0,100% calc(100% - 30px),calc(100% - 30px) 100%,0 100%,0 30px)',
                boxShadow: '0 0 10px rgba(22,163,74,0.5)',
              }}
            >
              <LucideGithub />GitHub &gt;
            </Link>
          </div>

          {/* Corner Brackets */}
          <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-green-400"></span>
          <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-green-400"></span>
        </div>
      </section>

      <img
        src={cy_2077_border}
        alt="cyberpunk border"
        className="w-full h-5  rotate-180 "
      />
    </>
  )
}

export default HeroCard
