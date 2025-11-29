import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import cy_2077_border from '../../assets/btn/cy_2077_border.svg';

function Footer() {
    return (
        <footer className="relative mt-20">
            <img
                src={cy_2077_border}
                alt="cyberpunk border"
               className="w-full h-5 "        
      />
      
            <div
                className="bg-[#0a0a0a]/50 backdrop-blur-md text-white px-8 py-12 relative"
            
            >
                <div className="absolute inset-0 opacity-10"></div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl font-bold text-green-400 mb-2"
                            style={{ textShadow: '0 0 10px #16a34a' }}>CONNECT TO THE NETWORK</h2>
                        <div className="h-px bg-linear-to-r from-transparent via-green-400 to-transparent w-1/2 mx-auto"></div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Terminal Contact */}
                        <div className="bg-black/60 p-6 border border-green-500/50 relative"
                            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                            <h3 className="text-green-400 text-lg font-mono mb-4">&gt; CONTACT<span className='animate-ping'>_</span></h3>
                            <div className="space-y-2 text-green-400 font-mono text-sm md:text-[15px]">
                                <p>&gt; <span className='text-cyan-300'>EMAIL:</span>  sadabanwar@outlook.com</p>
                                <p>&gt; <span className='text-cyan-300'>LOCATION:</span> New Delhi, India</p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="bg-black/60 p-6 border border-green-500/50 relative" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                            <h3 className="text-green-400 text-lg font-mono mb-4">&gt; NAVIGATE<span className='animate-ping'>_</span></h3>
                            <div className="space-y-2 text-cyan-300 font-mono text-sm md:text-[15px]">
                                <p className="hover:text-yellow-300 cursor-pointer transition">
                                    <Link
                                        to='/about'
                                    >
                                        &gt; ABOUT.EXE
                                    </Link>
                                </p>
                                <p className="hover:text-yellow-300 cursor-pointer transition">
                                    <Link
                                        to='/projects'
                                    >
                                        &gt; PROJECTS.DIR
                                    </Link>
                                </p>
                                <p className="hover:text-yellow-300 cursor-pointer transition">
                                    <Link
                                        to='/contact'
                                    >
                                        &gt; CONTACT.TXT
                                    </Link>
                                </p>
                                {/* <p className="hover:text-yellow-300 cursor-pointer transition">
                                    <Link
                                        to='/'
                                    >
                                        &gt; RESUME.PDF
                                    </Link>
                                </p> */}
                            </div>
                        </div>

                        {/* Social Networks */}
                        <div className="bg-black/60 p-6 border border-green-500/50 relative" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                            <h3 className="text-green-400 text-lg font-mono mb-4">&gt; NETWORKS<span className='animate-ping'>_</span></h3>
                            <div className="space-y-2 text-green-300 font-mono text-sm md:text-[15px]">
                                <Link
                                    to="https://www.linkedin.com/in/neoxsa/" target="_blank" rel="noopener noreferrer"
                                    className="hover:text-blue-400 cursor-pointer transition flex items-center gap-2">
                                    &gt;<LinkedinIcon className='w-4 h-4 relative bottom-0.5' /> LINKEDIN.COM
                                </Link>
                                <Link
                                    to="https://www.github.com/neoxsa" target="_blank" rel="noopener noreferrer"
                                    className="hover:text-gray-500 cursor-pointer transition flex items-center gap-2">
                                    &gt;<GithubIcon className='w-4 h-4 relative bottom-0.5' /> GITHUB.COM
                                </Link>
                                {/* <Link
                                    to="https://www.twitter.com/neoxsa" target="_blank" rel="noopener noreferrer"
                                    className="hover:text-slate-300 cursor-pointer transition flex items-center gap-2">
                                    &gt;<TwitterIcon className='w-4 h-4 relative bottom-0.5' /> TWITTER.COM
                                </Link> */}

                            </div>
                        </div>
                    </div>

                    {/* Bottom Terminal */}
                    <div className="bg-black border border-green-500 p-4 font-mono text-green-400 text-center text-sm">
                        <p>&gt; © 2025 NEOXSA.EXE | POWERED_BY: REACT.JS + TAILWIND.CSS | STATUS: ONLINE<span className='animate-ping'>_</span></p>
                        <div className="mt-2 text-xs text-cyan-600">
                            <span className="animate-pulse">[SYSTEM_READY]</span> | CONNECTION_ESTABLISHED | WELCOME_TO_NEOXSA_PORTFOLIO
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer