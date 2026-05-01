import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import cy_2077_border from '../assets/btn/cy_2077_border.svg';
import { contact, socialUrl } from '#constants/constants';

function Footer() {
    return (
        <footer className="relative mt-20 ">
            <div
                className="w-full h-4 bg-repeat-x"
                style={{
                    backgroundImage: `url(${cy_2077_border})`,
                    backgroundSize: 'auto 100%'
                }}
            ></div>

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
                                <p>&gt; <span className='text-cyan-300'>EMAIL:</span> <a href={`mailto:${contact.email}`}
                                    className="text-green-400 hover:text-yellow-300">{contact.email}</a> </p>
                                <p>&gt; <span className='text-cyan-300'>LOCATION:</span> {contact.address} </p>
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
                                    to={socialUrl.linkedIn} target="_blank" rel="noopener noreferrer"
                                    className="hover:text-blue-400 cursor-pointer transition flex items-center gap-2">
                                    &gt;<LinkedinIcon className='w-4 h-4 relative bottom-0.5' /> linkedin.com
                                </Link>
                                <Link
                                    to={socialUrl.github} target="_blank" rel="noopener noreferrer"
                                    className="hover:text-gray-500 cursor-pointer transition flex items-center gap-2">
                                    &gt;<GithubIcon className='w-4 h-4 relative bottom-0.5' /> github.com
                                </Link>
                                {/* <Link
                                    to="" target="_blank" rel="noopener noreferrer"
                                    className="hover:text-slate-300 cursor-pointer transition flex items-center gap-2">
                                    &gt;<TwitterIcon className='w-4 h-4 relative bottom-0.5' /> x.com
                                </Link> */}

                            </div>
                        </div>
                    </div>

                    <div className="bg-black border border-green-500 p-4 font-mono text-green-400 text-sm">

                        {/* Bottom Terminal */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-green-500">&gt;</span>

                            <span>© {new Date().getFullYear()} NEOXSA.EXE</span>

                            <span className="text-green-700">|</span>

                            <span className="text-green-300">
                                POWERED_BY: REACT.JS + TAILWIND.CSS
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-green-500">&gt;</span>

                            <span>STATUS:</span>
                            <span className="text-green-300">ONLINE</span>

                            {/* live dot */}
                           <sup>
                             <span className="relative flex h-2 w-2 my-2">
                                <span className="animate-ping absolute -bottom-0.5 inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex -bottom-0.5 rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                           </sup>
                        </div>


                        <div className="mt-2 text-xs text-cyan-500 flex flex-wrap gap-2">
                            <span className="text-green-500">&gt;</span>
                            <span className="animate-pulse">[SYSTEM_READY]</span>
                            <span>|</span>
                            <span>CONNECTION_ESTABLISHED</span>
                            <span>|</span>
                            <span>WELCOME_TO_NEOXSA_PORTFOLIO</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer