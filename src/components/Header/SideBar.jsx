import { GithubIcon, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

function SideBar({
  open,
  close
}) {

  return (
    <aside
      className={`fixed left-0 md:left-500 h-full z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out `}
    >
      <div
        className="w-screen md:w-72 h-full bg-[#0b0b0b]/95 text-white p-6 flex flex-col relative border border-green-400 m-5 shadow-lg shadow-emerald-400"
        style={{
          borderRadius: '8px',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          padding: '10px',
          boxShadow: 'inset 0 0 0 1px #16a34a',
          filter: 'drop-shadow(0 0 2px #16a34a)',
        }}
      >
        <div>

          <nav>
            <ul className="flex flex-col gap-2 justify-center text-xl">
              <li>
                <Link
                  to="/"
                  onClick={close}
                  className="block py-2 px-4 rounded border border-transparent hover:border-green-400 hover:bg-green-400/10 hover:text-green-400 focus:outline-none focus:border-green-400 focus:bg-green-400/10 focus:text-green-400 transition duration-200 text-emerald-500">HOME</Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={close}
                  className="block py-2 px-4 rounded border border-transparent hover:border-green-400 hover:bg-green-400/10 hover:text-green-400 focus:outline-none focus:border-green-400 focus:bg-green-400/10 focus:text-green-400 transition duration-200 text-emerald-500">PROJECTS</Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={close}
                  className="block py-2 px-4 rounded border border-transparent hover:border-green-400 hover:bg-green-400/10 hover:text-green-400 focus:outline-none focus:border-green-400 focus:bg-green-400/10 focus:text-green-400 transition duration-200 text-emerald-500">ABOUT</Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={close}
                  className="block py-2 px-4 rounded border border-transparent hover:border-green-400 hover:bg-green-400/10 hover:text-green-400 focus:outline-none focus:border-green-400 focus:bg-green-400/10 focus:text-green-400 transition duration-200 text-emerald-500">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-t absolute bottom-30">
          <p className="text-sm text-gray-300 mb-3">Connect</p>
          <div className="flex gap-3">
            <a href="https://github.com/neoxsa" target="_blank" rel="noreferrer" className="p-2 rounded bg-white/3 hover:bg-white/5 outline outline-green-400">
              <GithubIcon className='text-green-400 active:text-white' />
            </a>
            <a href="https://linkedin.com/in/neoxsa" target="_blank" rel="noreferrer" className="p-2 rounded bg-white/3 hover:bg-white/5 outline outline-green-400">
              <Linkedin className='text-green-400 active:text-white' />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
